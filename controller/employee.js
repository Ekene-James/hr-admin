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

// desc     update single employee
//route     put /api/v1/employee/:id
//access    public
exports.updateEmployee = asyncHandler(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);
  if (!employee) {
    return next(
      new ErrorResponse(`Employee with id : ${req.params.id} not found`, 404)
    );
  }


  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: bootcamp });
});

// desc     delete single Employee
//route     delete /api/v1/employee/:id
//access    public
exports.deleteEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return next(
      new ErrorResponse(`employee with id : ${req.params.id} not found`, 404)
    );
  }

  employee.remove();

  res.status(200).json({ success: true, data: {} });
});
