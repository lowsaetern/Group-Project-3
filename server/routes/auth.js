const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // create new user
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.send();
  } catch (err) {
    if (err) throw err;
  }
});
router.get("/login", async (req, res) => {
  try {
    console.log("hello");
  } catch (err) {
    if (err) throw err;
  }
});
module.exports = router;
