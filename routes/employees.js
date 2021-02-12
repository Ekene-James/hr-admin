const express = require("express");


const router = express.Router({ mergeParams: true });
const {
  
  getCourse,
  createCourse,
 
} = require("../controller/employee");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protect, createCourse);
router
  .route("/:id")
  .get(getCourse)
  
module.exports = router;
