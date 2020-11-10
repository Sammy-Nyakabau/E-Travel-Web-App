const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "location",
  },
  review: {
    user_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    rating: {
      type: Number,
    },
    comment: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1000,
    },
  },
  verified: {
      type: Boolean,
      required: true
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;
