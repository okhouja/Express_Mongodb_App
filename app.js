const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());

// Router
// http://localhost:5000/users
const userRouter = require("./router/users");
app.use("/users", userRouter);

// http://localhost:5000/display
const displayRouter = require("./router/display");
app.use("/display", displayRouter);

// mongoDB + Monogoose
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(console.log("mongoDB is Connected :)"))
  .catch((err) => {
    console.log(`There is a Problem ${err.message}`);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome to my App :) ");
  } catch (err) {
    res.status(err.status).json(err.message);
  }
});

module.exports = app;
