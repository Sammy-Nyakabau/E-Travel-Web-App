import React from "react";
import "../styles/Header_solid.css";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'
import Dropdown_options from "./Dropdown_options"

import "../styles/Header_solid.css";

function Header_solid() {
  return (
    <div className="header_solid">
        <Link to="/" style={{ color: 'inherit', textDecoration:"inherit"}}>
      <h1 className="header_icon">Atlantis</h1>
      </Link>

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
        <Dropdown_options/>
        {/* <Avatar /> */}
      </div>
    </div>
  );
}

export default Header_solid;
