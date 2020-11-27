import React, { Component } from "react";
import "react-dates/initialize";
import "../styles/RecentlyBooked.css";
import StarIcon from "@material-ui/icons/Star";
import "react-dates/lib/css/_datepicker.css";
import Wishlist_card from "../components/Wishlist_card";

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <div className="recentlybooked">
        <h1 className="recentlybookedlocations">Wishlist:</h1>
        <div className="booked_card">
          <Wishlist_card
            style={{ borderbottom: "none" }}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
            star={4.73}
            price="£30 / night"
            total="£117 total"
          />
          
         
        </div>
      </div>
    );
  }
}
export default Wishlist;
