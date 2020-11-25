/* eslint-disable */
import React from "react";
import "../styles/Header_solid.css";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";
import Header_login from "./Header_login"
import Dropdown_options from "./Dropdown_options";

import { useStateValue } from "../reducer/StateProvider";

import "../styles/Header_solid.css";

function Header_solid() {
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
        {/* <Link
          to="/Hotel"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <LanguageIcon />
        </Link> */}
        <Dropdown_options />
        {/* <Avatar /> */}
        <Header_login/>
      </div>
    </div>
  );
}

export default Header_solid;
