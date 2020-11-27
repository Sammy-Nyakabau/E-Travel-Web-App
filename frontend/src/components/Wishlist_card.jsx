import React from 'react';
import '../styles/RecentlyBooked_card.css';
import StarIcon from "@material-ui/icons/Star";
import '../styles/SearchResult.css';

function Wishlist_card({
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
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wishlist_card