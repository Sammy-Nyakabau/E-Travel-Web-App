import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import HeaderLogin from "./HeaderLogin";
import DropdownOptions from "./DropdownOptions";
import { useStateValue } from "../reducer/StateProvider";
import { getLoggedInUser } from "../services/userService";
import "../styles/Header.css";

function Header() {
  const [header, setheader] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const { data: res } = await getLoggedInUser();

      dispatch({
        type: "SET_USER",
        user: res,
      });
      if (res) toast.success(`Logged In as ${res.username}`) 
    };

    fetchLoggedInUser();
  }, [dispatch]);


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
    toast(`You Have Been Logged Out`)
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

export default Header;
