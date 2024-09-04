import express from 'express';
import userRouter from './src/router/userRouter.js'; // Ensure the path is correct
import authRouter from './src/router/authRouter.js';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use userRouter for routes starting with /user
app.use('/user',userRouter);
app.use('/auth',authRouter);

export default app;
