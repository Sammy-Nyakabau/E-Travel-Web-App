const passport = require("passport");
const cookieParser = require("cookie-parser");
const logger = require("../startup/logger");
const session = require("express-session");
const authDebugger = require("debug")("app:auth");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require('../models/users');
const ObjectID = require("mongodb").ObjectID;

module.exports = function (app) {
  app.use(
    session({
      secret: "aviato",
      resave: true,
      saveUninitialized: true,
    })
  );

  app.use(cookieParser("aviato"));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({
            _id: new ObjectID(id),
        });
        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({
                username
            });
            authDebugger(`User ${username} attempted to log in.`);
            logger.info(`User ${username} attempted to log in.`);
            if (!user) {
                return done(null, false);
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false);
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);
};
