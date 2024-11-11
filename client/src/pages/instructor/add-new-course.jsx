// function AddNewCoursePage(){
//     return (
//         <div>
//             AddNewCoursePage
//         </div>
//     );
// }

// export default AddNewCoursePage;

// import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
// import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
// import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   courseCurriculumInitialFormData,
//   courseLandingInitialFormData,
// } from "@/config";
// import { AuthContext } from "@/context/auth-context";
// import { InstructorContext } from "@/context/instructor-context";
// // import {
// //   addNewCourseService,
// //   fetchInstructorCourseDetailsService,
// //   updateCourseByIdService,
// // } from "@/services";
// import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
// import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
// import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { useContext, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function AddNewCoursePage() {
//   const {
//     courseLandingFormData,
//     courseCurriculumFormData,
// //     setCourseLandingFormData,
// //     setCourseCurriculumFormData,
// //     currentEditedCourseId,
// //     setCurrentEditedCourseId,
//   } = useContext(InstructorContext);

// //   const { auth } = useContext(AuthContext);
//   const navigate = useNavigate();
// //   const params = useParams();

// //   console.log(params);

//   function isEmpty(value) {
//     if (Array.isArray(value)) {
//       return value.length === 0;
//     }

//     return value === "" || value === null || value === undefined;
//   }

//   function validateFormData() {
//     for (const key in courseLandingFormData) {
//       if (isEmpty(courseLandingFormData[key])) {
//         return false;
//       }
//     }

//     let hasFreePreview = false;

//     for (const item of courseCurriculumFormData) {
//       if (
//         isEmpty(item.title) ||
//         isEmpty(item.videoUrl) ||
//         isEmpty(item.public_id)
//       ) {
//         return false;
//       }

//       if (item.freePreview) {
//         hasFreePreview = true; //found at least one free preview
//       }
//     }

//     return hasFreePreview;
//   }

//   async function handleCreateCourse() {
//     const courseFinalFormData = {
//       instructorId: auth?.user?._id,
//       instructorName: auth?.user?.userName,
//       date: new Date(),
//       ...courseLandingFormData,
//       students: [],
//       curriculum: courseCurriculumFormData,
//       isPublised: true,
//     };

//     const response =
//       // currentEditedCourseId !== null
//       //   ? await updateCourseByIdService(
//       //       currentEditedCourseId,
//       //       courseFinalFormData
//       //     )
//       //   :
//          await addNewCourseService(courseFinalFormData);

//     if (response?.success) {
//       setCourseLandingFormData(courseLandingInitialFormData);
//       setCourseCurriculumFormData(courseCurriculumInitialFormData);
//       navigate(-1); //to go to the previous one
//       // setCurrentEditedCourseId(null);
//     }

// //     console.log(courseFinalFormData, "courseFinalFormData");
// //   }

// //   async function fetchCurrentCourseDetails() {
// //     const response = await fetchInstructorCourseDetailsService(
// //       currentEditedCourseId
// //     );

// //     if (response?.success) {
// //       const setCourseFormData = Object.keys(
// //         courseLandingInitialFormData
// //       ).reduce((acc, key) => {
// //         acc[key] = response?.data[key] || courseLandingInitialFormData[key];

// //         return acc;
// //       }, {});

// //       console.log(setCourseFormData, response?.data, "setCourseFormData");
// //       setCourseLandingFormData(setCourseFormData);
// //       setCourseCurriculumFormData(response?.data?.curriculum);
// //     }

// //     console.log(response, "response");
// //   }

// //   useEffect(() => {
// //     if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
// //   }, [currentEditedCourseId]);

// //   useEffect(() => {
// //     if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
// //   }, [params?.courseId]);

// //   console.log(params, currentEditedCourseId, "params");

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between">
//         <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
//         <Button
//           disabled={!validateFormData()}
//           className="text-sm tracking-wider font-bold px-8"
//           onClick={handleCreateCourse}
//         >
//           SUBMIT
//         </Button>
//       </div>
//       <Card>
//         <CardContent>
//           <div className="container mx-auto p-4">
//             <Tabs defaultValue="curriculum" className="space-y-4">
//               <TabsList>
//                 <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
//                 <TabsTrigger value="course-landing-page">
//                   Course Landing Page
//                 </TabsTrigger>
//                 <TabsTrigger value="settings">Settings</TabsTrigger>
//               </TabsList>
//               <TabsContent value="curriculum">
//                 <CourseCurriculum />
//               </TabsContent>
//               <TabsContent value="course-landing-page">
//                 <CourseLanding />
//               </TabsContent>
//               <TabsContent value="settings">
//                 <CourseSettings />
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// import { InstructorContext } from "@/context/instructor-context";
// // import {
// //   addNewCourseService,
// //   fetchInstructorCourseDetailsService,
// //   updateCourseByIdService,
// // } from "@/services";
// import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
// import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
// import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { addNewCourseService } from "@/services";
// import { AuthContext } from "@/context/auth-context";
// import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";

// export default function AddNewCoursePage() {
//   const {
//     courseLandingFormData,
//     courseCurriculumFormData,
//     setCourseLandingFormData,
//     setCourseCurriculumFormData,
// //     currentEditedCourseId,
// //     setCurrentEditedCourseId,
//   } = useContext(InstructorContext);

//   // Assuming `auth` is needed, uncomment this context to get user info
//   const { auth } = useContext(AuthContext); 
//   const navigate = useNavigate();
//   // const params = useParams();

//   function isEmpty(value) {
//     if (Array.isArray(value)) {
//       return value.length === 0;
//     }
//     return value === "" || value === null || value === undefined;
//   }

//   function validateFormData() {
//     for (const key in courseLandingFormData) {
//       if (isEmpty(courseLandingFormData[key])) {
//         return false;
//       }
//     }

//     let hasFreePreview = false;

//     for (const item of courseCurriculumFormData) {
//       if (
//         isEmpty(item.title) ||
//         isEmpty(item.videoUrl) ||
//         isEmpty(item.public_id)
//       ) {
//         return false;
//       }

//       if (item.freePreview) {
//         hasFreePreview = true; //found at least one free preview
//       }
//     }

//     return hasFreePreview;
//   }

//   async function handleCreateCourse() {
//     const courseFinalFormData = {
//       instructorId: auth?.user?._id, // Ensure `auth` is uncommented and working
//       instructorName: auth?.user?.userName,
//       date: new Date(),
//       ...courseLandingFormData,
//       students: [],
//       curriculum: courseCurriculumFormData,
//       isPublised: true,
//     };

//     const response =
//       // currentEditedCourseId !== null
//       //   ? await updateCourseByIdService(
//       //       currentEditedCourseId,
//       //       courseFinalFormData
//       //     )
//       //   :
//          await addNewCourseService(courseFinalFormData);

//     if (response?.success) {
//       setCourseLandingFormData(courseLandingInitialFormData);
//       setCourseCurriculumFormData(courseCurriculumInitialFormData);
//       navigate(-1); // to go to the previous one
//       // setCurrentEditedCourseId(null); // Ensure you reset state for editing
//     }
//   }

//   // Uncomment and use this if you need to fetch existing course details (for editing)
//   // async function fetchCurrentCourseDetails() {
//   //   const response = await fetchInstructorCourseDetailsService(
//   //     currentEditedCourseId
//   //   );
//   //   if (response?.success) {
//   //     const setCourseFormData = Object.keys(
//   //       courseLandingInitialFormData
//   //     ).reduce((acc, key) => {
//   //       acc[key] = response?.data[key] || courseLandingInitialFormData[key];
//   //       return acc;
//   //     }, {});
//   //     setCourseLandingFormData(setCourseFormData);
//   //     setCourseCurriculumFormData(response?.data?.curriculum);
//   //   }
//   // }

//   // Uncomment to fetch course details when `currentEditedCourseId` changes
//   // useEffect(() => {
//   //   if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
//   // }, [currentEditedCourseId]);

//   // Ensure to handle `currentEditedCourseId` properly in `useEffect` for editing courses
//   // useEffect(() => {
//   //   if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
//   // }, [params?.courseId]);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between">
//         <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
//         <Button
//           disabled={!validateFormData()}
//           className="text-sm tracking-wider font-bold px-8"
//           onClick={handleCreateCourse}
//         >
//           SUBMIT
//         </Button>
//       </div>
//       <Card>
//         <CardContent>
//           <div className="container mx-auto p-4">
//             <Tabs defaultValue="curriculum" className="space-y-4">
//               <TabsList>
//                 <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
//                 <TabsTrigger value="course-landing-page">
//                   Course Landing Page
//                 </TabsTrigger>
//                 <TabsTrigger value="settings">Settings</TabsTrigger>
//               </TabsList>
//               <TabsContent value="curriculum">
//                 <CourseCurriculum />
//               </TabsContent>
//               <TabsContent value="course-landing-page">
//                 <CourseLanding />
//               </TabsContent>
//               <TabsContent value="settings">
//                 <CourseSettings />
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { InstructorContext } from "@/context/instructor-context";
// import {
//   addNewCourseService,
//   fetchInstructorCourseDetailsService,
//   updateCourseByIdService,
// } from "@/services";
import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addNewCourseService,fetchInstructorCourseDetailsService, updateCourseByIdService } from "@/services";
import { AuthContext } from "@/context/auth-context";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";

export default function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  // Assuming `auth` is needed, uncomment this context to get user info
  const { auth } = useContext(AuthContext); 
  const navigate = useNavigate();
  const params = useParams();

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
  }

  async function handleCreateCourse() {
    const courseFinalFormData = {
      instructorId: auth?.user?._id, // Ensure `auth` is uncommented and working
      instructorName: auth?.user?.userName,
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublised: true,
    };

    const response =
      currentEditedCourseId !== null
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        :
         await addNewCourseService(courseFinalFormData);

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1); // to go to the previous one
      setCurrentEditedCourseId(null); // Ensure you reset state for editing
    }
  }

  // Uncomment and use this if you need to fetch existing course details (for editing)
  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );
    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];
        return acc;
      }, {});
      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }
  }

  // Uncomment to fetch course details when `currentEditedCourseId` changes
  useEffect(() => {
    if (currentEditedCourseId !== null) 
      fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  // Ensure to handle `currentEditedCourseId` properly in `useEffect` for editing courses
  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        <Button
          disabled={!validateFormData()}
          className="text-sm tracking-wider font-bold px-8"
          onClick={handleCreateCourse}
        >
          SUBMIT
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList className="flex gap-4 border-b-2 border-gray-300">
                {/* Tabs with custom styling */}
                <TabsTrigger
                  value="curriculum"
                  className="p-2 text-lg font-semibold hover:bg-white focus:outline-none active-tab"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="course-landing-page"
                  className="p-2 text-lg font-semibold hover:bg-white focus:outline-none active-tab"
                >
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="p-2 text-lg font-semibold hover:bg-white focus:outline-none active-tab"
                >
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>
              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
