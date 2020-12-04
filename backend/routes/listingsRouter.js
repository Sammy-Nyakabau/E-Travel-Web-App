const express = require("express");
const router = express.Router();

const {
  getListings,
  getListingsByType,
  getListingsCount,
  getListingsByTypeCount,
  getOneListing,
  updateListing,
  getFilteredListings,
  getFilteredListingsCount,
  getRecommendedListings,
} = require("../controllers/listingsController");

router.get(
  "/recommended/:airbnb_city/:property_type/:guests/:price",
  getRecommendedListings
);
router.get("/search/count/:airbnb_city/:guests", getFilteredListingsCount);
router.get("/search/:airbnb_city/:guests/:page", getFilteredListings);
router.get("/one/:_id", getOneListing);
router.get("/count/:property_type", getListingsByTypeCount);
router.get("/count", getListingsCount);
router.get("/:property_type/:pageNumber", getListingsByType);
router.get("/:pageNumber", getListings);
router.put("/:_id", updateListing);

module.exports = router;
