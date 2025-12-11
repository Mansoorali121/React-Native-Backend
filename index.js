const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoute = require("./routes/Std.routes");

const app = express();
app.use(express.json());
app.use("/StdData", studentRoute);

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(3000,()=>{
  console.log("App is listing on Port 3000")
});
