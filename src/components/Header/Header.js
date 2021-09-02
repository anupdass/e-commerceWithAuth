import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const {loginItem} = useContext(userContext);
    const[login,setLogin] = loginItem;
    return (
        <nav className='nav'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/product' className='link'>Product</Link>
            <Link to='/cart' className='link'>Cart</Link>
            {
                login.email ? 
                <Link to='/login' className='link'>Sign Out</Link> 
                :
                <Link to='/login' className='link'>Login</Link>
            }

            {
                login.name ? <p className='link name'>{login.name}</p>: <p></p>
            }
        </nav>
    );
};

export default Header;