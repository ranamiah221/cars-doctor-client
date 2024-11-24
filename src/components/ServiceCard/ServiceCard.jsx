import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {price, img, title}=service;
  return (
    <div className="card bg-base-100 w-full shadow-xl p-5 border">
      
      <img className="h-52 rounded-lg"
          src={img}
          alt="Shoes"
       
      />
        
      <div>
        <h2 className="text-xl font-bold mt-3">
         {title}
        </h2>
        <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-red-500">Price: ${price}</p>
            <FaArrowRight></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
