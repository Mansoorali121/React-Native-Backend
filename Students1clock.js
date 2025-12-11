// // app.use(express.json());
// // //// Books Schema

const express = require("express");

const app = express();

require("dotenv").config();

const mongoose = require("mongoose");

const port = 3000;

// JSON Body Parser
app.use(express.json());

// Creatinng Database

const StudentsNames = mongoose.Schema({
  StudentName: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Class: {
    type: Number,
    required: true,
  },
});

StudentsModel = mongoose.model("StdNames", StudentsNames);

app.listen(port, () => {
  console.log("App is Listing on Port 3000");
});

// Adding Data

app.post("/StdData", async (req, res) => {
  try {
    const newStudent = await StudentsModel.create(req.body);
    res.status(200).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Data
app.get("/StdData", async (req, res) => {
  try {
    const StudentsList = await StudentsModel.find();
    res.status(200).send(StudentsList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Student By Id
app.get("/StdData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const studentgetbyid = await StudentsModel.findById(id);
    if (!studentgetbyid) {
      res.status(400).json({ message: "Student not Found" });
    }
    res.status(200).json(studentgetbyid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete By id
app.delete("/StdData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await StudentsModel.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res.status(400).json({ message: "Student Not Found " });
    }
    res.status(200).json({ message: "Student Deleted Successfully: " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/// Update Students Data
app.put("/StdData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await StudentsModel.findByIdAndUpdate(id, req.body,{new:true});
    if (!updatedStudent) {
      return res.status(400).json({ message: "Student Not Found " });
    }
    res.status(200).json({ message: "Student Updated Successfully: " , updatedStudent});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const databaseconnection = process.env.CONNECTION_STRING;

mongoose
  .connect(databaseconnection)
  .then(() => console.log("MongoDB Database Connected Successfully:  "))
  .catch((error) => console.log(error));
