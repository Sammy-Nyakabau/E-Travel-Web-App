import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../styles/Header_solid.css";

function Header_solid() {
  return (
    <div className="header">
        
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

export default Header_solid;
