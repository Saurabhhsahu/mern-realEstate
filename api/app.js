import express from 'express';
import userRouter from './src/router/userRouter.js'; // Ensure the path is correct

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use userRouter for routes starting with /user
app.use('/user',userRouter);

export default app;
