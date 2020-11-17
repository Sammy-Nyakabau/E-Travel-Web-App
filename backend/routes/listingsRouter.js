const express = require("express");
const router = express.Router();

const {
  getListings,
} = require("../controllers/listingsController");

router.get("/", getListings);

module.exports = router;
