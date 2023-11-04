import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our users: {users.length}</h1>
            <p>Fantastic and vodro users</p>

            <div className='users'>
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}
                    ></User> )
                }
            </div>
        </div>
    );
};

export default Users;