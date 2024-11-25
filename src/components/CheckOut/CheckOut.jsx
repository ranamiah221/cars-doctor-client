import React, { useContext } from 'react';
import DefaultBanner from '../Shared/DefaultBanner/DefaultBanner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {user}= useContext(AuthContext)
    console.log(service, user);
    return (
        <div>
            <DefaultBanner title='Check Out'></DefaultBanner>
             <div>
                
             </div>
        </div>
    );
};

export default CheckOut;