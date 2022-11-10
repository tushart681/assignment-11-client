import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({result}) => {
    const {_id, name, rating, price, description, img} = result;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} !</h2>
                <p>price: $ {price}</p>
                <p>Ratings: $ {rating}</p>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                <Link to={`/review/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;