import app from './app.js'
import {mongoose} from '../api/src/db/db.js';

app.listen(3000,() => {
    console.log("server is running on PORT : 3000!!!");
})
