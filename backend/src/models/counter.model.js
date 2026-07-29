const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  sequence: {
    type: Number,
    default: 0,
  },
});
const counterModel = mongoose.model("Counter", counterSchema);
module.exports = counterModel;
