/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../styles/SearchPage.css";
import { paginate } from "../utils/paginate";
import SearchPage_banner from "../components/SearchPage_banner";
import {
  getListings,
  getListingsByType,
  getListingsByTypeCount,
  getListingsCount,
} from "../services/listingsService";
import { useStateValue } from "../reducer/StateProvider";
import { Button } from "@material-ui/core";
import SearchResult from "../components/SearchResult";
import Pagination from "@material-ui/lab/Pagination";

function ListingsPage() {
  const [{ search, propertyType }] = useStateValue();
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchListings = async () => {
      const { data: result } = propertyType
        ? await getListingsByType(propertyType, currentPage)
        : await getListings(currentPage);

      const { data: total } = propertyType
        ? await getListingsByTypeCount(propertyType)
        : await getListingsCount();
        
      window.scrollTo(0, 0);

      setListings(result);
      setCount(total);
    };

    fetchListings();
  }, [currentPage, propertyType]);

  return (
    <div className="searchPage">
      <SearchPage_banner />
      <div className="searchPage__info">
        {search && <p>62 stays · 26 august to 30 august · 2 guest</p>}
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      {listings.map((listing) => (
        <SearchResult
          img={listing.image}
          location={listing.address}
          title={listing.name}
          description={`${listing.capacity_of_people} guest(s) · ${listing.num_of_rooms} room(s) · ${listing.num_of_beds} bed(s) · ${listing.num_of_baths} bathroom(s)`}
          star={listing.start_rating}
          property_type={listing.property_type}
          price={`$${listing.night_price}/ night`}
          total="$117 total"
        />
      ))}
      <div className="listings_pagination">
        <Pagination
          count={Math.floor(count / 20)}
          onChange={(e, page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ListingsPage;
