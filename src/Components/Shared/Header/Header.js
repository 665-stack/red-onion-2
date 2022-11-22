import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo2.png'
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between items-center	bg-slate-50 px-4 sm:px-12 py-4'>

            <Link to='/'><img className='logoImg' src={logo2} alt="red onion logo" /></Link>

            <div className='header-link '>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
                <Link className='bg-rose-600 px-6 py-2 text-white rounded-full' to='/signup'>Sign Up</Link>
            </div>

        </div>
    );
};

export default Header;