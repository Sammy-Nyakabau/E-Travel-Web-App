/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../styles/SearchPage.css";
import { useHistory } from "react-router-dom";
import SearchPage_banner from "../components/SearchPage_banner";
import {
  getListings,
  getListingsByType,
  getListingsByTypeCount,
  getListingsCount,
  getFilteredListings,
  getFilteredListingsCount,
} from "../services/listingsService";
import _ from "lodash";
import { useStateValue } from "../reducer/StateProvider";
import { Button } from "@material-ui/core";
import SearchResult from "../components/SearchResult";
import Pagination from "@material-ui/lab/Pagination";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function ListingsPage() {
  const history = useHistory();
  const [{ search, propertyType }, dispatch] = useStateValue();
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  useEffect(() => {
    const fetchListings = async () => {
      if (propertyType) {
        const { data: result } = await getListingsByType(
          propertyType,
          currentPage
        );
        const { data: total } = await getListingsByTypeCount(propertyType);
        setListings(result);
        setCount(total);
      } else if (search) {
        const { data: result } = await getFilteredListings(
          search.location,
          search.guests,
          currentPage
        );
        const { data: total } = await getFilteredListingsCount(
          search.location,
          search.guests
        );
        setListings(result);
        setCount(total);

        console.log(search.location);
        console.log(search.guests);
      } else {
        const { data: result } = await getListings(currentPage);
        const { data: total } = await getListingsCount();
        setListings(result);
        setCount(total);
      }

      window.scrollTo(0, 0);
    };

    fetchListings();

  }, [currentPage, propertyType]);

  const handleSelected = (listing) => {
    dispatch({
      type: "SET_ITEM",
      item: listing,
    });
    history.push("/Hotel");
  };

  const sortByPrice = () => {
    let sort = { ...sortColumn };
    sort.order = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({
        path: "night_price",
        order: sort.order,
    });
    filterListings()
  };
  
  const sortByRating = () => {
    let sort = { ...sortColumn };
    sort.order = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({
        path: "start_rating",
        order: sort.order,
    });
    filterListings()
  };
  
  const sortByReviews = () => {
    let sort = { ...sortColumn };
    sort.order = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({
        path: "reviews_count",
        order: sort.order,
    });
    filterListings()
  };

  const sortByRooms = () => {
    let sort = { ...sortColumn };
    sort.order = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({
        path: "num_of_rooms",
        order: sort.order,
    });
    filterListings()
  };
  
  const sortByBaths = () => {
    let sort = { ...sortColumn };
    sort.order = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({
        path: "num_of_baths",
        order: sort.order,
    });
    filterListings()
  };

  const filterListings = () => {
    let filtered = listings;
    filtered = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    setListings(filtered)
  }

  return (
    <div className="searchPage">
      <SearchPage_banner />
      <div className="searchPage__info">
        {search && (
          <p>
            {count} stays · {search.startDate.date()}{" "}
            {search.startDate.format("MMMM")} {search.startDate.format("YYYY")} to {search.endDate.date()}{" "}
            {search.endDate.format("MMMM")} {search.endDate.format("YYYY")}· {search.guests} guest(s)
          </p>
        )}
        <Button variant="outlined" onClick={sortByPrice}>
          Price
          {
            sortColumn.path === "night_price" ? 
            sortColumn.order === "asc" ? (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowUpwardIcon fontSize="small" color="inherit" />
              </span>
            ) : (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowDownwardIcon fontSize="small" color="inherit"/>
              </span>
            ) : <span></span>
          }
        </Button>
        <Button variant="outlined" onClick={sortByRating}>
          Rating
          {
            sortColumn.path === "start_rating" ? 
            sortColumn.order === "asc" ? (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowUpwardIcon fontSize="small" color="inherit" />
              </span>
            ) : (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowDownwardIcon fontSize="small" color="inherit"/>
              </span>
            ) : <span></span>
          }
        </Button>
        <Button variant="outlined" onClick={sortByReviews}>
          Reviews
          {
            sortColumn.path === "reviews_count" ? 
            sortColumn.order === "asc" ? (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowUpwardIcon fontSize="small" color="inherit" />
              </span>
            ) : (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowDownwardIcon fontSize="small" color="inherit"/>
              </span>
            ) : <span></span>
          }
        </Button>
        <Button variant="outlined" onClick={sortByRooms}>
          Rooms
          {
            sortColumn.path === "num_of_rooms" ? 
            sortColumn.order === "asc" ? (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowUpwardIcon fontSize="small" color="inherit" />
              </span>
            ) : (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowDownwardIcon fontSize="small" color="inherit"/>
              </span>
            ) : <span></span>
          }
        </Button>
        
        <Button variant="outlined" onClick={sortByBaths}>
          Bathrooms
          {
            sortColumn.path === "num_of_baths" ? 
            sortColumn.order === "asc" ? (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowUpwardIcon fontSize="small" color="inherit" />
              </span>
            ) : (
              <span style={{position: "relative", bottom: -1, color: "#e13a83"}}>
                <ArrowDownwardIcon fontSize="small" color="inherit"/>
              </span>
            ) : <span></span>
          }
        </Button>
        
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
          onClick={() => handleSelected(listing)}
          item={listing}
          id={listing.id}
          cost={listing.night_price}
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
