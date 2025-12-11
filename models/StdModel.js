const mongoose = require("mongoose");


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

module.exports = mongoose.model("StdNames", StudentsNames);