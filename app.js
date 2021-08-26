const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());

// mongoDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
