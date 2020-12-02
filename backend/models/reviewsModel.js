const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "listings",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  review: {
    rating: {
      type: Number,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  verified: {
    type: Boolean,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;
