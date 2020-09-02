const express = require("express");
const router = express.Router();
const GoodHobbies = require("../models/Messages/GoodHobbies");
const badHobbies = require("../models/Messages/BadHobbies");
const Other = require("../models/Messages/Other");
const General = require("../models/Messages/General");
const TotalHobbies = require("../models/Messages/TotalHobbies");

router.get("/", (req, res) => {
  General.find()
    .sort({ date: -1 })
    .then((general) => res.json(general));
});

router.get("/Total", (req, res) => {
  TotalHobbies.find()
    .sort({ date: -1 })
    .then((total) => res.json(total));
});

router.post("/Total", (req, res) => {
  const newTotalHobbiesMessage = new TotalHobbies({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newTotalHobbiesMessage.save().then((user) => res.json(user));
});

router.delete("/Total/:id", (req, res) => {
  TotalHobbies.findByIdAndRemove(req.params.id).then((total) =>
    res.json(total)
  );
});

router.post("/TotalHobbyMessage", (req, res) => {
  const newMessageUser = new General({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newMessageUser.save().then((message) => res.json(message));
});

router.delete("/TotalHobbyMessage/:id", (req, res) => {
  General.findByIdAndDelete(req.params.id).then((total) => res.json(total));
});

router.get("/Good", (req, res) => {
  GoodHobbies.find()
    .sort({ date: -1 })
    .then((good) => res.json(good));
});

router.post("/Good", (req, res) => {
  const goodHobbyMessage = new GoodHobbies({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  goodHobbyMessage.save().then((good) => res.json(good));
});

router.delete("/Good/:id", (req, res) => {
  GoodHobbies.findByIdAndDelete(req.params.id).then((good) => res.json(good));
});

module.exports = router;
