// const { error, log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
// require("dotenv").config();
const app = express();
const PORT = 3000;
// const MONGODB = process.env.MONGODB;

app.use(cors());

app.use(bodyParser.json());

app.use("/apiUser", userRoutes);

mongoose
  .connect('mongodb+srv://poorani:poorani@poorani.vdwsoet.mongodb.net/user-crud')
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error", error.message);
  });
