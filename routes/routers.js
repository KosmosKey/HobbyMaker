const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Auth");
const bcrypt = require("bcryptjs");
const Todo = require("../models/Todo");
require("dotenv").config();

router.get("/", auth, (req, res) => {
  res.json(req.user);
});

router.post("/Register", async (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password
  )
    return res.status(400).json({ message: "Please fill out all the fields" });

  const user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).json({ message: "The email already exists" });

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

router.get("/UserTodos", auth, (req, res) => {
  User.findById(req.user.id).then((user) => {
    res.json(user);
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
        return res
          .status(400)
          .json({ message: "Your email or password did not match" });

      const payload = {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.json({
        token,
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        },
      });
    });
  });
});

router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then((item) => {
    res.json(item);
  });
});

router.put("/:id", (req, res) => {
  if (!req.body.name || !req.body.number || !req.body.message)
    return res.status(400).json({ message: "Please fill out all the fields" });

  Todo.findById(req.params.id).then((todo) =>
    todo
      .update(req.body)
      .then(res.json({ message: "Successfully updated your hobby!" }))
  );
});

router.get("/todos", (req, res) => {
  Todo.find().then((todos) => res.json(todos));
});

router.get("/UserFind", (req, res) => {
  User.find()
    .populate("items")
    .then((user) => res.json(user));
});

router.post("/Todo", auth, (req, res, next) => {
  if (!req.body.name)
    return res.json({ message: "Please enter the name of the hobby!" });

  const TodoList = new Todo({
    name: req.body.name,
    number: req.body.number,
    message: req.body.message,
  });

  User.findById(req.user.id).then((user) => {
    TodoList.save()

      .then((todos) => {
        user.items.push(todos);
        user.save();
        res.json({ message: "Successfully added your hobby" });
      })
      .catch((err) => res.json({ message: "Couldn't add a hobby" }));
  });
});

router.get("/Todo", auth, (req, res, next) => {
  User.findById(req.user.id)
    .populate("items")
    .then((todo) => res.json(todo.items));
});

module.exports = router;
