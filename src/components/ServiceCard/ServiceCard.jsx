import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,price, img, title}=service;
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
            <Link to={`/service/${_id}`}><FaArrowRight></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
