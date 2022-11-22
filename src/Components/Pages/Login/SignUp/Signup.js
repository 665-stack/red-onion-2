import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const Signup = () => {
    return (
        <div className='signUp flex justify-center items-center mt-28'>

            <form action="">
                <input type="text" placeholder='Name' />
                <br />
                <input type="email" name="email" id="emial" placeholder='Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                <br />
                <button className='bg-rose-600 px-6 py-2 text-white' type="submit">Sign Up</button>
                <br />

                <Link to='/login' className='text-rose-600 flex justify-center mt-2 '>Already have an account</Link>
            </form>


        </div >
    );
};

export default Signup;