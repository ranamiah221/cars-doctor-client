import React from 'react';
import DefaultBanner from '../Shared/DefaultBanner/DefaultBanner';
import { Link, useLoaderData } from 'react-router-dom';
import Facility from '../Facility/Facility';
import frame from '../../assets/images/Frame.svg'
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/logo.svg'
const ServiceDetails = () => {
    const service = useLoaderData();
    const {_id, img, title, description, facility, price}=service;
    return (
        <div className='mb-10'>
            <DefaultBanner title='Service Details'></DefaultBanner>
            <div className='grid grid-cols-3 gap-5 space-y-3 mt-10'>
                 <div className='col-span-2 rounded-lg space-y-4'>
                    <img className='w-full  rounded-lg' src={img} alt="" />
                     <h1 className='text-4xl font-bold'>{title}</h1>
                     <p className='text-base font-normal text-[#737373] text-justify'>{description}</p>
                     <div className='grid grid-cols-2 gap-5'>
                        {
                         facility.map((fac,idx)=> <Facility key={idx} fac={fac}></Facility>)
                        }
                     </div>
                     <p className='text-base font-normal text-[#737373] text-justify'>{description}</p>
                     <h1 className='text-4xl font-bold'>3 Simple Steps to Process</h1>
                     <p className='text-base font-normal text-[#737373] text-justify'>{description}</p>
                     {/* steps  */}
                     <div className='grid grid-cols-3 gap-3'>
                             <div className='border rounded-lg text-center px-4 py-8'>
                                  <h2 className='text-xl font-bold w-10 h-10 rounded-full mx-auto bg-[#FF3811] px-2 py-1 text-white '>01</h2>
                                  <h3 className='text-xl font-bold'>Step One</h3>
                                  <p className='text-[#737373]'>It uses a dictionary of over 200 .</p>
                             </div>
                             <div className='border rounded-lg text-center px-4 py-8'>
                                  <h2 className='text-xl font-bold w-10 h-10 rounded-full mx-auto bg-[#FF3811] px-2 py-1 text-white '>02</h2>
                                  <h3 className='text-xl font-bold'>Step Two</h3>
                                  <p className='text-[#737373]'>It uses a dictionary of over 200 .</p>
                             </div>
                             <div className='border rounded-lg text-center px-4 py-8'>
                                  <h2 className='text-xl font-bold w-10 h-10 rounded-full mx-auto bg-[#FF3811] px-2 py-1 text-white '>03</h2>
                                  <h3 className='text-xl font-bold'>Step Two</h3>
                                  <p className='text-[#737373]'>It uses a dictionary of over 200 .</p>
                             </div>
                     </div>
                     {/* video */}
                     <iframe className='w-full rounded-lg'  height="315" src="https://www.youtube.com/embed/9KKfIYch1FE?si=mqkoUVIFd7UPOOut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                 </div>
                 
                <div className='col-span-1 space-y-5'>
                   <div className='bg-[#F3F3F3] p-10 rounded-lg '>
                      <h1 className='text-2xl font-bold'>Services</h1>
                      {/* futured work */}
                   </div>
                   {/* download section */}
                   <div className='bg-black text-white p-10 rounded-lg space-y-3'>
                   <h1 className='text-2xl font-bold'>Download</h1>
                   <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                        <img src={frame} alt="" />
                        <div>
                            <h3 className='text-base font-semibold'>Our Brochure</h3>
                            <p className='text-[#A2A2A2]'>Download</p>
                        </div>
                        </div>
                        <FaArrowRight className=' bg-red-600 p-3 w-10 h-10'></FaArrowRight>
                   </div>
                   <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                        <img src={frame} alt="" />
                        <div>
                            <h3 className='text-base font-semibold'>Company Details</h3>
                            <p className='text-[#A2A2A2]'>Download</p>
                        </div>
                        </div>
                        <FaArrowRight className=' bg-red-600 p-3 w-10 h-10'></FaArrowRight>
                   </div>
                   </div>

                   {/* offer section */}
                   <div className='bg-black text-white p-10 rounded-lg space-y-3'>
                       <div className='w-4/5 mx-auto '>
                           <div className='flex justify-center'>
                           <img src={logo} alt="" />
                           </div>
                           <h1 className='text-xl font-medium text-center mt-4'>Need Help? We Are Here
                           To Help You</h1>
                        
                        </div>
                        <div className='w-4/5 mx-auto bg-[#FFF] py-10 px-5 rounded-lg relative'>
                            <h2 className='text-xl font-bold text-[#FF3811] text-center'>Car Doctor <span className='text-black'>Special</span></h2>
                            <h3 className='text-base font-bold text-[#FF3811] text-center'>Save up to 60% off</h3>
                            <div className='absolute bg-[#FF3811] p-2 rounded-lg -bottom-4 left-14'>
                                 <h3>Get A Quote</h3>
                            </div>
                        </div>
                        
                   </div>

                   <h1 className='text-4xl font-bold '>Price $ {price}</h1>
                   <Link to={`/checkout/${_id}`}> <button className='btn mt-5 btn-block bg-[#FF3811] hover:bg-[#FF3677] text-white'>Proceed Checkout</button></Link>
                   
                 </div>


             </div>

         </div>
      
    );
};

export default ServiceDetails;