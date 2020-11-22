/* eslint-disable */
import React, { useState } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Dropdown_options from "./Dropdown_options"



import "../styles/Header.css";

function Header() {
  const [header, setheader] = useState(false);


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
       <Link to="/" style={{ color: 'inherit', textDecoration:"inherit"}}>
      <h1 className="header_icon">Atlantis</h1>
      </Link> 

      {/* <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div> */}
      <div className="header_right">
       <Link to="/ListingsPage" style={{ color: 'inherit', textDecoration:"inherit"}}>
        <p>Our Listings</p>
        </Link>
        <Link to="/Hotel" style={{ color: 'inherit', textDecoration:"inherit"}}>
        <LanguageIcon />
        </Link>
        <ExpandMoreIcon />
        {/* <Avatar /> */}
        <Dropdown_options/>
       
      </div>
    </div>
  );
}

export default Header;
