const logger = require("../config/logger");

module.exports = function (err, req, res, next) {
  logger.error(err.message, err);
  console.error(err);

  res.status(500).send("Something failed.");
};
