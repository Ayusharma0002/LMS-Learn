// const Course = require("../../models/Course");
// const addNewCourse = async (req, res) => {
//   try {
//     const courseData = req.body;
//     const newlyCreatedCourse = new Course(courseData);
//     const saveCourse = await newlyCreatedCourse.save();

//     if (saveCourse) {
//       res.status(201).json({
//         success: true,
//         message: "Course saved successfully",
//         data: saveCourse,
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured addNewCourse!",
//     });
//   }
// };

// const getAllCourses = async (req, res) => {
//   try {
//     const coursesList = await Course.find({});

//     res.status(200).json({
//       success: true,
//       data: coursesList,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured getAllCourses!",
//     });
//   }
// };

// const getCourseDetailsByID = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const courseDetails = await Course.findById(id);

//     if (!courseDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found getCourseDetailsByID!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: courseDetails,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const updateCourseByID = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedCourseData = req.body;

//     const updatedCourse = await Course.findByIdAndUpdate(
//       id,
//       updatedCourseData,
//       { new: true }
//     );

//     if (!updatedCourse) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found updateCourseByID!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course updated successfully updateCourseByID",
//       data: updatedCourse,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured updateCourseByID!",
//     });
//   }
// };

// module.exports = {
//   addNewCourse,
//   getAllCourses,
//   updateCourseByID,
//   getCourseDetailsByID,
// };

const Course = require("../../models/Course");
const { addLiveSession } = require('./addLiveSession'); // Import the live session function
// const addNewCourse = async (req, res) => {
//   try {
//     const { ...courseData } = req.body;

//     console.log("Course Creation Data : ",req.body);
    

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

//     // Based on content type, add either a lecture or live session
//     if (courseData.curriculum.length > 0) {
//       const lecture = {
//         title: courseData.title,
//         videoUrl: courseData.videoUrl,
//         public_id: courseData.public_id,
//         pdfUrl: courseData.pdfUrl,
//         freePreview: courseData.freePreview,
//       };
//       newCourse.curriculum.push(lecture);
//     } else if (courseData.liveSession.length > 0 ) {
//       // Use the addLiveSession function to handle live session creation
//       const liveSession = await addLiveSession(req); // Passing the request and response objects
//       console.log("live Session Data Backend : ",liveSession);
      
//       newCourse.liveSession.push(liveSession); // Adding the live session data to the course
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

    console.log("Course Creation Data : ", req.body);
    
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
      courseData.curriculum.forEach((lecture) => {
        newCourse.curriculum.push({
          title: lecture.title,
          videoUrl: lecture.videoUrl,
          public_id: lecture.public_id,
          pdfUrl: lecture.pdfUrl,
          freePreview: lecture.freePreview,
        });
      });
    }

    // Check if there are live sessions to add
    if (courseData.liveSession && courseData.liveSession.length > 0) {
      for (let session of courseData.liveSession) {
        const liveSession = await addLiveSession(req); // Call the live session function with the session data
        console.log("Live Session Data Backend: ", liveSession);
        
        newCourse.liveSession.push(liveSession); // Add the live session to the course
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
    console.log(e);
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

const updateCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourseData = req.body;
    console.log("Update Course : ", updatedCourseData);
    
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
