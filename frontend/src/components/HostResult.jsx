import React from 'react';
import '../styles/HostResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import ClearIcon from '@material-ui/icons/Clear';

function HostResult({
    img,
    location,
    title,
    description,
    star,
    price,
    bookedNights,
    numReviews,
    total,
}) {
    return (
        <div className='HostResult'>
            
            <img src={img} alt="" />
            
            <div className='HostResult__info'>
                <div className="HostResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    
                </div>
                <div className="HostResult_info_Bottom">
                        <p>{description}</p>
                        <p>Number of nights booked:{bookedNights}</p>
                        <p>Number of Reviews: {numReviews}</p>
                    </div>

                <div className="HostResult__infoBottom">
                    <div className="HostResult__stars">
                        <StarIcon className="HostResult__star" style={{ fill: "D90964" }} />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                   
                    <div className='HostResults__price'>
                        <h2>{price}</h2>
                        <p>Total Earnings: {total}</p>
                    </div>
                    <div className="FirstColumn">
                        <p className="EditListing">Edit Listing</p>
                        <ClearIcon/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default HostResult