const { Listing } = require("../models/listingsModel");

// @desc    Fetch all listings
// @route   GET /api/listings
// @access  Public
const getListings = async (req, res) => {
  const listings = await Listing.find().select("-__v").sort("name").limit(200);
  res.send(listings);
};

module.exports = {
  getListings,
};
