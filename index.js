
console.log("hello This is WOrking ")

const express = require("express")

require("dotenv").config()

const mongoose = require("mongoose")
const app = express()


const port = 3000

app.use(express.json())
//// Books Schema

const booKSchema =  new mongoose.Schema({})

const BookModel = mongoose.model("Book", booKSchema)


// Book Create Route

app.post("/books",async(req,res)=>{
    const newbook = await BookModel.create(req.body)
    res.status(201).json(newbook)
})



const databaseconnection = process.env.CONNECTION_STRING


mongoose.connect(databaseconnection)
.then(()=>console.log("Database Connected Successfully"))
.catch((error)=>console.log(error))

app.listen(port,()=>{
    console.log("App is listing on Port 3000")
})