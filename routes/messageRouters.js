const express = require("express");
const router = express.Router();
const totalHobbies = require("../models/Messages/TotalHobbies");
const goodHobbies = require("../models/Messages/GoodHobbies");
const badHobbies = require("../models/Messages/BadHobbies");
const Other = require("../models/Messages/Other");
const General = require("../models/Messages/General");
const TotalHobbies = require("../models/Messages/TotalHobbies");

router.get("/", (req, res) => {
  TotalHobbies.find().then((total) => res.json(total));
});
