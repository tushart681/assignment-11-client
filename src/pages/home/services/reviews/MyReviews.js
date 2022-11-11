import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/provider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])
    const [service, setService] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>{
                
                return  res.json()
            })
            .then(data => setReview(data))
            .catch(err => console.error(err))
    }, [user?.email])
    const handleDelete = _id => {
        const deleted = window.confirm('are you sure?')
        if (deleted) {
            fetch(`http://localhost:5000/review/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type':'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remenning = review.filter(srv => srv._id != _id)
                        console.log(remenning)
                        setReview(remenning)
                    }
                })
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const _id = service;
        const field = e.target.update.value
        console.log(field, _id)
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ message: field })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    const oldMsg = review.filter(en => en._id !== _id)
                    const changed = review.find(en => en._id === _id)
                    changed.message = field
                    const newChanged = [changed, ...oldMsg]
                    setReview(newChanged)
                }
            })
    }
    console.log(review)
    return (
        <div>
            {
                review.map((result, id) => <ReviewCard key={id} handleDelete={handleDelete} result={result} handleUpdate={handleUpdate} setService={setService}></ReviewCard>)
            }
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <form onSubmit={handleUpdate}><textarea name='update' className="textarea" placeholder="Bio"></textarea>
                <button>Ok</button>
                </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;