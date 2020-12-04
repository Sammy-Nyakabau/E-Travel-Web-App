import React from "react";
import "../styles/RecentlyBooked_card.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import Semantic_textarea from "../components/Semantic_textarea";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "../styles/SearchResult.css";


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
      display: 'flex',
      alignItems: 'center',
    },
  });

function RecentlyBooked_card({
  img,
  location,
  title,
  description,
  property_type,
}) {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
  return (
    <div className="searchResult1">
      <img src={img} alt="" />

      <div className="searchResult__info1">
        <div className="searchResult__infoTop1">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>{property_type}</p>
          <p>{description}</p>
        </div>
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
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
        <div className="write_review">
          <Semantic_textarea />
        </div>
        <button className="submit-review">Submit review</button>
      </div>
    </div>
  );
}

export default RecentlyBooked_card;
