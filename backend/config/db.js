const mongoose = require('mongoose');
require("dotenv").config();
const debug = require('debug')("app:db");
const logger = require('./logger')
const db = process.env.MONGO;

module.exports = function() {
  mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    logger.info(`Connected to database`);
    debug("Connected to database");
  })
  .catch((err) => {
    debug("Failed to connect to database");
    logger.error(err.message);
  });
}