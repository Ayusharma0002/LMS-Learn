const express = require("express");
const { addLiveSession } = require("../../controllers/instructor-controller/addLiveSession");

const router = express.Router();
router.post("/live-session", addLiveSession);  // This maps POST to /instructor/live-session

module.exports = router;
