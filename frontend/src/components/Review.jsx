import React, { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../styles/Review.css"

const Review = ({ review }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: res } = await getUser(review.user);
      setUser(res);
    };
    fetchUser();
  }, [review.user]);
  return (
    <div className="review">
      <div className="reviewer_info">
        {user && (
          <div className="reviewer_name">
            {user.username}{" "}
            {review.verified ? (
              
                <VerifiedUserIcon />
              
            ) : (
              <span></span>
            )}
          </div>
        )}
      </div>

      <div className="review_writeup">
        <p>{review.review.comment}</p>
      </div>
    </div>
  );
};

export default Review;
