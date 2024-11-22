require("dotenv").config();

const express=require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth-routes')
const otpRoutes = require("./routes/otp-routes");
const mediaRoutes = require("./routes/instructor-routes/media-routes");
const instructorCourseRoutes = require("./routes/instructor-routes/course-routes");
const studentViewCourseRoutes = require("./routes/student-routes/course-routes");
const studentViewOrderRoutes = require("./routes/student-routes/order-routes");
const studentCoursesRoutes = require("./routes/student-routes/student-courses-routes");
const studentCourseProgressRoutes = require("./routes/student-routes/course-progress-routes");



const app=express();
const PORT=process.env.PORT || 5000; 


// app.use(
//     cors({
//       origin: process.env.CLIENT_URL,
//       methods: ["GET", "POST", "DELETE", "PUT"],
//       allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );

// const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];
const allowedOrigins = [
  process.env.CLIENT_URL, // This resolves to http://localhost:5173 if set in .env
  "http://localhost:5173",
  "http://127.0.0.1:5173" // Add this origin explicitly
];

app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true); // Allow the request
        } else {
          callback(new Error('Not allowed by CORS')); // Reject the request
        }
      },
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
  

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lmsportal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


app.use("/otp", otpRoutes); 
app.use('/auth',authRoutes);
app.use('/media',mediaRoutes);
app.use("/instructor/course", instructorCourseRoutes);
app.use("/student/course", studentViewCourseRoutes);
app.use("/student/order", studentViewOrderRoutes);
app.use("/student/courses-bought",studentCoursesRoutes);
app.use("/student/course-progress",studentCourseProgressRoutes );



app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});