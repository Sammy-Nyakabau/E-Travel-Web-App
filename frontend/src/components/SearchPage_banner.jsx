import React, { Component } from "react";
import "../styles/SearchPage_banner.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";


class SearchPage_banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }
  render() {
    return (
      <div className="banner1">
        <h1 className="banner1_caption">Discover the world and plan the perfect trip</h1>
      </div>
    );
  }
}

export default SearchPage_banner;
