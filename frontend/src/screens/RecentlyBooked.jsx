import React, { Component } from "react";
import "react-dates/initialize";
import "../styles/Hotel.css";
import Semantic_textarea from "../components/Semantic_textarea"
import StarIcon from '@material-ui/icons/Star';
import "react-dates/lib/css/_datepicker.css";

class RecentlyBooked extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
      };
    }

render() {
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
            </div>
            </div>
            </div>
           
            <div className="hotel-reviews">
                
                <div className="write_review">
                    <Semantic_textarea/>
                </div>
                <div className="review">
                    <div className="reviewer_info">
                        <div className="reviewer_photo">
                            <img src="https://a0.muscache.com/im/pictures/user/a13f4039-6f7d-414a-8e11-7778f733fdd7.jpg?im_w=240"/>
                            </div>
                        <div className="reviewer_name">Andrew</div>
                    </div>
                    <div className="review_writeup">
                    <p>Location is perfect for a beach get away with amazing, friendly staff to make you feel right at home! Always had things to do everyday and made it natural in making new friends! Definitely another stay for me in the future!</p>
                    </div>
                </div>
            </div>
            </div>
            
           
           
        </div>
    )
}
}
export default RecentlyBooked;
