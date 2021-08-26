const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const { getAllUsers, addNewUser } = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

module.exports = router;
