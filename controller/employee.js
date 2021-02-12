const Employee = require("../models/Employee");

const asyncHandler = require("../middleware/asyncMiddleware");
const ErrorResponse = require("../utils/errorResponse");

//this controler will take care of two routes
// desc     get all courses
//route     get /api/v1/courses
// desc     get course for a single bootcamp
//route     get /api/v1/bootcamps/:bootcampId/courses
//access    public
exports.getCourses = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const course = await Employee.find({ bootcamp: req.params.bootcampId });
    return res.status(200).json({
      success: true,
      count: course.length,
      data: course
    });
  } else {
    res.status(200).json(res);
  }
});

// desc     get a single courses
//route     get /api/v1/courses/:id
//access    public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Employee.findById(req.params.id).populate({
    path: "bootcamp",
    select: "name description"
  });
  if (!course) {
    return next(
      new ErrorResponse(`No course with the id : ${req.params.id} found `, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: course
  });
});

// desc     create a course for a bootcamp
//route     post /api/v1/bootcamp/:bootcampId/courses
//access    private
exports.createCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;
  req.body.user = req.user.id;

 

  const course = await Employee.create(req.body);

  res.status(200).json({
    success: true,
    data: course
  });
});


