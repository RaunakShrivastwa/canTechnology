import express from 'express';
import dotenv from 'dotenv';
import DB from './config/DB.js';
import Gatway from './router/APIgateWay.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// API Gatway (Entry Point for all)
app.use('/',Gatway);




app.listen(PORT,(err)=>{
    if(err){
        return console.log("There  is Error ",err);
    }

    console.log(`Server Up and Running at PORT ${PORT}`);
})
