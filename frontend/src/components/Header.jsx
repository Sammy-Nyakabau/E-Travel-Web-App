/* eslint-disable */
import React, { useState, useEffect } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import Dropdown_options from "./Dropdown_options";
import { useStateValue } from "../reducer/StateProvider";

import "../styles/Header.css";

function Header() {
  const [header, setheader] = useState(false);
  const [{allListings}, dispatch] = useStateValue();

  const resetListings = () => {
    dispatch({
      type: "SET_LISTINGS",
      items: allListings,
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
        <Link
          to="/Hotel"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <LanguageIcon />
        </Link>
        <ExpandMoreIcon />
        {/* <Avatar /> */}
        <Dropdown_options />
      </div>
    </div>
  );
}

export default Header;
