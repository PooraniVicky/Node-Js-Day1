// const { error, log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
// const MONGODB = process.env.MONGODB;

app.use(cors());

app.use(bodyParser.json());

app.use("/apiUser", userRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Conection error", error.message);
  });
// app.get("/app", (req, res)=>{
//     res.json(displayName("Poorani", "Vignesh"));
// })
// const displayName = (firstName, lastName)=>{
//     return`Hey, ${firstName}, ${lastName}!!!`;
// }