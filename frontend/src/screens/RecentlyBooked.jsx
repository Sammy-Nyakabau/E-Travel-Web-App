/* eslint-disable */
import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import "../styles/RecentlyBooked.css";
import "react-dates/lib/css/_datepicker.css";
import RecentlyBooked_card from "../components/RecentlyBooked_card";
import { useStateValue } from "../reducer/StateProvider";
import { getUserBookings } from "../services/bookingService";
import { getOneListing } from "../services/listingsService";

const RecentlyBooked = () => {
  const [{ user }] = useStateValue();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      let bookedListings = [];
      const { data: bookings } = await getUserBookings(user._id);

      bookings.forEach(async (booking) => {
        const { data: listing } = await getOneListing(booking.listing);
        bookedListings = [...bookedListings, listing]
        setListings(bookedListings);
      });
    };

    fetchBookings();
  }, [user._id]);

  return (
    <div className="recentlybooked">
      <h1 className="recentlybookedlocations">Recently Booked locations:</h1>
      <div className="booked_card">
        {listings.map((listing) => (
          <RecentlyBooked_card
            // style={{ borderbottom: "none" }}
            img={listing.image}
            location={listing.address}
            title={listing.name}
            description={`${listing.capacity_of_people} guest(s) · ${listing.num_of_rooms} room(s) · ${listing.num_of_beds} bed(s) · ${listing.num_of_baths} bathroom(s)`}
            star={listing.start_rating}
            property_type={listing.property_type}
          />
        ))}

        <div className="booked_hotel-reviews"></div>
      </div>
    </div>
  );
};
export default RecentlyBooked;
