import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServiceCard from './AllServiceCard';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-red.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <p className=" text-2xl font-bold text-sky-400">Our Services</p>
            <p className='text-sm font-semibold'>Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. Owing to our outstanding customer service we have maintained the 85 % customer retention rate. </p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    service.slice(0, 3).map((result, id) => <ServiceCard key={id} result={result}></ServiceCard>)
                }
            </div>
            <Link to={'/allservice'}><button className="btn btn-primary mt-3">See All
            </button></Link>
        </div>
    );
};

export default Service;