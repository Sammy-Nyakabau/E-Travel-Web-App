const passport = require("passport");
const express = require("express");
const router = express.Router();

const {
  createUser,
  logOut,
  loginUser,
  updateUser,
  googleLogin,
  getLoggedInUser
} = require("../controllers/usersController");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get("/success", getLoggedInUser)
router.post("/register", createUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  googleLogin
);
router.get("/logout", logOut);
router.put("/:id", updateUser);

module.exports = router;
