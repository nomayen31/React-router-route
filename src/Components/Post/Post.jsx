import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate()
    const handleShowDetails = () => {
        navigate(`/post/${id}`)

    }
    return (
        <div className='userStyle'>
            <h3>Post of is: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}> <button>Post Detail</button></Link>
            <button onClick={handleShowDetails}>Click to see details </button>
        </div>
    );
};

export default Post;