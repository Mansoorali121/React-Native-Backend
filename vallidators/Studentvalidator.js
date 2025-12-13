// // Adding Express Validator Library
// const { body, validationResult, param } = require("express-validator");

// const createStudentValidation = [
//   body("StudentName")
//     .notEmpty()
//     .withMessage("Student Name is Required")
//     // .isLength({ min: 5, max: 12 })
//     .withMessage("Class should be between to 12 "),
//   body("Age")
//     .notEmpty()
//     .withMessage("Student Age is required")
//     // .isInt({ min: 18, max: 30 })
//     .withMessage("Student Age must be between 18 and 30"),

//   body("Class")
//     .notEmpty()
//     .withMessage("Class can not be Empty ")
//     // .isLength({ min: 5, max: 12 })
//     .withMessage("Class should be between to 12 "),
//   body("Image").notEmpty().isURL().withMessage("Image Must be a valid URL"),
// ];

// const StudentUpdatevalidation = [
//   param("id").isMongoId("").withMessage("Invalid Book Id"),

//   body("StudentName")
//     .optional()
//     .withMessage("Student Name is Optional While updation")
//     .isLength({ min: 5, max: 15 })
//     .withMessage("Class should be between 5 to 12 "),
// ];

// const handlevalidationErrors = (req,res,next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ error: errors.array() });
//   }
//   next()
// };
// module.exports = {
//     createStudentValidation,
//     StudentUpdatevalidation,
//     handlevalidationErrors
// }

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
