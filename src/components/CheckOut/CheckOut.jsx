import React, { useContext } from "react";
import DefaultBanner from "../Shared/DefaultBanner/DefaultBanner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const {title, price, img, _id}=service;
  const { user } = useContext(AuthContext);
  console.log(service, user);
  const handleCheckOut=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name = form.name.value;
    const date = form.date.value;
    const booking={
        customerName:name,
        email: user?.email,
        date,
        title,
        img,
        service_id: _id,

    }
    fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
                title: "Thank you!",
                text: "Your Order Confirm.",
                icon: "success"
              });
        }
    })
   

  }
  return (
    <div className="mb-20 rounded-lg">
      <DefaultBanner title="Check Out"></DefaultBanner>
      <div className="bg-[#F3F3F3]">
        <form onSubmit={handleCheckOut} className="card-body">
            <h2 className="text-center text-2xl font-bold ">Service : {title}</h2>
            {/* name && date */}
          <div className="flex items-center justify-between px-5 w-full gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
           {/* email && price */}
           <div className="flex items-center justify-between px-5 w-full gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered"
                required
                readOnly
              />
            </div>
          </div>
          <div className="form-control mt-6 px-5">
            <button type="submit" className="btn bg-[#FF3811] hover:bg-[#FF3777] text-white">Order Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
