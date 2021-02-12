const Employee = require("../models/Employee");

const asyncHandler = require("../middleware/asyncMiddleware");
const ErrorResponse = require("../utils/errorResponse");



// desc     get all employees
//route     get /api/employee/:id
//access    public
exports.getEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.find()
  if (!employee) {
    return next(
      new ErrorResponse(`No employee with the id : ${req.params.id} found `, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: employee
  });
});

// desc     create a employee 

//access    private
exports.createEmployee = asyncHandler(async (req, res, next) => {
  
  req.body.user = req.user.id;

 

  const employee = await Employee.create(req.body);

  res.status(200).json({
    success: true,
    data: employee
  });
});


