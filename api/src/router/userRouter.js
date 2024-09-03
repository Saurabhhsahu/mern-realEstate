import express from 'express'

const userRouter = express.Router();

userRouter.get('/',(req,res) => {
    return res.send("get all the user data");
})

export default userRouter;