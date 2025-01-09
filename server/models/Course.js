// const mongoose = require("mongoose");

// const LectureSchema = new mongoose.Schema({
//   title: String,
//   videoUrl: String,
//   public_id: String,
//   pdfUrl: String,  //ye 5-12-2024 ko add kiya pdf kai liye
//   freePreview: Boolean,
// });
// const LiveSessionSchema = new mongoose.Schema({
//   sessionId: String,
//   title: String,
//   objective: String,
//   instructorName: String,
//   startDateTime: Date,
//   endDateTime: Date,
//   duration: Number,
//   platform: String,
//   link: String,
//   description: String,
// });
// const CourseSchema = new mongoose.Schema({
//   instructorId: String,
//   instructorName: String,
//   date: Date,
//   title: String,
//   category: String,
//   level: String,
//   primaryLanguage: String,
//   subtitle: String,
//   description: String,
//   image: String,
//   welcomeMessage: String,
//   pricing: Number,
//   objectives: String,
//   students: [
//     {
//       studentId: String,
//       studentName: String,
//       studentEmail: String,
//       paidAmount: String,
//     },
//   ],
//   curriculum: [LectureSchema],
//   liveSession: [LiveSessionSchema],
//   isPublised: Boolean,
// });

// module.exports = mongoose.model("Course", CourseSchema);
const mongoose = require("mongoose");

const LiveSessionSchema = new mongoose.Schema({
  sessionId: String,
  title: String,
  objective: String,
  instructorName: String,
  startDateTime: Date,
  endDateTime: Date,
  duration: Number,
  platform: String,
  link: String,
  description: String,
});

const LectureSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  public_id: String,
  pdfUrl: String, // Added on 5-12-2024 for PDF support
  freePreview: Boolean,
  liveSession: { type: LiveSessionSchema, default: null }, // Optional live session for each lecture
});

const CourseSchema = new mongoose.Schema({
  instructorId: String,
  instructorName: String,
  date: Date,
  title: String,
  category: String,
  level: String,
  primaryLanguage: String,
  subtitle: String,
  description: String,
  image: String,
  welcomeMessage: String,
  pricing: Number,
  objectives: String,
  students: [
    {
      studentId: String,
      studentName: String,
      studentEmail: String,
      paidAmount: String,
    },
  ],
  curriculum: [LectureSchema],
  isPublised: Boolean,
});

module.exports = mongoose.model("Course", CourseSchema);
