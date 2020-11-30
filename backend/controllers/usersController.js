const { User } = require("../models/usersModel");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const passport = require("passport");

// @desc    Create new user
// @route   POST /api/users
// @access  Private
const createUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["username", "password"]));
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
};
