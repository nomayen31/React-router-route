import React from 'react';
import './user.css'
import { Link } from 'react-router-dom';

const User = ({user}) => { 
    const {id, name , phone,email,} = user; 
 
    return (
        <div className='userStyle'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;