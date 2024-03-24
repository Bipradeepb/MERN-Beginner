import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = (props) => {

    const {id}=useParams();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[error,setError]=useState("");
    const redirect=useNavigate();

    const getuniqueUser=async()=>{

        const response=await fetch(`http://localhost:5000/${id}`,{
            method:"GET"
        });

        const uniqueUser=await response.json();

        if(response.ok)
        {
            console.log(uniqueUser);
            setError("");
            setName(uniqueUser.name);
            setEmail(uniqueUser.email);
            setAge(uniqueUser.age);
        }

        if(!response.ok)
        {
            console.log(uniqueUser.error);
            setError(uniqueUser.error);
        }
        
    };

    useEffect(()=>{

        getuniqueUser();

    },[]);

    const handleUpdate=async(event)=>{

        event.preventDefault();

        const newuserDetails={name,email,age};

        const response=await fetch(`http://localhost:5000/${id}`,{
            method:"PATCH",
            body:JSON.stringify(newuserDetails),
            headers:{
                "Content-type":"application/json"
            }
        });

        const updatedUser=await response.json();

        if(response.ok)
        {
            setError("");
            console.log(updatedUser);
            redirect("/all");
        }

        if(!response.ok)
        {
            setError(updatedUser.error);
            console.log(updatedUser.error);
        }
    };

    return (
        <div>
            <div className="bg-body-tertiary form-container ">
                <div>
                    {
                        (error?<div class="alert alert-danger" role="alert">
                            Email already in use!{error}
                        </div>:null)
                    }
                    <h1 className="text-center">Update your data</h1>
                    <form className="form-create" onSubmit={handleUpdate}>
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
                            Update Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default UpdatePost;
