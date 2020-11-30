/* eslint-disable */
import React from "react";
import "../styles/Header_solid.css";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Header_login from "./Header_login";
import Dropdown_options from "./Dropdown_options";

import { useStateValue } from "../reducer/StateProvider";

import "../styles/Header_solid.css";

function Header_solid() {
  const [{ user }, dispatch] = useStateValue();

  const resetListings = () => {
    dispatch({
      type: "SET_PROPERTY_TYPE",
      propertyType: null,
    });

    dispatch({
      type: "SET_SEARCH",
      search: false,
    });
  };

  const logOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
  };

  return (
    <div className="header_solid">
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <h1 className="header_icon">Atlantis</h1>
      </Link>

      <div className="header_right">
        <Link
          to="/ListingsPage"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <p onClick={() => resetListings()}>Our Listings</p>
        </Link>
        {user ? <Dropdown_options /> : <div></div>}

        {user ? (
          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <p onClick={() => logOut()}>Logout</p>
          </Link>
        ) : (
          <Header_login />
        )}
      </div>
    </div>
  );
}

export default Header_solid;
