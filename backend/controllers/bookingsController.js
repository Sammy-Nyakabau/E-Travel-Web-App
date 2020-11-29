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

// @desc    Fetch bookings for a particular listings
// @route   GET /api/bookings/:id
// @access  Public
const getBookings = async (req, res) => {
  const { listing } = req.params;

  const bookings = await Booking.find({ listing }).select("-__v");

  res.send(bookings);
};

module.exports = {
  createBooking,
  getBookings,
};
