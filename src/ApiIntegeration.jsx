import React, { useEffect, useState } from "react";

function ApiIntegeration(){
    const[users,setusers]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    return(
        <div className="row">
            {users.map((users)=>{
                return(
                    <div className="col-md-3">
                        <h3>{users.name}</h3>
                        <p>{users.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ApiIntegeration