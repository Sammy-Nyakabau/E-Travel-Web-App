import React, { useState, useEffect } from "react";
import "../styles/RecentlyBookedCard.css";
import Moment from "moment";
import { extendMoment } from "moment-range";
import {
  addReview,
  getReviews,
  getReviewOfAListingByUser,
  updateReview,
} from "../services/reviewsService";
import { getUserBookings } from "../services/bookingService";
import { Form, TextArea } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "../styles/SearchResult.css";
import { useStateValue } from "../reducer/StateProvider";
import { updateListing } from "../services/listingsService";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

function RecentlyBookedCard({
  img,
  location,
  title,
  description,
  property_type,
  startDate,
  endDate,
  item,
}) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const moment = extendMoment(Moment);
  const [comment, setComment] = useState("");
  const [reviewed, setReviewed] = useState(false);
  const [edit, setEdit] = useState(false);
  const start = moment(startDate);
  const end = moment(endDate);

  useEffect(() => {
    const checkReview = async () => {
      const { data: review } = await getReviewOfAListingByUser(
        user._id,
        item._id
      );
      if (review.length > 0) {
        setReviewed(true);
        setComment(review[0].review.comment)
        setValue(review[0].review.rating)
      }
    };
    setEdit(false)

    checkReview();
  }, [user._id, item._id]);

  const createReview = async (e) => {
    e.preventDefault();
    let verified = false;

    const { data: userBookings } = await getUserBookings(user._id);
    if (userBookings.length > 5) {
      verified = true;
    }

    try {
      const review = { user_name: user.username, rating: value, comment };
      if (!edit) {
        await addReview(item._id, user._id, review, verified);
        
      }else {
        await updateReview(item._id, user._id, review)
      }

      let ratings = [];
      const { data: reviews } = await getReviews(item._id);
      let numberOfReviews = reviews.length;

      reviews.forEach((res) => {
        ratings.push(res.review.rating);
      });

      let averageRatings = ratings.reduce((a, b) => a + b) / ratings.length;

      await updateListing(item._id, numberOfReviews, averageRatings);
      setReviewed(true);
    } catch (error) {
      console.log(error);
    }
  };

  const editReview = () => {
    setReviewed(false);
    setEdit(true)
  };

  const handleChange = (e, data) => {
    setComment(data.value);
  };

  return (
    <div className="searchResult1">
      <img src={img} alt="" />

      <div className="searchResult__info1">
        <div className="searchResult__infoTop1">
          <div className="searchResult__infoTop2">
            <p>{location}</p>
            <div className="booked_date">
              <p className="booked_date_start">
                {start.date()} {start.format("MMMM")} {start.format("YYYY")}
              </p>
              <p> - </p>
              <p className="booked_date_end">
                {" "}
                {end.date()} {end.format("MMMM")} {end.format("YYYY")}
              </p>
            </div>
          </div>

          <h3>{title}</h3>
          <p>{property_type}</p>
          <p>{description}</p>
        </div>
        {!reviewed && (
          <div className="rate">
            <div className={classes.root}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
          </div>
        )}

        {!reviewed && (
          <div className="write_review">
            <Form>
              <TextArea
                placeholder="Write a review..."
                onChange={handleChange}
                value={comment}
              />
            </Form>
          </div>
        )}
        {reviewed ? (
          <button className="submit-review" onClick={editReview}>
            Edit review
          </button>
        ) : (
          <button className="submit-review" onClick={createReview}>
            Submit review
          </button>
        )}
      </div>
    </div>
  );
}

export default RecentlyBookedCard;
