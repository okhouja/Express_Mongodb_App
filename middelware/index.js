const UserModel = require("../model/userModel");
const userMdd = {};

// Get one user by his userName
userMdd.getUser = async (req, res, next) => {
  let user;
  try {
    user = await UserModel.findOne({ userName: req.params.userName });
    console.log(user);
    if (user == null) {
      return res.status(404).json({ message: "Sorry, User not found." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};

module.exports = userMdd;
