import React from 'react';
import '../styles/RecentlyBooked_card.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

import '../styles/SearchResult.css';

function RecentlyBooked_card({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    property_type
}) {
    return (
        <div className='searchResult1'>
            <img src={img} alt="" />

            <div className='searchResult__info1'>
                <div className="searchResult__infoTop1">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>{property_type}</p>
                    <p>{description}</p>
                </div>

                
            </div>
        </div>
    )
}

export default RecentlyBooked_card