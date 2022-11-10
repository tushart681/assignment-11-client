import React from 'react';

const AddService = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photo = form.photoURL.value;
        const description = form.description.value;
        const review = {
            name,
            rating,
            price,
            photo,
            description
        }
        fetch('http:/services:5000', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Add Service successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='gap-4 grid grid-cols-1'>
            <input type="text" name='name' placeholder="name" className="input w-full max-w-xs" />
            <input type="number" name='rating' placeholder="rating" className="input w-full max-w-xs" />
            <input type="number" name='price' placeholder="price" className="input w-full max-w-xs" />
            <input type="text" name='description' placeholder="description" className="input w-full max-w-xs" />
            <input type="photoURL" name='photoURL' placeholder="photoURL" className="input w-full max-w-xs" />
            <button className="btn btn-success">post</button>
            </div>
        </form>
    );
};

export default AddService;