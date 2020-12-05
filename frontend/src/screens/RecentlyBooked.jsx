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
        bookedListings = [
          ...bookedListings,
          [listing, booking.booking.startDate, booking.booking.endDate],
        ];
        console.log(bookedListings);
        setListings(bookedListings);
      });
      console.log(bookings);
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
            img={listing[0].image}
            location={listing[0].address}
            title={listing[0].name}
            description={`${listing[0].capacity_of_people} guest(s) · ${listing[0].num_of_rooms} room(s) · ${listing[0].num_of_beds} bed(s) · ${listing[0].num_of_baths} bathroom(s)`}
            star={listing[0].start_rating}
            property_type={listing[0].property_type}
            startDate={listing[1]}
            endDate={listing[2]}
            item={listing[0]}
          />
        ))}

        <div className="booked_hotel-reviews"></div>
      </div>
    </div>
  );
};
export default RecentlyBooked;
