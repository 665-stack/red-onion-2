import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className=' px-1 sm:px-5'>
                <h1 className='font-semibold text-3xl md:text-5xl'>Best food waiting for your belly</h1>
                <br />
                <input className='font-semibold	bg-white px-10 py-1 rounded-full' type="text" placeholder='search something' />
                <button className=' bg-rose-600 px-6 py-2 text-white rounded-full font-semibold	'>Search</button>
            </div>
        </div >
    );
};

export default Banner;