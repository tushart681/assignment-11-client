import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllServiceCard = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-red.vercel.app/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='grid grid-cols-3'>
            {
                service.map(result => <Card key={result} result={result}></Card>)
            }
        </div>
    );
};

export default AllServiceCard;