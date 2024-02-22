import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
        
    },
    userPassword:{
        type:String,
        required:true,
        validate: {
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character!`
        }
        
    },
    userDOB:{
        type:String,
        required:true
        
    },
    avtar:{
      type:String
    },
    userMob:{
        type:Number,
        required:true
        
    },
    userAddress:{
        type:String,
        required:true
        
    },
    userProof:{
        type:String,
        required:true
        
    },
    userBio:{
        type:String
    },
    userRole:{
       type:String,
       required:true
       
    },
    enroll:{
        type:String
    },
    courses:[],
    certification:[],
    skills:[],
    projects:[],
    resume:[],
    referal:{
        
    }
    
},{timestamps:true});

const User = mongoose.model("MYData",UserSchema);

export default User;