//// Localization ////


const { body, validationResult, param } = require("express-validator");

const createStudentValidation = [
  body("StudentName").notEmpty().withMessage("Student Name is Required"),
  body("Age").notEmpty().withMessage("Student Age is required"),
  body("Class").notEmpty().withMessage("Class can not be Empty"),
  body("Image").notEmpty().isURL().withMessage("Image must be a valid URL"),
];

const StudentUpdatevalidation = [
  param("id").isMongoId().withMessage("Invalid Student Id"),
];

const handlevalidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  createStudentValidation,
  StudentUpdatevalidation,
  handlevalidationErrors,
};
