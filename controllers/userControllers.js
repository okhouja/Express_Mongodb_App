const UserData = require("../model/userModel");
const userController = {};

// Get one user
userController.getOneUser = async (req, res) => {
  res.status(200).json(res.user);
};

// View All Users
userController.getAllUsers = async (req, res) => {
  try {
    const users = await UserData.find();
    // console.log(users);
    res.status(200).json(
      users.map((user) => {
        return {
          UserName: user.userName,
          userPassword: user.password,
          Age: user.age,
          fbw: user.fbw,
          toolStack: user.toolStack,
          email: user.email,
          // request: {
          //   UserName: `${user.userName}`,
          //   type: "GET",
          //   url: `http://localhost:5000/users/${user.userName}`,
          // },
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new user
userController.addNewUser = async (req, res) => {
  const user = new UserData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    console.log(newUser);
    // 201 for successful Created
    res.status(201).json(newUser);
  } catch (err) {
    // 400 for unauthorized or bad request
    res.status(400).json({ message: err.message });
  }
};

// Update one User
userController.updateAllUserData = async (req, res) => {
  try {
    await UserData.updateOne(
      { userName: req.params.userName },
      {
        $set: {
          userName: req.body.userName,
          userPass: req.body.userPass,
          age: req.body.age,
          fbw: req.body.fbw,
          toolStack: req.body.toolStack,
          email: req.body.email,
        },
        $currentDate: { userAddedDate: Date.now },
      }
    );
    req.status(200).json({ message: "user updated Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Patch one User

module.exports = userController;

/*{
    "userName": "steel",
    "userPass": "123pass",
    "age": "32",
    "fbw": "48",
    "toolStack": ["Js", "Html5", "Css3", "Sass"],
    "email": "contact@steel.eu"
  } */
