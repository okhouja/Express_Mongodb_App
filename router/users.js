const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getUser,
  getAllUsers,
  addNewUser,
  updateAllUserData,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

// route with username Value
router
  .route("/:username")
  .get(getUser, getAllUsers)
  .patch(getUser, getAllUsers)
  .put(getUser, getAllUsers)
  .delete(getUser);

module.exports = router;
