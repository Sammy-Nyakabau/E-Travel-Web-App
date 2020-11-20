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
            <div className="hotel_writeup">
            Perfect for groups looking to explore the San Diego beach area!<br/><br/>

            Come and enjoy a Bed in a Mixed Dorm Room at the Beach Bungalow Surf Hostel in Pacific Beach, in San Diego.<br/><br/>

            We are located ocean front and offer daily free activities , free breakfast, light dinner, towels, communal kitchen, laundry, paid raking and free usage of beach items & WiFi.

            Rental for surf boards, wet suit, snorkels and bicycles at our reception.<br/><br/>

            This listing is for 1 guest in our 12 bed mixed dorm.<br/><br/>

            The space<br/>
            We are a 80 bed hostel located beach front.<br/><br/>
            It is not possible to rent the whole house, only a whole room. The common areas are shared with everyone in the house.
            </div>
            </div>
            <div className="hotel_right">
            <p>we will have the hovering card here</p>
            <div className="hotel-reviews">
                
            </div>
            </div>
        </div>
    )
}

export default Hotel
