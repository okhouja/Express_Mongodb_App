const UserData = require("../model/usersModel");
const express = require("express");

// Add new user
const addUser = async (req, res) => {
  const user = new UserData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
};

/*{
    "userName": "steel",
    "userPass": "123pass",
    "age": "32",
    "fbw": "48",
    "toolStack": ["Js", "Html5", "Css3", "Sass"],
    "email": "contact@steel.eu"
  } */
