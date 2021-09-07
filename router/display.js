const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMdd = require("../middelware/");

// Get one user
// Url   http://localhost:5000/display/:username

router.route("/:username").get(userMdd.getUser, userController.displayOneUser);

module.exports = router;
