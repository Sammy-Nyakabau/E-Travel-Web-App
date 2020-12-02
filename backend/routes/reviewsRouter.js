const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviewsOfAListing,
} = require("../controllers/reviewsController");

router.get("/:listing", getReviewsOfAListing);

router.post("/", createReview);

module.exports = router;
