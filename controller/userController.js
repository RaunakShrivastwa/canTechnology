import User from "../model/User.js";
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

export default class userController{
    
    // Adding USer to DB
     addUser = async(req,res)=>{
        const file = req.body.avtar;
        
        
    }

    // fetch All USer
    getAllUser = async(req,res)=>{

    }

    // Delete User
    deleteUser = async(req,res)=>{

    }

    // Update User 
    updateUser = (req,res)=>{

    }

    // Fetch single User
    fetchSingleUser = (req,res)=>{

    }


}