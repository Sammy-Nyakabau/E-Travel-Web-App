import React from "react";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="reviewer_info">
        <div className="reviewer_name">{review.name}</div>
      </div>
               
      <div className="review_writeup">
        <p>
          {review.writeup}
        </p>
      </div>
    </div>
  );
};

export default Review;
