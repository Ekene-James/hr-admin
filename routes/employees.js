const express = require("express");


const router = express.Router({ mergeParams: true });
const {
  
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
 
} = require("../controller/employee");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protect, createEmployee);
router
  .route("/")
  .get(protect,getEmployee)
router
  .route("/employee/:id")
  .put(protect,updateEmployee)
  .delete(protect,deleteEmployee)
  
module.exports = router;
