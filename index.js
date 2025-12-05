// const express = require("express")

// const mongoose = require("mongoose")
// const app = express()

// require("dotenv").config()

// const port = 3000

// app.get("/Home",(req,res)=>{
//     res.send("App Listing on Home Page")
// })

// app.get("/projects",(req,res)=>{
//     res.send("App Listing on Projects Page")
// })

// app.listen(port,()=>{
//     console.log("App listing on Port 3000")
// })


// // const connnectionString = process.env.CONNECTION_STRING
// const databaseURl = process.env.CONNECTION_STRING

// // mongoose.connect(connnectionString)
// // .then(()=>console.log("Database Connnected"))
// // .catch((error)=>console.log(error))

// mongoose.connect(databaseURl)
// .then(()=>console.log("DataBase Connected Successfully"))
// .catch((error)=>console.log(error))


console.log("hello This is WOrking ")

const express = require("express")

const app = express()


app.listen(3000,()=>{
    console.log("App is listing on Port 3000")
})


app.get("/home", (req,res)=>{
    res.send("App is listing on home Page")
})

app.get("/likes",(req,res)=>{
    res.send("App is Running on Likes Page")
})

app.get("/projects",(req,res)=>{
    res.send("Projects page is listing ")
})