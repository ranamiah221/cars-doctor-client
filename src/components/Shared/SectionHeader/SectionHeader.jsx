import React from 'react';

const SectionHeader = ({subTitle, title , description}) => {
    return (
        <div className='w-1/2 mx-auto space-y-2 my-8 text-center'>
            <h3 className='text-[#FF3811] text-xl font-bold'>{subTitle}</h3>
            <h2 className='text-5xl font-bold '>{title}</h2>
            <p className='text-base font-normal text-[#737373]'>{description}</p>
        </div>
    );
};

export default SectionHeader;