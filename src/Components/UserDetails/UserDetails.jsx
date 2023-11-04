import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () =>{
    const user = useLoaderData(); 
    const {name} = user; 
    return(
        <div>
            <p>Details User: {name}</p>
        </div>
    )
}
export default UserDetails;