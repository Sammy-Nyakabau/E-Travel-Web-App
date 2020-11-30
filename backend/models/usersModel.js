const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    default: "",
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  gender: {
    type: String,
    required: false,
    default: "",
  },
  phoneNumber: {
    type: Number,
    required: false,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
