import React, { Component } from "react";
import "react-dates/initialize";
import {
  DateRangePicker,
  // SingleDatePicker,
  // DayPickerRangeController,
} from "react-dates";
import "../styles/Hotel.css";
import StarIcon from '@material-ui/icons/Star';
import "react-dates/lib/css/_datepicker.css";

class Hotel extends Component {
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
            <p className="price">₹1,970/ night</p>
            </div>
            </div>
            </div>
            <div className="hotel_writeup">
            Perfect for groups looking to explore the San Diego beach area!<br/>

            Come and enjoy a Bed in a Mixed Dorm Room at the Beach Bungalow Surf Hostel in Pacific Beach, in San Diego.<br/>

            We are located ocean front and offer daily free activities , free breakfast, light dinner, towels, communal kitchen, laundry, paid raking and free usage of beach items & WiFi.

            Rental for surf boards, wet suit, snorkels and bicycles at our reception.<br/>

            This listing is for 1 guest in our 12 bed mixed dorm.<br/>

            The space:<br/>
            We are a 80 bed hostel located beach front.<br/>
            It is not possible to rent the whole house, only a whole room. The common areas are shared with everyone in the house.
            </div>
            <div className="hotel_location_google">
                <p>Location</p>
                <div className="hotel_location_image">
                    <img src="https://developers.google.com/location-context/images/geofencing_landing.png"/>
                </div>
            </div>
            <div className="hotel-reviews">
                <div className="review_rating">
                <StarIcon style={{fontSize:30, fill: "FF9529"}}/>
                <p className="rating_number">4.5 (10 reviews)</p>
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
            <div className="hotel_right">
            <div className="hotel_card_float">
                
                    <div className="selector_hotel">
                    <div className="hotel_rating_outer">
                    <div className="hotel_price_float">
                        $50/night
                    </div>
                    <div className="hotel_rating_float">
                        <StarIcon style={{fill: "FF9529"}}/><p className="rating_number_float">4.5(19)</p>
                    </div>
                
                </div>
                    <div className="check_tab">
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) =>
                            this.setState({ startDate, endDate })
                        } // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </div>

                    <div className="people_hotel">
                        <div><p>People</p></div>
                        <div className="people_hotel_input">
                        <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="0"
                        min="1" max="3"
                        />
                        </div>
                    </div>
                    <div className="book_button">
                        <button className="book">
                        <p>Book</p>
                        </button>
                    </div>
                    </div>
                </div>
              </div>
           
        </div>
    )
}
}
export default Hotel;
