// import {
//     courseCurriculumInitialFormData,
//     courseLandingInitialFormData,
//   } from "@/config";
 
// import { createContext, useState } from "react";
  
//   export const InstructorContext = createContext(null);
  
//   export default function InstructorProvider({ children }) {
//     const [courseLandingFormData, setCourseLandingFormData] = useState(
//       courseLandingInitialFormData
//     );
//     const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
//       courseCurriculumInitialFormData
//     );
//     //ye instructor context hai means ye use kiya taki hum kisi bhi componetns mai in states ko use kar sake
//     const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
//     const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] =
//       useState(0);
//     const [instructorCoursesList, setInstructorCoursesList] = useState([]);
//     const [currentEditedCourseId, setCurrentEditedCourseId] = useState(null);
  
//     return (
//       <InstructorContext.Provider
//         value={{
//           courseLandingFormData,
//           setCourseLandingFormData,
//           courseCurriculumFormData,
//           setCourseCurriculumFormData,
//           mediaUploadProgress,
//           setMediaUploadProgress,
//           mediaUploadProgressPercentage,
//           setMediaUploadProgressPercentage,
//           instructorCoursesList,
//           setInstructorCoursesList,
//           currentEditedCourseId,
//           setCurrentEditedCourseId,
//         }}
//       >
//         {children}
//       </InstructorContext.Provider>
//     );
//   }



import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
      courseLandingInitialFormData
  );
  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
      courseCurriculumInitialFormData
  );
  const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
  const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] =
      useState(0);
  const [instructorCoursesList, setInstructorCoursesList] = useState([]);
  const [currentEditedCourseId, setCurrentEditedCourseId] = useState(null);
  // PDF upload state
  const [pdfUploadProgress, setPdfUploadProgress] = useState(false);
  const [pdfUploadProgressPercentage, setPdfUploadProgressPercentage] = useState(0);

  return (
      <InstructorContext.Provider
          value={{
              courseLandingFormData,
              setCourseLandingFormData,
              courseCurriculumFormData,
              setCourseCurriculumFormData,
              mediaUploadProgress,
              setMediaUploadProgress,
              mediaUploadProgressPercentage,
              setMediaUploadProgressPercentage,
              instructorCoursesList,
              setInstructorCoursesList,
              currentEditedCourseId,
              setCurrentEditedCourseId,
              // PDF upload state values
              pdfUploadProgress,
              setPdfUploadProgress,
              pdfUploadProgressPercentage,
              setPdfUploadProgressPercentage,
          }}
      >
          {children}
      </InstructorContext.Provider>
  );
}
