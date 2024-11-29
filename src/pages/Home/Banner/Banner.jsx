import React from "react";
import slide1 from '../../../assets/images/banner/1.jpg'
import slide2 from '../../../assets/images/banner/2.jpg'
import slide3 from '../../../assets/images/banner/3.jpg'
import slide4 from '../../../assets/images/banner/4.jpg'
import slide5 from '../../../assets/images/banner/5.jpg'
import slide6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={slide1}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slide2}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slide3}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={slide4}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={slide5}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src={slide6}
          className="w-full lg:h-[500px]"
        />
         <div className="absolute h-full w-1/2 p-24 transform space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          
           <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
           <p className="text-base font-normal text-[#FFF]">There are many variations of passages of  available, 
            but the majority have suffered alteration in some form</p>
          
            <button className="btn bg-[#FF3811] text-white border-none mr-3">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Projects</button>
        
           </div>
       
        <div className="absolute right-5 bottom-5 flex gap-2 transform justify-between">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-500 hover:bg-red-400 border-none text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
