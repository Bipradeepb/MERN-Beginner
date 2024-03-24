
import mongoose from "mongoose";

//Create schema -> structure for our database

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    }
},{timestamps:true});

//now create a Model w.r.t Schema

const User=mongoose.model('User',userSchema);

export default User;