// const { error, log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use("/apiUser", userRoutes);

mongoose.connect("mongodb+srv://poorani:poorani@poorani.vdwsoet.mongodb.net/user-crud")
.then(()=>{
    console.log("connected to mongoDB");
    app.listen(PORT, () =>{
        console.log(`Server is running on the port ${PORT}`);
    });
})
.catch((error) => {
console.log("Connection error", error.message);
});
app.get("/app", (req, res)=>{
    res.json(displayName("Poorani", "Vignesh"));
})
const displayName = (firstName, lastName)=>{
    return`Hey, ${firstName}, ${lastName}!!!`;
}