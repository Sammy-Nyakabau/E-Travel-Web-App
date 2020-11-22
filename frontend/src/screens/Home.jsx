/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Card from "../components/Card";
import { useStateValue } from "../reducer/StateProvider";

import "../styles/Home.css";
import "../styles/React_dates_overrides.css";

function Home() {
  const [{}, dispatch] = useStateValue();

  const filterListings = (propertyType) => {
    dispatch({
      type: "SET_PROPERTY_TYPE",
      propertyType,
    });
  };

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
        <Link to="/ListingsPage">
          <Card
            src="https://i.pinimg.com/originals/26/9a/1c/269a1c4a9afc4bcd6521cc5a66d96611.jpg"
            title="Apartments"
            onClick={() => filterListings("Apartment")}
          />
        </Link>
        <Link to="/ListingsPage">
          <Card
            src="https://cf.bstatic.com/images/hotel/max1024x768/215/215959273.jpg"
            title="Guest Suite"
            onClick={() => filterListings("Guest suite")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/20218495630_eb35185c83_k.jpg"
            title="Townhouse"
            onClick={() => filterListings("Townhouse")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
            title="Guesthouse"
            onClick={() => filterListings("Guesthouse")}
          />
        </Link>
      </div>
      <div className="home__section">
        <Link to="/ListingsPage">
          <Card
            src="https://i.pinimg.com/originals/c6/16/8b/c6168b1e9ddbcdbf50eade9ae351bb02.jpg"
            title="Condominium"
            onClick={() => filterListings("Condominium")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Church_Cottage%2C_Stretton_Grandison_-_geograph.org.uk_-_459243.jpg"
            title="Cottage"
            onClick={() => filterListings("Cottage")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://www.central-london-apartments.com/images/index/slide01.jpg"
            title="Serviced Apartment"
            onClick={() => filterListings("Serviced apartment")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/19080221/NovaScotia.jpg"
            title="Bungalow"
            onClick={() => filterListings("Bungalow")}
          />
        </Link>
      </div>
      <div className="home__section">
        <Link to="/ListingsPage">
          <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
            title="House"
            onClick={() => filterListings("House")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://media.timeout.com/images/105106307/630/472/image.jpg"
            title="Loft"
            onClick={() => filterListings("Loft")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://cdn.thespaces.com/wp-content/uploads/2019/01/Squamish-tiny-home-for-rent-airbnb.jpg"
            title="Tiny house"
            onClick={() => filterListings("Tiny house")}
          />
        </Link>

        <Link to="/ListingsPage">
          <Card
            src="https://a0.muscache.com/im/pictures/393a0a05-1b90-4e01-980e-30b7499e85d7.jpg?im_w=720"
            title="Villa"
            onClick={() => filterListings("Villa")}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
