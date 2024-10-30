const express = require("express");
const { sendOtp, verifyOtp,sendLoginOtp } = require("../../controllers/otp-controller");

const router = express.Router();
router.post("/send-otp", sendOtp);
router.post("/send-login-otp", sendLoginOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;
