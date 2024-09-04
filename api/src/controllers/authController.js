import User from "../models/UserModel.js";
import { hash } from "bcrypt";
import { errorHandler } from "../utils/error.js";

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
