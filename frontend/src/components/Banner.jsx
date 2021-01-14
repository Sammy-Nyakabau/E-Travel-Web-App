/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import "react-dates/initialize";
import { Dropdown } from "semantic-ui-react";
import { DateRangePicker } from "react-dates";
import { useStateValue } from "../reducer/StateProvider";
import { useHistory } from "react-router-dom";

import "../styles/Banner.css";
import "react-dates/lib/css/_datepicker.css";

const Banner = () => {
  const locationOptions = [
    {
      key: "GA",
      text: "Atlanta",
      value: "Atlanta",
    },
    {
      key: "CA",
      text: "San Diego",
      value: "San Diego",
    },
    {
      key: "NY",
      text: "Buffalo",
      value: "Buffalo",
    },
    {
      key: "CA",
      text: "San Francisco",
      value: "San Francisco",
    },
    {
      key: "IL",
      text: "Chicago",
      value: "Chicago",
    },
  ];
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [guests, setGuests] = useState();
  const [location, setLocation] = useState();
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const handleSearch = () => {
    dispatch({
      type: "SET_SEARCH",
      search: {
        startDate,
        endDate,
        location,
        guests,
      },
    });

    dispatch({
      type: "SET_PROPERTY_TYPE",
      propertyType: null,
    });

    history.push("/ListingsPage");
  };

  return (
    <div className="banner">
      <div className="selector_outer">
        <div className="selector">
          <div className="location">
            <Dropdown
              style={{ width: "150px", border: "none" }}
              placeholder="Location"
              fluid
              selection
              clearable
              value={location}
              options={locationOptions}
              onChange={(e, { value }) => setLocation({ value }.value)}
            />
          </div>
          <div className="check_tab">
            <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ start, end }) => {
                setEndDate(end);
                setStartDate(start);
              }} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(input) => setFocusedInput(input)} // PropTypes.func.isRequired,,
            />
          </div>

          <div className="people">
            {/* <p>People</p> */}
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="People"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="Search_button">
            <button className="Search" onClick={handleSearch}>
              <p>Search</p>
            </button>
          </div>
        </div>
      </div>
      <h1 className="caption">What's your next destination</h1>
    </div>
  );
};

export default Banner;
