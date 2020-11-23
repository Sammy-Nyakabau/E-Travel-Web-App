const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "users",
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "listings",
  },
  booking: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
});

const Booking = mongoose.model("Booking", bookingsSchema);

exports.Booking = Booking;
