const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "You need to enter a username"],
  },
  userPass: {
    type: String,
    trim: true,
    required: [true, "You need to enter a password"],
  },
  age: {
    type: Number,
    trim: true,
    required: [true, "You need to enter your age as Number"],
  },
  fbw: {
    type: Number,
    trim: true,
    required: [true, "You need to enter your Class Nubmer"],
  },
  toolStack: {
    type: Array,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please, Enter your Email Address"],
  },
  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("userDataCollection", userDataSchema);
/*{
    "userName": "steel",
    "userPass": "123pass",
    "age": "32",
    "fbw": "48",
    "toolStack": ["Js", "Html5", "Css3", "Sass"],
    "email": "contact@steel.eu"
  } */
