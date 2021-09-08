const UserModel = require("../model/userModel");
const userMdd = {};

// Get one user by his userName
userMdd.getUser = async (req, res, next) => {
  console.log(req.params);
  const userByName = await UserModel.findOne({ userName: req.params.username });
  try {
    // console.log(userByName);
    if (!userByName) {
      return res.status(404).json({ message: "Sorry, User not found." });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.user = userByName;
  next();
};

module.exports = userMdd;
