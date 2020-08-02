const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB is connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", require("./routes/routers"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`The port is currently running on PORT ${PORT}`)
);
