import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/provider/AuthProvider/AuthProvider';
import { useNavigation } from 'react-router-dom';
import DefaultBanner from '../../components/Shared/DefaultBanner/DefaultBanner';
import BookingTable from './BookingTable';
import Swal from 'sweetalert2';

const Booking = () => {
    const {user}=useContext(AuthContext);
    const [bookings, setBookings]=useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[user])

 const handleBookingDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //  delete functionality....
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your booking has been deleted.",
                        icon: "success"
                      });
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining);
            }
        })

        }
      });
 }

 

    return (
        <div>
             <DefaultBanner title={'My Booking'}></DefaultBanner>
              <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>
                           Delete
                          </th>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                       {
                        bookings.map(booking=> <BookingTable key={booking._id}
                            handleBookingDelete={handleBookingDelete}
                            booking={booking}></BookingTable>)
                       }
                      </tbody>
                     
                      
                    </table>
                  </div>
             
            
           
        </div>
    );
};

export default Booking;
