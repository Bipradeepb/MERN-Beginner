import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Allpost = (props) => {

    //render all the data in cards
    const [data,setData]=useState();
    const [error,setError]=useState("");
    const [deletestatus,setStatus]=useState(false);

    const displayAll=async()=>{

        const response= await fetch("http://localhost:5000",{
            method:"GET"
        });

        const alluserData=await response.json();

        if(response.ok)
        {
            setData(alluserData);
            setError("");
            console.log(alluserData);
        }

        if(!response.ok)
        {
            setError(alluserData.error);
        }
    }

    const handleDelete=async(id)=>{

        console.log(id);

        const response=await fetch(`http://localhost:5000/${id}`,{
            method:"DELETE"
        });

        const result=await response.json();

        if(response.ok)
        {
            console.log(result);
            displayAll();
            setError("");
            setStatus(true);

            setTimeout(()=>{
                setStatus(false);

            },2000);
        }

        if(!response.ok)
        {
            setError(result.error);
            console.log(result.error);
        }
    }

    useEffect(()=>{

        displayAll();

    },[]);

    return (
        <div>
            <div className="bg-body-tertiary p-3 allpost-bg">
                {error&&(<div className="alert alert-danger fixed-top z-3" role="alert">{error}</div>)}
                {deletestatus&&(<div className="alert alert-success align-alert" role="alert">Deleted successfully!</div>)}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {data?.map((ele)=>(
                        <Card
                            key={ele._id}
                            id={ele._id}
                            name={ele.name}
                            email={ele.email}
                            age={ele.age}
                            updatedAt={ele.updatedAt}
                            onClick={handleDelete}
                        />
                ))}
                </div>
            </div>
        </div>
    )
};

export default Allpost;
