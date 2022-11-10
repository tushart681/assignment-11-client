import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/provider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
        const {user} = useContext(AuthContext)
        console.log(user)
        const [review, setReview] = useState([])
        const [service, setService] = useState([])
        useEffect(()=>{
            fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(err => console.error(err))
        },[user?.email])
        const handleDelete = _id => {
            const deleted = window.confirm('are you sure?')
            if (deleted) {
                fetch(`http://localhost:5000/review?email=${_id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('genius-token')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            alert('deleted successfully')
                            const remenning = service.filter(srv => srv._id !== _id)
                            setService(remenning)
                        }
                    })
            }
        }
        const handleUpdate = _id => {
            fetch(`http://localhost:5000/review?email=${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        const remening = service.filter(odr => odr._id !== _id)
                        const approving = service.find(odr => odr === _id)
                        approving.status = 'Approved'
                        const newOrder = [approving, ...remening]
                        setService(newOrder)
                    }
                })
        }
    return (
        <div>
            {
                review.map(result => <ReviewCard key={result._id} handleDelete={handleDelete} result={result} handleUpdate={handleUpdate}></ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;