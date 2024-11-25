import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/provider/AuthProvider/AuthProvider';

const Booking = () => {
    const {user}=useContext(AuthContext);
    const [bookings, setBookings]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[])
    return (
        <div>
            <h1>My Booking : {bookings.length}</h1>
        </div>
    );
};

export default Booking;