const express = require("express");
const router = express.Router();

const { createBooking, getBookings, getUserBookings } = require("../controllers/bookingsController");

router.post("/", createBooking);
router.get("/:listing", getBookings);
router.get("/user/:user", getUserBookings);

module.exports = router;
