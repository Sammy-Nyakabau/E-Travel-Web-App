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
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  shippingAddress: {
    address: { type: String, required: false, default: "" },
    city: { type: String, required: false, default: "" },
    postalCode: { type: String, required: false, default: "" },
    country: { type: String, required: false, default: "" },
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
