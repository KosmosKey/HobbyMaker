const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchma = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchma);
