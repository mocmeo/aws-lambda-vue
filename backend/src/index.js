const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

// enhance your app security with Helmet
app.use(helmet());

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined")); // log

// start the server
app.listen(8081, () => {
	console.log("listening on port 8081");
});
