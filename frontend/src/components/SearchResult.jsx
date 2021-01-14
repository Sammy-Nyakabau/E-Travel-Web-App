import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CurrencyFormat from "react-currency-format";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

import { useStateValue } from "../reducer/StateProvider";

import "../styles/SearchResult.css";

function SearchResult({
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
  cost,
}) {
  const [{ search, wishlist, user }, dispatch] = useStateValue();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (wishlist.some((listing) => listing.name === item.name)) {
      setAdded(true);
    }
  }, [item.name, wishlist]);

  const handleWishlist = () => {
    if (added) {
      setAdded(false);
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        id,
      });
      toast("Removed from Wishlist!");

    } else {
      setAdded(true);
      toast.success("Successfully added to Wishlist!");
      dispatch({
        type: "ADD_TO_WISHLIST",
        item,
      });
    }
  };

  return (
    <div className="searchResult">
      <img src={img} alt="" onClick={onClick} />
      {user && (
        <div className="searchResult__heart" onClick={() => handleWishlist()}>
          {added ? (
            <FavoriteIcon style={{ fill: "D90964" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
      )}

      <div className="searchResult__info" onClick={onClick}>
        <div className="searchResult__infoTop">
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
            {search && (
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p> {value} total</p>
                  </>
                )}
                decimalscale={2}
                value={cost * search.endDate.diff(search.startDate, "days")}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
