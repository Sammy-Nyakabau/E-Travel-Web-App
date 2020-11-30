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

// @desc    Fetch the total number of listings returned
// @route   GET /api/listings/count/property_type
// @access  Public
const getListingsByTypeCount = async (req, res) => {
  const { property_type } = req.params;
  const count = await Listing.where({property_type}).countDocuments();
  res.json(count);
};

// @desc    Fetch the total number of listings returned
// @route   GET /api/listings/count
// @access  Public
const getListingsCount = async (req, res) => {
  const count = await Listing.find().estimatedDocumentCount();
  res.json(count);
};

// @desc    Fetch the listing with the matching id
// @route   GET /api/listings/one/:id
// @access  Public
const getOneListing = async (req, res) => {
  const { _id } = req.params

  const listing = await Listing.findOne({_id})
  res.send(listing)
};

module.exports = {
  getListings,
  getListingsByType,
  getListingsCount,
  getListingsByTypeCount,
  getOneListing
};
