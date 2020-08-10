const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchma = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  message: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchma);
