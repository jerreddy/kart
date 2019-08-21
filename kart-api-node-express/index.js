const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const config = require("config");
const debug = require("debug")("app:startup");

const logger = require("./middleware/logger");
const authenticate = require("./middleware/authentication");

const home = require('./routes/home');
const products = require('./routes/products');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(helmet());
app.use(logger);
app.use(authenticate);

app.use('/', home);
app.use('/api/products', products);

app.set("view engine", "pug");
app.set("views", "./views");

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
