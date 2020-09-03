const express = require("express");
const router = express.Router();
const GoodHobbies = require("../models/Messages/GoodHobbies");
const Other = require("../models/Messages/Other");
const General = require("../models/Messages/General");
const TotalHobbies = require("../models/Messages/TotalHobbies");
const BadHobbies = require("../models/Messages/BadHobbies");

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

router.get("/Bad", (req, res) => {
  BadHobbies.find()
    .sort({ date: -1 })
    .then((user) => res.json(user));
});

router.post("/Bad", (req, res) => {
  const newBadHobbyChat = new BadHobbies({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newBadHobbyChat.save().then((bad) => res.json(bad));
});

router.delete("/Bad/:id", (req, res) => {
  BadHobbies.findByIdAndDelete(req.params.id).then((bad) => res.json(bad));
});

router.get("/Other", (req, res) => {
  Other.find()
    .sort({ date: -1 })
    .then((other) => res.json(other));
});

router.post("/Other", (req, res) => {
  const otherMessages = new Other({
    name: req.body.name,
    email: req.body.email,
    message: req.body.email,
  });

  otherMessages.save().then((other) => res.json(other));
});

router.delete("/Other/:id", (req, res) => {
  Other.findByIdAndDelete(req.params.id).then((other) => res.json(other));
});

module.exports = router;
