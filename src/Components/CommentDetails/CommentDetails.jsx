import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetails = () => {
    const comment = useLoaderData()
    const {id, name , email, body} = comment;
    return (
        <div>
            <p>Id: {id}</p>
            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>body : {body}</p>
        </div>
    );
};

export default CommentDetails;