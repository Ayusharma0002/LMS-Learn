const Course = require("../../models/Course");
const { addLiveSession } = require('./addLiveSession'); 

// const addNewCourse = async (req, res) => {
//   try {
//     const { ...courseData } = req.body;

//     console.log("Course Creation Data : ", req.body);
    
//     // Create a new course object with the data from the request body
//     const newCourse = new Course({
//       instructorId: courseData.instructorId,
//       instructorName: courseData.instructorName,
//       date: courseData.date,
//       title: courseData.title,
//       category: courseData.category,
//       level: courseData.level,
//       primaryLanguage: courseData.primaryLanguage,
//       subtitle: courseData.subtitle,
//       description: courseData.description,
//       image: courseData.image,
//       welcomeMessage: courseData.welcomeMessage,
//       pricing: courseData.pricing,
//       objectives: courseData.objectives,
//       isPublised: courseData.isPublised,
//     });

//     // Check if there are curriculum items (lectures) to add
//     if (courseData.curriculum && courseData.curriculum.length > 0) {
//       courseData.curriculum.forEach((lecture) => {
//         newCourse.curriculum.push({
//           title: lecture.title,
//           videoUrl: lecture.videoUrl,
//           public_id: lecture.public_id,
//           pdfUrl: lecture.pdfUrl,
//           freePreview: lecture.freePreview,
//         });
//       });
//     }

//     // Check if there are live sessions to add
//     if (courseData.liveSession && courseData.liveSession.length > 0) {
//       for (let session of courseData.liveSession) {
//         const liveSession = await addLiveSession(req); // Call the live session function with the session data
//         console.log("Live Session Data Backend: ", liveSession);
        
//         newCourse.liveSession.push(liveSession); // Add the live session to the course
//       }
//     }

//     // Save the course data
//     const savedCourse = await newCourse.save();

//     res.status(201).json({
//       success: true,
//       message: "Course created successfully",
//       data: savedCourse,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred while creating the course!",
//     });
//   }
// };
const addNewCourse = async (req, res) => {
  try {
    const { ...courseData } = req.body;

    console.log("Course Creation Data: ", req.body);

    // Create a new course object with the data from the request body
    const newCourse = new Course({
      instructorId: courseData.instructorId,
      instructorName: courseData.instructorName,
      date: courseData.date,
      title: courseData.title,
      category: courseData.category,
      level: courseData.level,
      primaryLanguage: courseData.primaryLanguage,
      subtitle: courseData.subtitle,
      description: courseData.description,
      image: courseData.image,
      welcomeMessage: courseData.welcomeMessage,
      pricing: courseData.pricing,
      objectives: courseData.objectives,
      isPublised: courseData.isPublised,
    });

    // Check if there are curriculum items (lectures) to add
    if (courseData.curriculum && courseData.curriculum.length > 0) {
      for (let lecture of courseData.curriculum) {
        const lectureData = {
          title: lecture.title,
          videoUrl: lecture.videoUrl,
          public_id: lecture.public_id,
          pdfUrl: lecture.pdfUrl,
          freePreview: lecture.freePreview,
        };

        // If the lecture includes a live session, add it
        console.log("Live SS Data : ", lecture.liveSession);
        if (lecture.liveSession && lecture.liveSession.link == undefined) {
          
          const liveSession = await addLiveSession({
            body: lecture, // Passing live session data to the existing addLiveSession logic
          });
          console.log("Live Session Data for Lecture: ", liveSession);

          // Attach the live session to the lecture
          lectureData.liveSession = liveSession;
        }

        newCourse.curriculum.push(lectureData); // Add the lecture to the course curriculum
      }
    }

    // Save the course data
    const savedCourse = await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: savedCourse,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while creating the course!",
    });
  }
};

module.exports = { addNewCourse };
const getAllCourses = async (req, res) => {
  try {
    const coursesList = await Course.find({});
    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while fetching all courses!",
    });
  }
};

const getCourseDetailsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const courseDetails = await Course.findById(id);

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: courseDetails,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while fetching course details!",
    });
  }
};

// const updateCourseByID = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedCourseData = req.body;
//     console.log("Update Course : ", updatedCourseData);
    
//     const updatedCourse = await Course.findByIdAndUpdate(id, updatedCourseData, { new: true });

//     if (!updatedCourse) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course updated successfully",
//       data: updatedCourse,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred while updating the course!",
//     });
//   }
// };
const updateCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourseData = req.body;

    console.log("Update Course Data: ", updatedCourseData);

    // Check if the course contains liveSession data, and process it if present
    if (updatedCourseData.curriculum && updatedCourseData.curriculum.length > 0) {
      for (let lecture of updatedCourseData.curriculum) {
        if (lecture.liveSession && lecture.liveSession.link == undefined) {
          // Process the live session data by passing the lecture to addLiveSession
          const liveSession = await addLiveSession({
            body: lecture, // Passing the lecture with liveSession data
          });
          console.log("Processed Live Session Data: ", liveSession);

          // Attach the live session to the lecture
          lecture.liveSession = liveSession;
        }
      }
    }

    // Perform the course update with the modified curriculum
    const updatedCourse = await Course.findByIdAndUpdate(id, updatedCourseData, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while updating the course!",
    });
  }
};

module.exports = {
  addNewCourse,
  getAllCourses,
  updateCourseByID,
  getCourseDetailsByID,
};
