import React from 'react';
import './Breakfast.css'

import breakfast1 from "../../../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../../../images/breakfast/breakfast6.png";

const Breakfast = () => {
    return (
        <div className='breakfast pt-2 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8	text-center'>
            <div>
                <img src={breakfast1} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$9</p>
            </div>
            <div >
                <img src={breakfast2} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$12</p>
            </div>
            <div >
                <img src={breakfast3} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$19</p>
            </div>
            <div >
                <img className='w-48' src={breakfast4} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$3</p>
            </div>
            <div >
                <img src={breakfast5} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$14</p>
            </div>
            <div >
                <img src={breakfast6} alt="" />
                <h3>Unknown Food :(</h3>
                <p>How we dream about our future</p>
                <p>$23</p>
            </div>
        </div >
    );
};

export default Breakfast;