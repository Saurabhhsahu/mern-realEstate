import express from "express"
import {signup} from "../controllers/authController.js"

const authRouter = express.Router();

authRouter.post("/signup",signup);

authRouter.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json(
        {
            success : false,
            statusCode,
            message
        }
    );
})

export default authRouter;