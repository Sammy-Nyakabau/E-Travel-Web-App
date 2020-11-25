const { Booking } = require("../models/bookingsModel");

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  const { listing, booking } = req.body;

  const newBooking = new Booking({ listing, booking });
  await newBooking.save();

  res.send(newBooking);
};

module.exports = {
  createBooking,
};
