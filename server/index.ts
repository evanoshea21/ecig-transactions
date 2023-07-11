// RUN WITH ts-node (built into nodemon) -> "npx nodemon server/index.ts"
const express = require("express");
//express dependencies
require("dotenv").config();
const morgan = require("morgan"); //logs incoming requests + status
const bodyParser = require("body-parser"); //parses json
const cors = require("cors"); // sets CORS headers

//UTILS imported (functions to charge credit card)
const chargeCard = require("./ChargeCard");

const app = express(); // init express server

//Middleware for incoming requests
// json, urlencoded, cors policy, morgan, dotenv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // true means it accepts js objects (in addition to strings and arrays)
app.use(morgan("dev"));
app.use(cors());

//ROUTES
// get, post (for transactions)

app.get("/", (req: any, res: any) => {
  // charge credit card
  chargeCard(function (response: any) {
    console.log(
      "chargeCreditCard RESPONSE\n==================================",
      response
    );
    res.send("server pong");
  });
  // res.send("server pong");
});

//UTILS
// import function for charge credit card

const PORT = process.env.PORT ?? 1200;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
