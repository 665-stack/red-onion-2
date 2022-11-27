import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo2 from '../../../images/logo2.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className='flex justify-center sm:justify-between items-center	bg-white px-2 sm:px-12 py-3'>

            <Link to='/'><img className='logoImg hidden sm:block' src={logo2} alt="red onion logo" /></Link>

            <div className='header-link'>
                <Link className='sm:hidden' to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>

                {user ? <button onClick={handleSignOut} className="bg-rose-600 px-6 py-2 text-white rounded-full ml-3">Sign Out</button>
                    : <>
                        <Link to='/login'>Login</Link>
                        <Link className='bg-rose-600 px-6 py-2 text-white rounded-full' to='/signup'>Sign Up</Link>
                    </>
                }
            </div>

        </div>
    );
};

export default Header;