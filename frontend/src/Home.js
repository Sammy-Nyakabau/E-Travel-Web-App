import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="section1">
        <p className="section1_caption">
          Atlantis – gives you life changing experiences in dreamy and
          fantastical locations – offering the world's most extraordinary homes
          with the highest standard of service.
        </p>
      </div>
      <div className="section2">
        <div className="section2_left">
          <p>The world's most extraordinary locations</p>
        </div>
        <div className="section2_right">
          <p>
            A selection of pristine, expertly designed homes with high-end
            amenities, services, and dedicated trip designers.
          </p>
        </div>
      </div>
      <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/a17609e2-d762-4365-a313-62e619e59872.jpg?im_w=720"
                title="Homes"
                description="Comfortable places with all the essentials"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/f20dbdb1-05b5-4f01-97ba-b113edc20795.jpg?im_w=720"
                title="Hotels"
                description="Stylish accomadations amenities"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg?im_w=720"
                title="Unique Stays"
                description="Spaces that are more than just a place to sleep"
            />
            </div>
            
    </div>
  );
}

export default Home;
