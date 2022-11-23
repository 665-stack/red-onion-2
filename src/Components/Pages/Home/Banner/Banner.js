import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-div px-1 sm:px-5'>
                <h1 className='font-semibold  text-3xl sm:text-4xl md:text-5xl'>Best food waiting for your belly</h1>
                <br />
                <input className='font-semibold	bg-white px-4 py-2  rounded-full' type="text" placeholder='search something' />
                <button className=' bg-rose-600 mt-2 sm:mt-0 px-6 py-2 text-white rounded-full font-semibold	'>Search</button>
            </div>
        </div >
    );
};

export default Banner;