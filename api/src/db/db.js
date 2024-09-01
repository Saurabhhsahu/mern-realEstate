import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("connected to Mongodb");
})
.catch((err) => {
    console.log("Error in connection to database : ",err);
})

export {mongoose}

