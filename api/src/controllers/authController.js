import User from "../models/UserModel.js";
import { hash, compare } from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashPassword = await hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });

    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (err) {
        next(errorHandler(500,"error in signup"))
    }
};

export const signin = async (req,res,next) => {
    const {email,password} = req.body;

    try{
        const validUser = await User.findOne({email});
        // console.log(validUser);
        // console.log("password from user : ",password);
        // console.log("password from hashed : ",validUser.password);
        
        if(!validUser)
            return next(errorHandler(404,"user not found"));
        
        const validatePassword = await compare(password,validUser.password);
        if(!validatePassword)
            return next(errorHandler(404,"password is incorrect"));

        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)

        //dont send password to user so destructure it 
        const {password:pass,...rest} = validUser._doc;
        res
            .cookie('access_token',token, {httpOnly:true})
            .status(200)
            .json(rest);
    }catch(error){
        next(errorHandler(500,`error in signin : ${error}`))
    }
}

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
            // Destructure to omit password from the response
            const { password: pass, ...rest } = user._doc;
            res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
        } 
        else {
            const generatedPass = Math.random().toString(36).slice(-8);
            const hashedPass = await hash(generatedPass, 10); // Await the hash function
            console.log(req.body.name);
            
            const newUser = new User({
                username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPass,
                avatar: req.body.photo,
            });
    
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            
            // Ensure you're referencing the new user
            const { password: pass, ...rest } = newUser._doc; 
            res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
        }
    }    
    catch (err) {
        next(errorHandler(500, `Error in signing with Google: ${err}`));
    }
};
  