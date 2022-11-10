import React from 'react';
import AboutService from './about/AboutService';
import AboutUs from './about/AboutUs';
import Banner from './banner/Banner';
import Service from './services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AboutService></AboutService>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;