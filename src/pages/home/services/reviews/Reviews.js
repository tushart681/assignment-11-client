import React from 'react';

const Reviews = ({result}) => {
    const {name, photo, message} = result;
    return (
        <div>
        <>
        <div className="w-10 rounded-full">
        <img src={photo} alt="" />
        </div>
        <p>{name}</p>
        <p>comments: {message}</p>
        </>
        </div>
    );
};

export default Reviews;