import React from 'react';
import './user.css'

const User = ({user}) => {
    const {id, name , phone,email,} = user;

 
    return (
        <div className='userStyle'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;