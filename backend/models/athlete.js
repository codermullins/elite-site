const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  parentName: String,
  athleteName: String,
  email: { type: String, required: true },
  athleteAge: Number,
  athleteExp: String,
});

module.exports = mongoose.model("Athlete", athleteSchema);
