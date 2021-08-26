const express = require("express");
const router = require("router");
const UserData = require("../model/usersModel");
const { getAllUsers, addNewUser } = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

module.exports = router;
