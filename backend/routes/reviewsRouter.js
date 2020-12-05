const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviewsOfAListing,
  getReviewOfAListingByUser,
  updateReview
} = require("../controllers/reviewsController");

router.get("/:listing", getReviewsOfAListing);
router.get("/one/:user/:listing", getReviewOfAListingByUser);
router.put("/update", updateReview);

router.post("/", createReview);

module.exports = router;
