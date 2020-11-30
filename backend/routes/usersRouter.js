const passport = require("passport");
const express = require("express");
const router = express.Router();

const {
  createUser,
  logOut,
  loginUser,
  updateUser,
} = require("../controllers/usersController");

router.post("/register", createUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.get("/logout", logOut);
router.put("/:id", updateUser);

module.exports = router;
