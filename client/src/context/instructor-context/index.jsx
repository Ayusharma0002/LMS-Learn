import {
    courseCurriculumInitialFormData,
    courseLandingInitialFormData,
    liveSessionInitialFormData, // Assuming you've defined this in your config
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
    const [liveSessionFormData, setLiveSessionFormData] = useState(
      [liveSessionInitialFormData] // Live session form data state
    );
  
    const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
    const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] = useState(0);
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
          liveSessionFormData, // Providing live session form data state
          setLiveSessionFormData, // Providing the setter function for live session form
          liveSessionInitialFormData,
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
  