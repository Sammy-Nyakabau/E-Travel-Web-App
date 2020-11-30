import React, { Component } from "react";
import "react-dates/initialize";
import "../styles/RecentlyBooked.css";
import "react-dates/lib/css/_datepicker.css";
import RecentlyBooked_card from "../components/RecentlyBooked_card";



const RecentlyBooked = () => {

    return (
      <div className="recentlybooked">
        <h1 className="recentlybookedlocations">Recently Booked locations:</h1>
        <div className="booked_card">
          <RecentlyBooked_card
            style={{ borderbottom: "none" }}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
            star={4.73}
            price="£30 / night"
            total="£117 total"
          />
          
          <div className="booked_hotel-reviews">
          
          </div>
        </div>
      </div>
    );
  }
export default RecentlyBooked;
