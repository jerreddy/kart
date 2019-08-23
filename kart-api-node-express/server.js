const express = require("express");
const morgan = require("morgan");
const config = require("config");
const debug = require("debug")("kart:startup");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

require("./src/startup/routes")(app);
require("./src/startup/middleware")(app);


if (app.get("env") === "development") {
  app.use(morgan("combined"));
  //console.log("Morgan enabled");
  debug("Morgan enabled");
}

debug("App Name : " + config.get("name"));
debug("Mail Host : " + config.get("mail.host"));
//console.log("Mail Password : " + config.get("mail.password"));

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`Application started on port ${port}`));
