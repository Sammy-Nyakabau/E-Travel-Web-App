const express = require("express");
//add routes specific to project here
const reviews = require("../routes/reviews");
const users = require("../routes/users");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/reviews", reviews);
  app.use(error);
};
