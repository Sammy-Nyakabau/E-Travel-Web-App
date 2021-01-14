/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { useStateValue } from "../reducer/StateProvider";

import "../styles/RecentlyBookedCard.css";
import "../styles/SearchResult.css";

function WishlistCard({
  item,
  id,
  img,
  location,
  title,
  description,
  star,
  price,
  property_type,
  onClick,
}) {
  const [added, setAdded] = useState(true);
  const [{}, dispatch] = useStateValue();

  const handleWishlist = () => {
    const flag = added;
    if (flag) {
      setAdded(false);
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        id,
      });
    } else {
      setAdded(true);
      dispatch({
        type: "ADD_TO_WISHLIST",
        item,
      });
    }
  };
  return (
    <div className="searchResult1">
      <img src={img} alt="" onClick={onClick}/>
      <div
        className="searchResult__heart"
        onClick={() => handleWishlist()}
      >
        {added ? <FavoriteIcon style={{ fill: "D90964" }} /> : <FavoriteBorderIcon />}
      </div>

      <div className="searchResult__info1">
        <div className="searchResult__infoTop1"  onClick={onClick}>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>{property_type}</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
