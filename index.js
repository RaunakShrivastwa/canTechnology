import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT,(err)=>{
    if(err){
        return console.log("There  is Error ",err);
    }

    console.log(`Server Up and Running at PORT ${PORT}`);
})
