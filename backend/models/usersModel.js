const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 50,
    unique: false,
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  facebookId: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
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
