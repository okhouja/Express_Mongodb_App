const express = require("express");
const router = express.Router();
const UsersData = require("../model/usersModel");
const {
  getAllUsers,
  addNewUser,
  updateAllUserData,
} = require("../controllers/usersControllers");

router.route("/").get(getAllUsers).post(addNewUser);

// route with username Value
router
  .route("/:username")
  .get(getAllUsers)
  .patch(getAllUsers)
  .put(getAllUsers)
  .delete();

module.exports = router;
