import React from 'react';

const Facility = ({fac}) => {
    const {name, details}=fac;
    return (
        <div className='bg-[#F3F3F3] rounded-lg border-t-2 border-t-[#FF3811] p-8 space-y-2'>
             <h1 className='text-xl font-bold'>{name}</h1>
             <p>{details}</p>
        </div>
    );
};

export default Facility;