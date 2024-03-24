
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const [error,setError]=useState("");
    const redirect=useNavigate();

    const handleSubmit=async(e)=>{

        e.preventDefault();
        const useData={name,email,age};
        console.log(useData);

        //post the user data to backend via api

        const response=await fetch("http://localhost:5000",{
            method:"POST",
            body:JSON.stringify(useData),
            headers:{
                "Content-type":"application/json"
            }
        });

        console.log(response);
        const apiData=await response.json();

        if(response.ok)
        {
            console.log(apiData);
            setError("");
            setName("");
            setEmail("");
            setAge("");
            redirect("/all");
        }
        
        if(!response.ok)
        {
            setError(apiData.error);
            console.log(apiData.error);
        }
    }

    return (
        <div>
            <div className="bg-body-tertiary form-container ">
                <div>
                    {
                        (error.code===11000?<div class="alert alert-danger" role="alert">
                            Email already in use!
                        </div>:null)
                    }
                    <h1 className="text-center">Fill the form</h1>
                    <form className="form-create" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Age</label>
                            <div className="col-sm-10">
                            <input type="number" className="form-control" id="age" name="age"  value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" className="btn btn-primary d-grid">
                            Create Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;
