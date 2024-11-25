import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
// import errorImg from '../../assets/images/'
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center h-screen'>
                 <h1 className='text-7xl text-center font-extrabold text-[#FF3811]'>
                    {error.status}
                </h1>
                
            </div>
        </div>
    );
};

export default ErrorPage;