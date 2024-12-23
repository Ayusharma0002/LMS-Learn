


// const express = require("express");
// const { addLiveSession } = require("../../controllers/instructor-controller/addLiveSession");
// // const { addLiveSession } = require("../../controllers/instructor/add-live-session");

// const router = express.Router();

// // router.post("/live-session", addLiveSession);  // Ensure this matches your URL
// router.post("/", addLiveSession);  // Ensure this matches your URL

// module.exports = router;



const express = require("express");
const { addLiveSession } = require("../../controllers/instructor-controller/addLiveSession");

const router = express.Router();

// Log when the router is hit
// router.post("/", (req, res, next) => {
//   console.log("POST /instructor/live-session route hit!");
//   next();  // Pass control to the next middleware (addLiveSession handler)
// });

// Define POST route to create a live session
// router.post("/", addLiveSession);  // This maps POST to /instructor/live-session
router.post("/live-session", addLiveSession);  // This maps POST to /instructor/live-session

module.exports = router;
