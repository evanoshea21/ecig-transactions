const express = require("express");
//express dependencies
require("dotenv").config();
const morgan = require("morgan"); //logs incoming requests + status
const bodyParser = require("body-parser"); //parses json
const cors = require("cors"); // sets CORS headers

//UTILS imported (functions to charge credit card)
const AnetUtils = require("./AnetUtils.js");

const app = express(); // init express server

//Middleware for incoming requests
// json, urlencoded, cors policy, morgan, dotenv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // true means it accepts js objects (in addition to strings and arrays)
app.use(morgan("dev"));
app.use(cors());

//ROUTES
// get, post (for transactions)

app.get("/", (req, res) => {
  // charge credit card
  AnetUtils.chargeCreditCard(function () {
    console.log("chargeCreditCard call complete.");
    res.send("server pong");
  });
});

//UTILS
// import function for charge credit card

const PORT = process.env.PORT ?? 1200;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
