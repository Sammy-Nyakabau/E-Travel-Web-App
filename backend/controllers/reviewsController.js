const { Review } = require("../models/reviewsModel");

// @desc    Fetch all reviews of a listing
// @route   GET /api/reviews/:listing
// @access  Public
const getReviewsOfAListing = async (req, res) => {
  const { listing } = req.params;
  const review = await Review.find({ listing }).select("-__v");
  res.send(review);
};

// @desc    Create a review
// @route   POST /api/reviews/
// @access  Public
const createReview = async (req, res) => {
  const { user, listing, review, verified } = req.body;

  const newReview = new Review({
    user,
    listing,
    review,
    verified,
  });
  const createdReview = await newReview.save();

  res.status(201).json(createdReview);
};

module.exports = {
  getReviewsOfAListing,
  createReview,
};
