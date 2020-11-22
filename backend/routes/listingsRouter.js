const express = require("express");
const router = express.Router();

const {
  getListings,
  getListingsByType,
} = require("../controllers/listingsController");

router.get("/:pageNumber", getListings);
router.get("/:property_type/:pageNumber", getListingsByType);

module.exports = router;
