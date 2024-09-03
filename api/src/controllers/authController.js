import User from "../models/UserModel.js";
import { hash } from "bcrypt";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashPassword = await hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });

    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (err) {
        res.status(500).json({ error: "Error in signup", details: err.message });
    }
};
