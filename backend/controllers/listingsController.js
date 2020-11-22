const { Listing } = require("../models/listingsModel");

// @desc    Fetch all listings
// @route   GET /api/listings/pageNumber
// @access  Public
const getListings = async (req, res) => {
  const { pageNumber} = req.params;
  const listings = await Listing.find().select("-__v").skip(pageNumber * 20).limit(20);
  res.send(listings);
};

// @desc    Fetch all listings by type
// @route   GET /api/listings/property_type/pageNumber
// @access  Public
const getListingsByType = async (req, res) => {
  const { pageNumber, property_type } = req.params;
  const listings = await Listing.find({property_type}).select("-__v").skip(pageNumber * 20).limit(20);
  res.send(listings);
};

module.exports = {
  getListings,
  getListingsByType
};
