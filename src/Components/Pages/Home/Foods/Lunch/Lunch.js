import React from 'react';
import lunch1 from "../../../../../images/lunch/lunch1.png";
import lunch2 from "../../../../../images/lunch/lunch2.png";
import lunch3 from "../../../../../images/lunch/lunch3.png";
import lunch4 from "../../../../../images/lunch/lunch4.png";
import lunch5 from "../../../../../images/lunch/lunch5.png";
import lunch6 from "../../../../../images/lunch/lunch6.png";

const Lunch = () => {
    return (

        <div className='breakfast pt-2 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8	text-center'>
            <div>
                <img src={lunch1} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$9</p>
            </div>
            <div >
                <img src={lunch2} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$12</p>
            </div>
            <div >
                <img src={lunch3} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p >How we dream about our future</p>
                <p className='text-3xl font-semibold'>$19</p>
            </div>
            <div >
                <img src={lunch4} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$3</p>
            </div>
            <div >
                <img src={lunch5} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$14</p>
            </div>
            <div >
                <img src={lunch6} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$23</p>
            </div>
        </div >

    );
};

export default Lunch;