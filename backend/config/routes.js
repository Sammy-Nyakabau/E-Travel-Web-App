const express = require("express");

const error = require("../middleware/error");

const listings = require("../routes/listingsRouter");
const users = require("../routes/usersRouter");
const bookings = require("../routes/bookingsRouter");
const reviews = require("../routes/reviewsRouter");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/listings", listings);
  app.use("/api/bookings", bookings);
  app.use("/api/reviews", reviews);
  app.use(error);
};
