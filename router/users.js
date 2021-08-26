const express = require("express");
const router = express.Router();
const UserData = require("../model/usersModel");
const { getAllUsers, addNewUser } = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

module.exports = router;
