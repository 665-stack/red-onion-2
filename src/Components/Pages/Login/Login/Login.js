import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

        console.log(email, password);
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
        console.log(user);
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-rose-500 ml-2 mr-2'>Error: {error?.message}</p>
    }


    return (
        <div className='signUp flex justify-center items-center mt-28'>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="emial" placeholder='Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                {errorElement}
                <br />
                <button className='bg-rose-600 px-6 py-2 text-white' type="submit">Login</button>
                <br />

                <Link to='/signup' className='text-rose-600 flex justify-center mt-2 '>Create new account</Link>
            </form>

        </div>
    );
};

export default Login;