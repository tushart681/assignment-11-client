import React from 'react';
import img1 from '../../../images/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg'

const AboutService = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='my-5 font-bold text-2xl text-purple-600'>About Service</p>
                    <h1 className="text-5xl font-bold">We are givving<br />
                    six type services<br />
                    in this field</h1>
                    <p className="py-6">Service experience is the end-to-end set of customer <br /> experiences that add value to a service.<br />
                    This is typically viewed from the customer perspective as a journey whereby <br /> a customer discovers, purchases, experiences and participates in a service.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected<br />
                    The following are the basic elements of service experience. </p>
                </div>
            </div>
        </div>
    );
};

export default AboutService;