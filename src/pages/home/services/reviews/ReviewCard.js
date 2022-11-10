import React from 'react';

const ReviewCard = ({result}) => {
    const {_id, name, photo, message , handleDelete, handleUpdate, status} = result

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>comments</th>
                        <th>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-xs">X</button>
                        <button onClick={()=> handleUpdate(_id)} className="btn btn-xs">{status ? status : 'pending'}</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                </div>
                            </div>
                        </td>
                        <div>
                            <p>{message}</p>
                        </div>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ReviewCard;