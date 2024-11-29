import { useLoaderData } from "react-router-dom";
import DefaultBanner from "../../components/Shared/DefaultBanner/DefaultBanner";
import ServiceCard from './../../components/ServiceCard/ServiceCard';
import { useState } from "react";
import Service from './../Home/Service/Service';


const Services = () => {
    const loadedServices = useLoaderData()
    const [services, setServices]= useState(loadedServices)
    
    return (
        <div>
             <DefaultBanner title={'Services'}></DefaultBanner>
             <h1 className="text-5xl font-bold text-center my-5 underline">Our Services</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                
              {
                services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
              }
              </div>
        </div>
    );
};

export default Services;