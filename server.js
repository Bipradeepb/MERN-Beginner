import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app=express();
app.use(cors());

//CONNECT to database
mongoose.connect(process.env.URI).
then(()=>{
    console.log("Connected successfully");
})
.catch(err=>{
    console.log("error",err);
});

//REST Api is created
app.use(bodyParser.urlencoded({extended:true})); //for urlencoded form data 
app.use(express.json()); //for every other form of data

app.use(router);

app.listen((process.env.PORT||8000),(err)=>{

    if(err)
    {
        console.log(err);
    }

    console.log(`Server is listening on port ${process.env.PORT}`);
});

