import React from 'react';
import banner from '../../../assets/images/banner/4.jpg'
const DefaultBanner = ({title}) => {
    return (
        <div className='relative rounded-lg mb-20'>
             <img className='h-72 w-full rounded-lg' src={banner} alt="" />
             <div className='h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 flex items-center px-20'>
                <h1 className='text-3xl font-bold text-white'>{title}</h1>
             </div>
        </div>
    );
};

export default DefaultBanner;