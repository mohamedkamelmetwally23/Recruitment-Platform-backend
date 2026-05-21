const express = require("express");

const {
  register,
  login,
  getMe,
  updateMe,
} = require("../controllers/authController");

const validate = require("../middlewares/validate");

const {
  registerSchema,
  loginSchema,
  updateMeSchema,
} = require("../validations/authValidation");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", validate(registerSchema), register);

router.post("/login", validate(loginSchema), login);

router
  .route("/me")
  .get(protect, getMe)
  .post(protect, validate(updateMeSchema), updateMe)
  .put(protect, validate(updateMeSchema), updateMe)
  .patch(protect, validate(updateMeSchema), updateMe);

module.exports = router;
