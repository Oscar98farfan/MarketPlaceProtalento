const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  address: String,
  phone_number: Number,
  birthdate: Date,
  password: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
