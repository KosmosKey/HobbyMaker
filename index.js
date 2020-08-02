const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`The port is currently running on PORT ${PORT}`)
);
