import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h1>This is commemts</h1>

            <div className='users'>
                {
                    comments.map(comment => <Comment
                    key={comment.id}
                    comment={comment}
                    ></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;