import React from "react";
import "react-dates/initialize";
import { useHistory } from "react-router-dom";

import WishlistCard from "../components/WishlistCard";
import { useStateValue } from "../reducer/StateProvider";

import "../styles/RecentlyBooked.css";

const Wishlist = () => {
  const [{ wishlist }, dispatch] = useStateValue();
  const history = useHistory();

  const handleSelected = (listing) => {
    dispatch({
      type: "SET_ITEM",
      item: listing,
    });
    history.push("/Hotel");
  };

  return (
    <div className="recentlybooked">
      <h1 className="recentlybookedlocations">Wishlist:</h1>
      <div className="booked_card">
        {wishlist.map((listing) => (
          <WishlistCard
            img={listing.image}
            location={listing.address}
            title={listing.name}
            description={`${listing.capacity_of_people} guest(s) · ${listing.num_of_rooms} room(s) · ${listing.num_of_beds} bed(s) · ${listing.num_of_baths} bathroom(s)`}
            star={listing.start_rating}
            property_type={listing.property_type}
            price={`$${listing.night_price}/ night`}
            onClick={() => handleSelected(listing)}
            item={listing}
            id={listing.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
