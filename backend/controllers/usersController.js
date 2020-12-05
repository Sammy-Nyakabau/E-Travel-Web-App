const { User } = require("../models/usersModel");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const passport = require("passport");

// @desc    Create new user
// @route   POST /api/users
// @access  Private
const createUser = async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).send("User already registered.");

  user = new User({ username, password });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(user);
};

// @desc    Log in User
// @route   POST /api/users
// @access  Private
const loginUser = (req, res) => {
  res.send(req.user);
};
// @desc    Log in User
// @route   POST /api/users/success
// @access  Private
const getLoggedInUser = (req, res) => {
  res.send(req.user);
};

// @desc    Get User given username
// @route   POST /api/users/:_id
// @access  Private
const getUser = async (req, res) => {
  const {_id } = req.params
  const user = await User.findOne({ _id });
  res.send(user)
};

// @desc    Log in User using Google
// @route   GET /api/users/auth/google/redirect
// @access  Private
const googleLogin = (req, res) => {
  res.redirect(process.env.CLIENT_HOME);
};

// @desc    Log in User using Facebook
// @route   GET /api/users/auth/facebook/callback
// @access  Private
const facebookLogin = (req, res) => {
  res.redirect(process.env.CLIENT_HOME);
};

const logOut = (req, res) => {
  req.logout();
  res.redirect("/");
};

// @desc    Update User details
// @route   PUT /api/users
// @access  Private
const updateUser = async (req, res) => {
  const { username, gender, email, phoneNumber, address } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      email,
      address,
      gender,
      phoneNumber,
    },
    {
      new: true,
    }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
};

module.exports = {
  createUser,
  logOut,
  loginUser,
  updateUser,
  googleLogin,
  getLoggedInUser,
  facebookLogin,
  getUser
};
