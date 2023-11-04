import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
                <NavLink to='/comments'>Comments</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <Link to='/users'>Users</Link>
                
            </nav>
        </div>
    );
};

export default Header;