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
  Grade:{
    type:String,
    required:true
  }
});

StudentsNames.virtual("id").get(function () {
    return this._id.toHexString()
})
StudentsNames.set("toJSON",{
    virtuals:true,
})
module.exports = mongoose.model("StdNames", StudentsNames);