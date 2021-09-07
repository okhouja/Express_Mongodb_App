const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMdd = require("../middelware/");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addNewUser);

// route with username Value
router
  .route("/:userName")
  .get(userMdd.getUser, userController.getOneUser)
  .patch(userMdd.getUser, userController.getAllUsers)
  .put(userMdd.getUser, userController.updateAllUserData);

module.exports = router;
