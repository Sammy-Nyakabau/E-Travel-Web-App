const express = require("express");
const debug = require("debug")("app:startup");
const app = express();
const port = process.env.PORT || 5000;

require("./startup/cors")(app);
require("./startup/passport")(app);
require("./startup/routes")(app);
require("./startup/db")();

app.get("/", (req, res) => {
  res.send("hello");
});

const server = app.listen(port, () =>
  debug(`App listening at http://localhost:${port}`)
);

module.exports = server;
