import React from 'react'
import "../styles/Hotel.css";
import StarIcon from '@material-ui/icons/Star';

function Hotel() {
    return (
        <div className="hotel">
            <div className="hotel_left">
                <div className="hotel_card">
            <div className="hotel_name">
            Ocean Front Surf Hostel - Bed in 12 Bed Mixed Room
            </div>
            <div className="hotel_details">
                <div className="hotel_rating">
                <StarIcon style={{fill: "FF9529"}}/><p className="rating_number">4.5(19)</p>
                
                </div>
                <div className="hotel_location">
                San Diego, California, United States
                </div>
            </div>
            <div className="hotel_stuff">
            <div className="hotel_image">
                <img className="hotel_pic" src="https://a0.muscache.com/im/pictures/793eeffc-2349-452c-b725-0b5312f0812f.jpg?im_w=720"/>
            </div>
            <div className="hotel_description">
            <h2 className="hosting_name">
            Shared room in bed and breakfast hosted by Beach Bungalow
            </h2>
            <p className="hotel_features">1 guest · 1 bedroom · 1 bed · 2 shared bathrooms</p>
            <p className="price">₹1,970/ night</p>
            </div>
            </div>
            </div>
            </div>
            <div className="hotel_right">
            <p>we will have the hovering card here</p>
            </div>
        </div>
    )
}

export default Hotel
