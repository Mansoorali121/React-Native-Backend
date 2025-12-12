const express = require("express");

// Creating Router with Express
const router = express.Router();

// Importing Student Model
const StudentsModel = require("../models/StdModel");

// Adding Express Validator Library
const { body, validationResult } = require("express-validator");

// Adding Data

router.post(
  "/",
  [
    body("StudentName")
      .notEmpty()
      .withMessage("Student Name is Required")
      // .isLength({ min: 5, max: 12 })
      .withMessage("Class should be between to 12 "),
    body("Age")
      .notEmpty()
      .withMessage("Student Age is required")
      // .isInt({ min: 18, max: 30 })
      .withMessage("Student Age must be between 18 and 30"),

    body("Class")
      .notEmpty()
      .withMessage("Class Should not be empty")
      // .isLength({ min: 5, max: 12 })
      .withMessage("Class should be between to 12 "),
    body("Image").notEmpty().isURL().withMessage("Image Must be a valid URL"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }
      const newStudent = await StudentsModel.create(req.body);
      res.status(200).json(newStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Get Data
router.get("/", async (req, res) => {
  try {
    const StudentsList = await StudentsModel.find();
    res.status(200).send(StudentsList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Student By Id
router.get("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await StudentsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(400).json({ message: "Student Not Found " });
    }
    res
      .status(200)
      .json({ message: "Student Updated Successfully: ", updatedStudent });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
