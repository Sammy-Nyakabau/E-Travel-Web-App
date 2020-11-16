const express = require("express");
const debug = require("debug")("app:startup");
const app = express();
const port = process.env.PORT || 5000;

require("./config/cors")(app);
require("./config/passport")(app);
require("./config/routes")(app);
require("./config/db")();

app.get("/", (req, res) => {
  res.send("hello");
});

const server = app.listen(port, () =>
  debug(`App listening at http://localhost:${port}`)
);

module.exports = server;
