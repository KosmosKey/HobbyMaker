const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const badHobby = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bad", badHobby);
