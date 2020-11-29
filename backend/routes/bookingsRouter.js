const express = require("express");
const router = express.Router();

const { createBooking, getBookings } = require("../controllers/bookingsController");

router.post("/", createBooking);
router.get("/:listing", getBookings);

module.exports = router;
