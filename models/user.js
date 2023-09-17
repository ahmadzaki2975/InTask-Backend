const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    trim: true,
    maxlength: [50, "Email cannot be more than 50 characters"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password cannot be less than 6 characters"],
  }
});

module.exports = mongoose.model("User", UserSchema);