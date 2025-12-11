const mongoose = require("mongoose");


// Creatinng Database

const StudentsNames = mongoose.Schema({
  StudentName: {
    type: String,
    required: [true, "Name Can not be Longer than 40 Characters"],

  },
  Age: {
    type: Number,
    required: true,
    min:[18, "Age Can not be Less then 18"],
    max:[30,"Maximum age should be 30 "]
  },
  Class: {
    type: [Number, "Class Can not be Empty"],
    required: true,
  },
  Grade:{
    type:String,
    required:true

  },
  dateCreated:{
    type:Date,
    default:Date.now
    
  }
});

StudentsNames.virtual("id").get(function () {
    return this._id.toHexString()
})
StudentsNames.set("toJSON",{
    virtuals:true,
})
module.exports = mongoose.model("StdNames", StudentsNames);