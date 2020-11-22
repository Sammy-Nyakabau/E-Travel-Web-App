import React, { Component } from "react";
import "react-dates/initialize";
import "../styles/RecentlyBooked.css";
import Semantic_textarea from "../components/Semantic_textarea"
import StarIcon from '@material-ui/icons/Star';
import "react-dates/lib/css/_datepicker.css";
import RecentlyBooked_card from "../components/RecentlyBooked_card";


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
            
            <h1 className="recentlybookedlocations">Recently Booked locations:</h1>
           <RecentlyBooked_card style={{ borderbottom:"none"}}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
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
           
        
    )
}
}
export default RecentlyBooked;
