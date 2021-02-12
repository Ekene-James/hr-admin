const express = require("express");


const router = express.Router({ mergeParams: true });
const {
  
  getEmployee,
  createEmployee,
 
} = require("../controller/employee");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protect, createEmployee);
router
  .route("/")
  .get(protect,getEmployee)
  
module.exports = router;
