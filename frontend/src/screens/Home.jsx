import React from "react";
import Filter1 from "../components/Filter1";
import Footer from "../components/Footer"
import "../styles/Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/React_dates_overrides.css";


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
      {/* <div className="filter_section">
        <h1>Travel Inspiration</h1>
        <Filter1 />
      </div> */}
      <div className="home__section">
        <Card
          src="https://diy.sndimg.com/content/dam/images/diy/fullset/2014/3/5/0/RX-Oak-Alley-Plantation-Vacherie-Louisiana_h.jpg.rend.hgtvcom.406.305.suffix/1420866006581.jpeg"
          title="Vacation Home"
        />
        <Card
          src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
          title="Apartments"
        />
        <Card
          src="https://media.cntraveler.com/photos/5e2a1c6d6deb4b0008bea280/5:4/w_1200,h_960,c_limit/cabin-airbnb-canada-702956.jpg"
          title="Cabin"
        />
        <Card
          src="https://i.insider.com/5814573fdd089553578b470d?width=1100&format=jpeg&auto=webp"
          title="Chalet"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.pinimg.com/originals/c6/16/8b/c6168b1e9ddbcdbf50eade9ae351bb02.jpg"
          title="Condominium"
        />
        <Card
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Church_Cottage%2C_Stretton_Grandison_-_geograph.org.uk_-_459243.jpg"
          title="Cottage"
        />
        <Card
          src="https://imgs.6sqft.com/wp-content/uploads/2015/10/20051243/Charlotte-Valley-Farx-ext3.jpg"
          title="Farm Stay"
        />
        <Card
          src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/19080221/NovaScotia.jpg"
          title="Bungalow"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title="House"
        />
        <Card
          src="https://media.timeout.com/images/105106307/630/472/image.jpg"
          title="Loft"
        />
        <Card
          src="https://cdn.thespaces.com/wp-content/uploads/2019/01/Squamish-tiny-home-for-rent-airbnb.jpg"
          title="Tiny house"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/393a0a05-1b90-4e01-980e-30b7499e85d7.jpg?im_w=720"
          title="Villa"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://www.central-london-apartments.com/images/index/slide01.jpg"
          title="Serviced Apartment"
        />
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/215/215959273.jpg"
          title="Guest Suite"
        />
        <Card
          src="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/20218495630_eb35185c83_k.jpg"
          title="Townhouse"
        />
        <Card
          src="https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
          title="Guesthouse"
        />
      </div>
      
      <Footer/>
    </div>
  );
}

export default Home;
