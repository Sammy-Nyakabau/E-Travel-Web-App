/* eslint-disable */
import React, { useState, useEffect } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Header_login from "./Header_login"
import Dropdown_options from "./Dropdown_options";
import { useStateValue } from "../reducer/StateProvider";
import "../styles/Header.css";

function Header() {
  const [header, setheader] = useState(false);
  const [{}, dispatch] = useStateValue();

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
  const changeBackground = () => {
    console.log(window.ScrollY);
    if (window.scrollY >= 80) {
      setheader(true);
    } else {
      setheader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={header ? "header active" : "header"}>
      
      <div className="header_left">
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <h1 className="header_icon">Atlantis</h1>
      </Link>
      </div>
      <div className="header_right">
        <Link
          to="/ListingsPage"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <p onClick={() => resetListings()}>Our Listings</p>
        </Link>
        {/* <Link
          to="/Hotel"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <LanguageIcon />
        </Link> */}
        {/* <ExpandMoreIcon /> */}
        {/* <Avatar /> */}
        <Dropdown_options />
        
          <Header_login/>
         
        
      </div>
    </div>
  );
}

export default Header;
