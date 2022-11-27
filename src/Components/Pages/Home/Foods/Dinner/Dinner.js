import React from 'react';

import dinner1 from "../../../../../images/dinner/dinner1.png";
import dinner2 from "../../../../../images/dinner/dinner2.png";
import dinner3 from "../../../../../images/dinner/dinner3.png";
import dinner4 from "../../../../../images/dinner/dinner4.png";
import dinner5 from "../../../../../images/dinner/dinner5.png";
import dinner6 from "../../../../../images/dinner/dinner6.png";

const Dinner = () => {
    return (
        <div className='breakfast pt-2 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8	text-center'>
            <div>
                <img src={dinner1} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$9</p>
            </div>
            <div >
                <img src={dinner2} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$12</p>
            </div>
            <div >
                <img src={dinner3} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p >How we dream about our future</p>
                <p className='text-3xl font-semibold'>$19</p>
            </div>
            <div >
                <img src={dinner4} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$3</p>
            </div>
            <div >
                <img src={dinner5} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$14</p>
            </div>
            <div >
                <img src={dinner6} alt="" />
                <h3 className='text-lg font-semibold'>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p className='text-3xl font-semibold'>$23</p>
            </div>
        </div >
    );
};

export default Dinner;