import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo2.png'
import './Header.css'
const Header = () => {
    return (
        <div className='flex '>
            <img className='logoImg' src={logo2} alt="red onion logo" />
            <div>
                <Link to='/card'>Card</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;