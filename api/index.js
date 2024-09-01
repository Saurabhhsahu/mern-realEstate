import {app} from './src/app/app.js'
import { mongoose } from './src/db/db.js'
import dotenv from 'dotenv'

dotenv.config();


app.listen(3000,() => {
    console.log("server is running on PORT : 3000!!!");
})
