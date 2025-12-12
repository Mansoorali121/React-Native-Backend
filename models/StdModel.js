const mongoose = require("mongoose");

// Creatinng Database

const StudentsNames = mongoose.Schema({
  StudentName: {
    type: String,
  },
  Age: {},
  Class: {
    type: [Number, "Class Can not be Empty"],
  },
  Grade: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  Image: {
    type: String,
    default: "",
    validate: {
      validator: function (v) {
        if (!v) return true;
        return /^https?:\/\/.+/.test(v);
      },
      message: "Image Must be a Valid URL: ",
    },
  },
});

StudentsNames.virtual("id").get(function () {
  return this._id.toHexString();
});
StudentsNames.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("StdNames", StudentsNames);
