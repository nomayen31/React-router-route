import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='userStyle'>
            <h3>Post of is: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;