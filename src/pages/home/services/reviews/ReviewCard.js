import React from 'react';

const ReviewCard = ({result, handleDelete, setService}) => {
    const {_id, name, photo, message} = result

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>comments</th>
                        <th>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-xs">X</button>
                        <label onClick={()=>setService(_id)} className="btn btn-xs" htmlFor="my-modal">Update</label>
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