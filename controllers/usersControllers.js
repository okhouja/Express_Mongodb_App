const UsersData = require("../model/usersModel");
const express = require("express");

// View All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await UsersData.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new user
const addNewUser = async (req, res) => {
  const user = new UsersData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    // 201 for successful Created
    res.status(201).json(newUser);
  } catch (err) {
    // 400 for unauthorized or bad request
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addNewUser, getAllUsers };
/*{
    "userName": "steel",
    "userPass": "123pass",
    "age": "32",
    "fbw": "48",
    "toolStack": ["Js", "Html5", "Css3", "Sass"],
    "email": "contact@steel.eu"
  } */
