import React from "react";
import { Link } from "react-router-dom";

import HeaderLogin from "./HeaderLogin";
import DropdownOptions from "./DropdownOptions";

import { useStateValue } from "../reducer/StateProvider";

import "semantic-ui-css/semantic.min.css";
import "../styles/HeaderSolid.css";

function HeaderSolid() {
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
        {user ? <DropdownOptions /> : <div></div>}
        <Link
          to="/ListingsPage"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <p onClick={() => resetListings()}>Our Listings</p>
        </Link>

        {user ? (
          <Link style={{ color: "inherit", textDecoration: "inherit" }}>
            <p onClick={() => logOut()}>Logout</p>
          </Link>
        ) : (
          <HeaderLogin />
        )}
      </div>
    </div>
  );
}

export default HeaderSolid;
