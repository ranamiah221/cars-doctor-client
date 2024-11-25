import { useEffect, useState } from "react";
import SectionHeader from "../../../components/Shared/SectionHeader/SectionHeader";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";


const Service = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <SectionHeader subTitle='Team' title='Meet Our Team' description="the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. "></SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                {/* button */}
            </div>
        </div>
    );
};

export default Service;