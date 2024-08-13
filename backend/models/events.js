const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  site: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventsSchema);
