import React, { Component } from "react";
import "react-dates/initialize";
import Dropdown_search from "./Dropdown_search";
import {
  DateRangePicker,
  // SingleDatePicker,
  // DayPickerRangeController,
} from "react-dates";

import "../styles/Banner.css";
import "react-dates/lib/css/_datepicker.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }
  
  render() {
    return (
      <div className="banner">
        <div className="selector_outer">
        <div className="selector">
          <div className="location">
            {/* <p>Location</p> */}
            <Dropdown_search/>
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

          <div className="people">
            {/* <p>People</p> */}
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="People"
              min="1" max="3"
            />
            
          </div>
          <div className="Search_button">
            <button className="Search">
              <p>Search</p>
            </button>
          </div>
        </div>
        </div>
        <h1 className="caption">What's your next destination</h1>
      </div>
    );
  }
}

export default Banner;
