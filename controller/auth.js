const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncMiddleware");


exports.register = asyncHandler(async (req, res, next) => {
  console.log('in register')
  const {  email, password } = req.body;

  const user = await User.create({  email, password });
  sendTokenResponse(user, 200, res);
});

// desc     login
//route     post /api/v1/auth/login
//access    public
exports.login = asyncHandler(async (req, res, next) => {
  const { password, email } = req.body;
  if (!password || !email) {
    return next(
      new ErrorResponse("please provide your email and password", 400)
    );
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("invalid email or password", 401));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("invalid email or password", 401));
  }

  sendTokenResponse(user, 200, res);
});

//get token from model, sign and send token via response and cookie
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      token
    });
};

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorResponse("User not found", 401));
  }
  res.status(200).json({ success: true, data: user });
});








// desc     logout user
//route     get /api/v1/auth/logout
//access    private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, data: {} });
});
