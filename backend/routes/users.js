const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/users");
const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc    Get user details
// @route   GET /api/users
// @access  Private
router.get("/me",(req, res) => {
  res.send(req.user);
});

// @desc    Create new user
// @route   POST /api/users
// @access  Private
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["username", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(user);
});

// @desc    Log in User
// @route   POST /api/users
// @access  Private
router.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {
    res.send(req.user);
  }
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// @desc    Update User details
// @route   PUT /api/users
// @access  Private
router.put("/:id", async (req, res) => {
  const { username, email, shippingAddress } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      email,
      shippingAddress,
    },
    {
      new: true,
    }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
});

module.exports = router;
