

// // app.use(express.json());
// // //// Books Schema






const express = require("express")

const app = express()

require("dotenv").config()

const mongoose = require("mongoose")

const port = 3000

// JSON Body Parser 
app.use(express.json)

// Creatinng Database



const StudentsNames = mongoose.Schema({})

StudentsModel = mongoose.model("StdNames",StudentsNames)


app.listen(port,()=>{
  console.log("App is Listing on Port 3000")
})


// app.use("/home",(req,res)=>{
//   res.send("Home Page is Listing")
// })


const databaseconnection = process.env.CONNECTION_STRING

mongoose.connect(databaseconnection)
.then(()=>console.log("MongoDB Database Connected Successfully:  "))
.catch((error)=>
console.log(error))
