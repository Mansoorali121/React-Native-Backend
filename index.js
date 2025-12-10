

// // app.use(express.json());
// // //// Books Schema






const express = require("express")

const app = express()

require("dotenv").config()

const mongoose = require("mongoose")

const port = 3000

// JSON Body Parser 
app.use(express.json())

// Creatinng Database



const StudentsNames = mongoose.Schema({
  StudentName:{
    type:String,
    required:true
  },
  Age:{
    type:Number,
    required:true
  },
  Class:{
    type:Number,
    required:true
  }
})

StudentsModel = mongoose.model("StdNames",StudentsNames)


app.listen(port,()=>{
  console.log("App is Listing on Port 3000")
})



// Adding Data

app.post("/StdData",async(req,res)=>{
   const newStudent = await  StudentsModel.create(req.body)
   res.status(200).json(newStudent)
})

// Get Data
app.get("/StdData",async(req,res)=>{
  const StudentsList = await StudentsModel.find()
  res.status(200).send(StudentsList);
})

const databaseconnection = process.env.CONNECTION_STRING

mongoose.connect(databaseconnection)
.then(()=>console.log("MongoDB Database Connected Successfully:  "))
.catch((error)=>
console.log(error))
