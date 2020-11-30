const express = require("express");
const router = express.Router();

const {
  getListings,
  getListingsByType,
  getListingsCount,
  getListingsByTypeCount,
  getOneListing
} = require("../controllers/listingsController");

router.get("/one/:_id", getOneListing);
router.get("/count/:property_type", getListingsByTypeCount);
router.get("/count", getListingsCount);
router.get("/:property_type/:pageNumber", getListingsByType);
router.get("/:pageNumber", getListings);

module.exports = router;
