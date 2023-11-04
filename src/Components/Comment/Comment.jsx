import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id, name , email, body} = comment;
    return (
        <div className='userStyle'>
            <p>Id: {id}</p>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>body : {body}</p>
            <Link to={`/comment/${id}`}>Comments Details</Link>
          
        </div>
    );
};

export default Comment;