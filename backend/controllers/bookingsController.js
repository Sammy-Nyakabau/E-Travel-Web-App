const { Booking } = require("../models/bookingsModel");

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  const { listing, startDate, endDate } = req.body;

  const booking = new Booking({listing, booking: { startDate, endDate }});
  await booking.save();

  res.send(booking)
};

module.exports = {
  createBooking,
};
