const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  userName: {
    type: "string",
    trim: true,
    require: [true, "You need to enter a username"],
  },
  userPass: {
    type: "string",
    trim: true,
    require: [true, "You need to enter a password"],
  },
  age: {
    type: Integer,
    trim: true,
    require: [true, "You need to enter your age as Interger"],
  },
  fbw: {
    type: Integer,
    trim: true,
    require: [true, "You need to enter your Class Nubmer"],
  },
  toolStack: {
    type: String,
    trim: true,
    require: [true, "You need to enter"],
  },
  email: {
    type: String,
    trim: true,
    require: [true, "Please, Enter your Email Address"],
  },
  userAddedDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserData", userDataSchema);
/*{
    "userName": "steel",
    "userPass": "123pass",
    "age": "32",
    "fbw": "48",
    "toolStack": ["Js", "Html5", "Css3", "Sass"],
    "email": "contact@steel.eu"
  } */
