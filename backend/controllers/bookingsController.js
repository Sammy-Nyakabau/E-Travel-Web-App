const { Booking } = require("../models/bookingsModel");

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  const { user, listing, booking } = req.body;

  const newBooking = new Booking({ user, listing, booking });
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

// @desc    Fetch bookings for a user
// @route   GET /api/bookings/user/:id
// @access  Public
const getUserBookings = async (req, res) => {
  const { user } = req.params;

  const bookings = await Booking.find({ user }).select("-__v");

  res.send(bookings);
};

module.exports = {
  createBooking,
  getBookings,
  getUserBookings
};
