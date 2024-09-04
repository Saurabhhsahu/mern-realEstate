import express from 'express';
import cors from 'cors';
import userRouter from './src/router/userRouter.js'; // Ensure the path is correct
import authRouter from './src/router/authRouter.js';

const app = express();
app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies

// Use userRouter for routes starting with /user
app.use('/user',userRouter);
app.use('/api/auth',authRouter);

export default app;
