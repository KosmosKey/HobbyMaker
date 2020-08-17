const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
  badItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bad" }],
  goodItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Good" }],
});

module.exports = mongoose.model("User", User);
