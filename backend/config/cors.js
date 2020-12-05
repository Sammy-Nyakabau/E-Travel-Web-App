const cors = require("cors");

module.exports = function (app) {
  app.use(
    cors({
      methods: ["GET", "POST", "PUT"],
      credentials: true,
      origin: 'http://localhost:3000'
    })
  );
};
