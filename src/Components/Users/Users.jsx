import { useLoaderData } from 'react-router-dom';
import './Users.css'
import User from '../user/user';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our users: {users.length}</h1>
            <p>Fantastic and vodro users</p>

            <div className='users'>
            <div className="users">
                {
                    users.map(user => <User 
                        key={user.id} 
                        user={user}>
                        </User>)
                }
            </div>
            </div>
        </div>
    );
};

export default Users;