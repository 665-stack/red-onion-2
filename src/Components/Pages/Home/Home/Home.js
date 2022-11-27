import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='flex justify-center items-center pt-14'>
                <Link className='mr-8' to="/breakfast">Breakfast</Link>
                <Link className='mr-8' to="/lunch">Dinner</Link>
                <Link className='mr-8' to="/dinner">Lunch</Link>
            </div>
        </>

    );
};

export default Home;