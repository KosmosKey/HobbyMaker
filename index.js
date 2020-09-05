const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname, "./client/public/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/build"));
});

mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB is connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", require("./routes/routers"));
app.use("/api/messages", require("./routes/routerMessage"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`The port is currently running on PORT ${PORT}`)
);
