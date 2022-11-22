import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../../images/logo2.png'

const Login = () => {
    return (
        <div className='signUp flex justify-center items-center mt-28'>
            <form>
                <input type="email" name="email" id="emial" placeholder='Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                <button className='bg-rose-600 px-6 py-2 text-white' type="submit">Login</button>
                <br />

                <Link to='/signup' className='text-rose-600 flex justify-center mt-2 '>Create new account</Link>
            </form>

        </div>
    );
};

export default Login;