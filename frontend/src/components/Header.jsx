import React, { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


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
        
      <h1 className="header_icon">Atlantis</h1>

      {/* <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div> */}
      <div className="header_right">
       <Link to="/SearchPage" style={{ color: 'inherit', textDecoration:"inherit"}}>
        <p>Our Locations</p>
        </Link>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
