// console.log("hello This is WOrking ");

// const express = require("express");

// require("dotenv").config();

// const mongoose = require("mongoose");
// const app = express();

// const port = 3000;

// // app.use(express.json());
// // //// Books Schema



// const databaseconnection = process.env.CONNECTION_STRING;

// mongoose
//   .connect(databaseconnection)
//   .then(() => console.log("Mongo Db Database Connected Successfully: "))
//   .catch((error) => console.log(error));

// app.listen(port, () => {
//   console.log(`App is Listing on Provided Port ${port}`);
// });


const express = require("express")

const app = express()

require("dotenv").config()

const mongoose = require("mongoose")

const port = 3000


app.listen(port,()=>{
  console.log("App is Listing on Port 3000")
})


app.use("/home",(req,res)=>{
  res.send("Home Page is Listing")
})


const databaseconnection = process.env.CONNECTION_STRING

mongoose.connect(databaseconnection)
.then(()=>console.log("MongoDB Database Connected Successfully:  "))
.catch((error)=>
console.log(error))
