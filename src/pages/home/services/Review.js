import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/provider/AuthProvider';
import Reviews from './reviews/Reviews';

const Review = () => {
    const { _id, img, description, rating, price, title } = useLoaderData();
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'notRegisterd'
        const message = form.message.value;
        const photo = user.photoURL
        const review = {
            service: _id,
            serviceName: title,
            email,
            photo,
            name,
            message
        }
        fetch('https://assignment-11-server-red.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('data placed successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        fetch('https://assignment-11-server-red.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>price: ${price}</p>
                <p>rating: {rating}</p>
                <p>{description}</p>
            </div>
            <div className="form-control w-full max-w-xs">
                {
                    user?.email ?
                        <>
                            {
                                review.map(result => <Reviews key={result._id} result={result}></Reviews>)
                            }
                        </>
                        :
                        <Link to={'/login'}>Login</Link>
                }
                <form onSubmit={handleSubmit} className="form-control gap-2">
                    <label className="label">
                        <span className="label-text">Enter Your Review</span>
                    </label>
                    <input type="text" name='name' placeholder="your name" className="input w-full max-w-xs" required/>
                    <textarea name='message' className="textarea textarea-bordered h-24" placeholder="Review" required></textarea>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;