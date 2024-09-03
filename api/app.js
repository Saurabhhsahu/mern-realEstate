import express from 'express';
import userRouter from './src/router/userRouter.js'; // Ensure the path is correct
import authRouter from './src/router/authRouter.js';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use userRouter for routes starting with /user
app.use('/user',userRouter);
app.use('/auth',authRouter);

app.use((err,req,res,next) => {
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

export default app;
