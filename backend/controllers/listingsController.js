const { Listing } = require("../models/listingsModel");

// @desc    Fetch all listings
// @route   GET /api/listings/pageNumber
// @access  Public
const getListings = async (req, res) => {
  const { pageNumber } = req.params;
  const listings = await Listing.find()
    .select("-__v")
    .skip(pageNumber * 20)
    .limit(20);
  res.send(listings);
};

// @desc    Fetch all listings by type
// @route   GET /api/listings/property_type/pageNumber
// @access  Public
const getListingsByType = async (req, res) => {
  const { pageNumber, property_type } = req.params;
  const listings = await Listing.find({ property_type })
    .select("-__v")
    .skip(pageNumber * 20)
    .limit(20);
  res.send(listings);
};

// @desc    Fetch the total number of listings returned
// @route   GET /api/listings/count/property_type
// @access  Public
const getListingsByTypeCount = async (req, res) => {
  const { property_type } = req.params;
  const count = await Listing.where({ property_type }).countDocuments();
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
  const { _id } = req.params;

  const listing = await Listing.findOne({ _id });
  res.send(listing);
};

// @desc    Count filtered listings based on city and number of guests
// @route   GET /api/listings/search/count/:airbnb_city/:guests
// @access  Public
const getFilteredListingsCount = async (req, res) => {
  const { airbnb_city, guests } = req.params;

  const count = await Listing.where({ airbnb_city })
    .where("capacity_of_people")
    .lte(guests)
    .countDocuments();
  res.json(count);
};

// @desc    Fetch filtered listings based on city and number of guests
// @route   GET /api/listings/search/:airbnb_city/:guests/:id
// @access  Public
const getFilteredListings = async (req, res) => {
  const { airbnb_city, guests, page } = req.params;
  
  const listings = await Listing.find({
    airbnb_city,
    capacity_of_people: { $lte: guests },
  })
    .skip(page * 20)
    .limit(20);
  res.send(listings);
};

// @desc    Update a listings ratings
// @route   PUT /api/listings/:id
// @access  Public
const updateListing = async (req, res) => {
  const { _id } = req.params;

  const { reviews_count, start_rating } = req.body;
  const listing = await Listing.findByIdAndUpdate(
    _id,
    {
      reviews_count,
      start_rating,
    },
    {
      new: true,
    }
  );

  res.send(listing);
};

module.exports = {
  getListings,
  getListingsByType,
  getListingsCount,
  getListingsByTypeCount,
  getOneListing,
  updateListing,
  getFilteredListings,
  getFilteredListingsCount,
};
