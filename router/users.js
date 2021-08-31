const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getUser,
  getOneUser,
  getAllUsers,
  addNewUser,
  updateAllUserData,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

// route with username Value
router
  .route("/:userName")
  .get(getUser, getOneUser)
  .patch(getUser, getAllUsers)
  .put(getUser, updateAllUserData)
  .delete(getUser);

module.exports = router;
