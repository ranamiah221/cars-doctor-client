import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Teams from '../Teams/Teams';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Products from '../Products/Products';
import Contract from '../Contract/Contract';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contract></Contract>
            <Products></Products>
            <Teams></Teams>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;