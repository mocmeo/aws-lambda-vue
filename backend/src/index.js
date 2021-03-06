const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined")); // log

// enhance your app security with Helmet
app.use(helmet());
app.use("/micro-posts", routes);

module.exports = app;
