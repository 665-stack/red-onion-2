import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth"
import './SignUp.css'
import { async } from '@firebase/util';

const Signup = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleSignUp = async e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    let successMessage;
    if (user) {
        console.log(user);
        successMessage = <p className='text-green-500 mb-2 ml-2 mr-2'>User created</p>
        navigate('/')
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-rose-500 mb-2 ml-2 mr-2'>Error: {error?.message}</p>
    }
    return (
        <div className='signUp flex justify-center items-center mt-28'>

            <form onSubmit={handleSignUp}>
                <div>
                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        required
                    // onBlur={(e) => setName(e.target.value)} 
                    />

                    <br />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                        required
                    // onBlur={(e) => setEmail(e.target.value)} 
                    />

                    <br />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        required
                    // onBlur={(e) => setPassword(e.target.value)} 
                    />
                    <br />


                    {/* <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
<br /> */}
                    {errorElement}
                    {successMessage}

                    <button className='bg-rose-600 px-6 py-2 text-white' type="submit">Sign Up</button>
                    <br />

                    <Link to='/login' className='text-rose-600 flex justify-center mt-2 '>Already have an account</Link>
                </div>

            </form>


        </div >
    );
};

export default Signup;