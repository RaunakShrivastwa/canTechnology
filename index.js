import express from 'express';
import dotenv from 'dotenv';
import DB from './config/DB.js';
import router from './router/APIgateWay.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use('/',router)
app.listen(PORT,(err)=>{
    if(err){
        return console.log("There  is Error ",err);
    }

    console.log(`Server Up and Running at PORT ${PORT}`);
})
