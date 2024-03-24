import express from "express";
import User from "../models/userModels.js";
import mongoose from "mongoose";


const router=express.Router();

//REST Api is created
router.get("/",async(req,res)=>{

    console.log("api is running");

    //return back all the data
    const userData=await User.find();

    res.status(200).json(userData);
    // res.send("<h1>Hello World</h1>");

});


//Implement CRUD oprations

router.post("/",async(req,res)=>{

    //insert user data into database

    console.log(req.body);
    //res.json(req.body);
    try {
        const UserAdded=await User.create({
            name:req.body["name"],
            email:req.body["email"],
            age:req.body["age"]
        });

        res.status(201).json(UserAdded);
        console.log("Added successfully");
        
    } catch (error) {

        res.status(404).json({error});
        console.log(error);
    }

});

router.get("/:id",async(req,res)=>{

   //find a unique user
   const {id}=req.params;

   try {

    const uniqueUser= await User.findById({_id:id});

    res.status(201).json(uniqueUser);

    console.log(uniqueUser);
    console.log("Unique User found");
    
   } catch (error) {

        res.status(404).json({error});
        console.log(error);

   }
});

router.delete("/:id",async(req,res)=>{

    const {id}=req.params;

    try {

        const userDeleted=await User.findByIdAndDelete({_id:id});

        res.status(201).json(userDeleted)
        console.log(userDeleted);// get the details of the deleted user
        console.log("Deleted successfully");
        
    } catch (error) {
        
        res.status(404).json({error});

        console.log(error);
    }
});

router.patch("/:id",async(req,res)=>{

    //update an user data 

    const {id}=req.params;

    const {name,email,age}=req.body;

    try {

        const updatedUser=await User.findByIdAndUpdate(id,req.body,{new:true,upsert:true});
        //upsert-> creates a new doc if the fuilter does not match

        res.status(201).json(updatedUser);

        console.log(updatedUser);
        console.log("Updated successfully");
        
    } catch (error) {

        res.status(404).json({error});

        console.log(error);
    }
});


export default router;