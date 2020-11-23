import React, { useState } from "react";
import "react-dates/initialize";
import {
  DateRangePicker,
  // SingleDatePicker,
  // DayPickerRangeController,
} from "react-dates";
import "../styles/Hotel.css";
import { useStateValue } from "../reducer/StateProvider";
import StarIcon from "@material-ui/icons/Star";
import "react-dates/lib/css/_datepicker.css";

const Hotel = () => {
  const [{ item }] = useStateValue();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="hotel">
      <div className="hotel_left">
        <div className="hotel_card">
          <div className="hotel_name">{item.name}</div>
          <div className="hotel_details">
            <div className="hotel_rating">
              <StarIcon style={{ fill: "FF9529" }} />
              <p className="rating_number">
                {item.start_rating}({item.reviews_count})
              </p>
            </div>
            <div className="hotel_location">{item.address}</div>
          </div>
          <div className="hotel_stuff">
            <div className="hotel_image">
              <img alt="" className="hotel_pic" src={item.image} />
            </div>
            <div className="hotel_description">
              <h2 className="hosting_name">{item.property_type}</h2>
              <p className="hotel_features">
                {item.capacity_of_people} guest(s) · {item.num_of_rooms}{" "}
                room(s) · {item.num_of_beds} bed(s) · 
                {item.num_of_baths} bathroom(s)
              </p>
              <div className="price_options">
                <p className="price">$50/night</p>
                <p className="price">$250/week</p>
                <p className="price">$800/month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel_location_google">
          <p>Location</p>
          <div className="hotel_location_image">
            <img alt="" src="https://developers.google.com/location-context/images/geofencing_landing.png" />
          </div>
        </div>
        <div className="hotel-reviews">
          <div className="review_rating">
            <StarIcon style={{ fontSize: 30, fill: "FF9529" }} />
            <p className="rating_number">4.5 (10 reviews)</p>
          </div>
          <div className="review">
            <div className="reviewer_info">
              <div className="reviewer_photo">
                <img alt="" src="https://a0.muscache.com/im/pictures/user/a13f4039-6f7d-414a-8e11-7778f733fdd7.jpg?im_w=240" />
              </div>
              <div className="reviewer_name">Andrew</div>
            </div>
            <div className="review_writeup">
              <p>
                Location is perfect for a beach get away with amazing, friendly
                staff to make you feel right at home! Always had things to do
                everyday and made it natural in making new friends! Definitely
                another stay for me in the future!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel_right">
        <div className="hotel_card_float">
          <div className="selector_hotel">
            <div className="hotel_rating_outer"></div>
            <div className="check_tab">
              <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => {
                  setEndDate(endDate);
                  setStartDate(startDate);
                }} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
              />
            </div>

            <div className="people_hotel">
              <div>
                <p>People</p>
              </div>
              <div className="people_hotel_input">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  min="1"
                  max="3"
                />
              </div>
            </div>
            <div className="book_price">
              <p>Price: $180</p>
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
  );
};

export default Hotel;
