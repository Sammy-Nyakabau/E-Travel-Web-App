import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Filter1 from "./Filter1";
import Footer from "./Footer"

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

      <div className="home__section">
        <Card
          src="https://diy.sndimg.com/content/dam/images/diy/fullset/2014/3/5/0/RX-Oak-Alley-Plantation-Vacherie-Louisiana_h.jpg.rend.hgtvcom.406.305.suffix/1420866006581.jpeg"
          title="Historical locations"
          description="Experience the history by living in it"
        />
        <Card
          src="https://cf.bstatic.com/data/xphoto/1182x887/318/31829876.jpg?size=S"
          title="Breathtaking Experiences"
          description="Giving you the most fulfilling life experiences."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep"
        />
      </div>
      <div className="filter_section">
        <h1>Travel Inspiration</h1>
        <Filter1 />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
