// console.log("Hello World")
const express = require("express")

const app = express()

const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World for Backend Changed")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})


/// 
app.get("/home",(req,res)=>{
    res.send("Home Page")
})

app.listen(port,()=>{
    console.log(`Server is running on: ${port}`)
})