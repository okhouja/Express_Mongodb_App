const express = require("express");
const router = express.Router();
// const userController = require("userController");
const userMdd = require("../middelware/");

// Get one user
// Url   http://localhost:5000/display/:username

router.route("/:username").get(userMdd.getUser);

module.exports = router;
