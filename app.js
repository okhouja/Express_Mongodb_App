const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());

// mongoDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(console.log("mongoDB is Connected :)"))
  .catch((err) => {
    console.log(`There is a Problem ${err.message}`);
  });

// http://localhost:5000/users
const users = require("./router/users");
// app.use("/users", users);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express mongoDB App");
});

module.exports = app;
