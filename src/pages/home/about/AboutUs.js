import React from 'react';
import img1 from '../../../images/computer-repair-engineer-pc-electronic-hardware-shop-performing-laptop-maintenance-developer-fixing-components-technology-145668303.jpg'

const AboutUs = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <p className='my-5 font-bold text-2xl text-sky-600'>About us</p>
                    <h1 className="text-5xl font-bold">We are qualified<br />
                    & of 10 Years experience<br />
                    in this field</h1>
                    <p className="py-6">Mechanical Services means all services in a building <br /> or facility that involve motors, machines, or the flow of fluids usually in conjunction with electrical or<br />
                    electromechanical controls. Mechanical Services means employees engaged in the installation <br /> of control equipment for airconditioning.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected<br />
                    humour, or randomised words which don't look even slightly<br />
                    believable. </p>
                </div>
                <div className='relative w-1/2'>
                <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;