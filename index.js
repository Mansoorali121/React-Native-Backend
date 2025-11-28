const express = require("express")

const mongoose = require("mongoose")
const app = express()

require("dotenv").config()

const port = 3000

app.get("/Home",(req,res)=>{
    res.send("App Listing on Home Page")
})

app.get("/projects",(req,res)=>{
    res.send("App Listing on Projects Page")
})

app.listen(port,()=>{
    console.log("App listing on Port 3000")
})


const connnectionString = process.env.CONNECTION_STRING

mongoose.connect(connnectionString)
.then(()=>console.log("Database Connnected"))
.catch((error)=>console.log(error))