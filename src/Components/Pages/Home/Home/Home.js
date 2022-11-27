import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='flex justify-center items-center pt-14 pb-14'>
                <Link className='mr-8 hover:text-rose-600 font-semibold	' to="breakfast">Breakfast</Link>

                <Link className='mr-8 hover:text-rose-600 font-semibold	' to="dinner">Dinner</Link>

                <Link className='mr-8 hover:text-rose-600 font-semibold	' to="lunch">Lunch</Link>
            </div>
            <div className='flex justify-center items-center w-full pb-8'>
                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Home;