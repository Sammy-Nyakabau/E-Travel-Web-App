/* eslint-disable */
import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { DateRangePicker } from "react-dates";
import Moment from "moment";
import { extendMoment } from "moment-range";
import StarIcon from "@material-ui/icons/Star";

import { useStateValue } from "../reducer/StateProvider";
import { createBooking, getBookings } from "../services/bookingService";
import { getReviews } from "../services/reviewsService";
import { getRecommendedListings } from "../services/listingsService";
import RecommendationOptions from "../components/RecommendationOptions";
import Map from "../components/Map";
import Review from "../components/Review";

import "react-dates/lib/css/_datepicker.css";
import "../styles/Hotel.css";

const Hotel = () => {
  const moment = extendMoment(Moment);
  const history = useHistory();
  const [{ item, user }] = useStateValue();
  const [price, setPrice] = useState(item.night_price);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const start = !startDate ? moment() : moment(startDate._d);
    const end = !endDate ? moment().add(1, "days") : moment(endDate._d);
    const duration = end.diff(start, "days");
    const cost = item.night_price * duration;

    setPrice(cost);

    const fetchBookings = async () => {
      const { data: res } = await getBookings(item._id);
      let fetchedBookings = [];

      res.forEach((element) => {
        fetchedBookings = [...fetchedBookings, element.booking];
      });
      setBookings(fetchedBookings);
    };

    const fetchRecommendedListings = async () => {
      const { data: rec } = await getRecommendedListings(
        item.airbnb_city,
        item.property_type,
        item.capacity_of_people,
        item.night_price
      );

      setRecommendations(rec);
    };

    const fetchReviews = async () => {
      const { data: res } = await getReviews(item._id);
      setReviews(res);
    };

    fetchBookings();
    fetchRecommendedListings();
    fetchReviews();
  }, [
    startDate,
    endDate,
    item.night_price,
    moment,
    item._id,
    item.airbnb_city,
    item.capacity_of_people,
    item.property_type,
  ]);

  const handleBooking = async () => {
    const booking = {
      startDate: startDate._d,
      endDate: endDate._d,
    };
    await createBooking(user._id, item._id, booking);

    history.push("/");
  };

  const handleBookedDates = (date) => {
    let bookedRanges = [];
    let blocked;

    bookings.forEach((booking) => {
      bookedRanges = [
        ...bookedRanges,
        moment.range(booking.startDate, booking.endDate),
      ];
    });
    blocked = bookedRanges.find((range) => range.contains(date));

    return blocked;
  };

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
                {item.capacity_of_people} guest(s) · {item.num_of_rooms} room(s)
                · {item.num_of_beds} bed(s) ·{item.num_of_baths} bathroom(s)
              </p>
              <div className="price_options">
                <p className="price">${item.night_price}/night</p>
                <p className="price">
                  {item.weekly_price === 0 ? "-" : "$" + item.weekly_price}/week
                </p>
                <p className="price">
                  {item.monthly_price === 0 ? "-" : "$" + item.monthly_price}
                  /month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel_location_google">
          <p>Location</p>
          <div className="hotel_location_image">
            <Map center={{ lat: item.lat, lng: item.lon }} />
          </div>
        </div>

        <div className="hotel-reviews">
          {/* <div className="review_rating">
            <StarIcon style={{ fontSize: 30, fill: "FF9529" }} />
            <p className="rating_number">
              {item.start_rating}({item.reviews_count})
            </p>
          </div> */}
          <h1>Reviews</h1>
          {reviews && reviews.map((review) => <Review review={review} />)}
        </div>
        <p className="Recc_section">More like this:</p>
        {recommendations.length > 0 && (
          <RecommendationOptions
            one={recommendations[0]}
            two={recommendations[1]}
            three={recommendations[2]}
          />
        )}
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
                onFocusChange={(input) => setFocusedInput(input)} // PropTypes.func.isRequired,
                isDayBlocked={handleBookedDates}
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
                  placeholder="1"
                  min="1"
                  max={item.capacity_of_people}
                />
              </div>
            </div>
            <div className="book_price">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Price: <span style={{ color: "black" }}>{value}</span>
                    </p>
                  </>
                )}
                decimalscale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <div className="book_button">
              {
                <button
                  className="book"
                  onClick={handleBooking }
                  disabled={!user}
                >
                  <p>Book</p>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
