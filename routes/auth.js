const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  logout
} = require("../controller/auth");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.put("/me", protect, getMe);
module.exports = router;
