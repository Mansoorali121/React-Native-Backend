console.log("hello This is WOrking ");

const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");
const app = express();

const port = 3000;

app.use(express.json());
//// Books Schema

const booKSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  Counter: {
    type: Number,
    required: true,
  },
});

const BookModel = mongoose.model("Book", booKSchema);

// Book Create Route

app.post("/books", async (req, res) => {
  try {
    const newbook = await BookModel.create(req.body);
    res.status(201).json(newbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/// Book Fetch Route

app.get("/books", async (req, res) => {
  try {
    const booklist = await BookModel.find();
    res.status(200).send(booklist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch By Id
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
     if(!book){
      return res.status(404).json({message:"Book Not Found"})
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete By Id
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedbook = await BookModel.findByIdAndDelete(id);
    if(!deletedbook){
      return res.status(404).json({message:"Book Not Found"})
    }
    res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const databaseconnection = process.env.CONNECTION_STRING;

mongoose
  .connect(databaseconnection)
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("App is listing on Port 3000");
});
