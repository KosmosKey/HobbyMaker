const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Auth");
const bcrypt = require("bcryptjs");
const Todo = require("../models/Todo");
require("dotenv").config();

router.get("/", (req, res) => {
  User.find()
    .sort({ Date: -1 })
    .then((user) => res.json(user));
});

router.post("/Register", (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password
  )
    return res.status(400).json({ message: "Please fill out all the fields" });

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) res.status(400).json({ message: "The email already exists" });
  });

  bcrypt.hash(req.body.password, 10).then((hash) => {
    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
    });

    newUser.save().then((user) => res.json(user));
  });
});

router.post("/Login", (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).json({ message: "Please fill out all the fields" });

  User.findOne({ email: req.body.email }).then((user) => {
    if (!user)
      return res.status(400).json({ message: "This user does not exist" });

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ message: "The password did not match" });

      const payload = {
        id: user._id,
        email: user.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    });
  });
});

router.post("/Todo", auth, (req, res) => {
  const todo = new Todo(req.body);
  if (!todo)
    return res.status(400).json({ message: "You did not fill out todo list" });

  todo.save().then((todos) => {
    req.user.items.push(todos);
    res.status(400).json(todos);
  });
});

module.exports = router;
