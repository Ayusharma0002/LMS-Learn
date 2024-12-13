// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { courseCurriculumInitialFormData } from "@/config";
// import { InstructorContext } from "@/context/instructor-context";
// import { mediaBulkUploadService, mediaDeleteService, mediaUploadService ,pdfUploadService } from "@/services";
// import { Upload } from "lucide-react";
// import { useContext, useRef } from "react";
// import MediaProgressbar from "@/components/media-progress-bar";
// import VideoPlayer from "@/components/video-player";
 
// function CourseCurriculum() {
//   // Destructure context values
//   const {
//     courseCurriculumFormData,
//     setCourseCurriculumFormData,
//     mediaUploadProgress,
//     setMediaUploadProgress,
//     mediaUploadProgressPercentage,
//     setMediaUploadProgressPercentage,
//   } = useContext(InstructorContext);
 
 
//   const bulkUploadInputRef = useRef(null);
 
//   // Add Lecture function (just for demo purposes)
//   function handleNewLecture() {
//     setCourseCurriculumFormData([
//       ...courseCurriculumFormData,
//       {
//         ...courseCurriculumInitialFormData[0],
//       },
//     ]);
//   }
//   // console.log(courseCurriculumFormData)
//   function handleCourseTitleChange(event, currentIndex) {
//     let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//     cpyCourseCurriculumFormData[currentIndex] = {
//       ...cpyCourseCurriculumFormData[currentIndex],
//       title: event.target.value,
//     };
 
//     setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//   }
 
//   function handleFreePreviewChange(currentValue, currentIndex) {
//     let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//     cpyCourseCurriculumFormData[currentIndex] = {
//       ...cpyCourseCurriculumFormData[currentIndex],
//       freePreview: currentValue,
//     };
 
//     setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//   }
 
 
//   async function handleSingleLectureUpload(event, currentIndex) {
//     console.log(event.target.files);
//     const selectedFile = event.target.files[0];
 
//     if (selectedFile) {
//       const videoFormData = new FormData();
//       videoFormData.append("file", selectedFile);
 
//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(
//           videoFormData,
//           setMediaUploadProgressPercentage
//         );
//         console.log(response, 'response');
//         if (response.success) {
//           let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//           cpyCourseCurriculumFormData[currentIndex] = {
//             ...cpyCourseCurriculumFormData[currentIndex],
//             videoUrl: response?.data?.url,
//             public_id: response?.data?.public_id,
//           };
//           setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//           setMediaUploadProgress(false);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
 
//   function isCourseCurriculumFormDataValid() {
//     return courseCurriculumFormData.every((item) => {
//       return (
//         item &&
//         typeof item === "object" &&
//         item.title.trim() !== "" &&
//         item.videoUrl.trim() !== ""
//       );
//     });
//   }
 
  // async function handleReplaceVideo(currentIndex) {
  //   let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
  //   const getCurrentVideoPublicId =
  //     cpyCourseCurriculumFormData[currentIndex].public_id;
 
  //   const deleteCurrentMediaResponse = await mediaDeleteService(
  //     getCurrentVideoPublicId
  //   );
 
  //   if (deleteCurrentMediaResponse?.success) {
  //     cpyCourseCurriculumFormData[currentIndex] = {
  //       ...cpyCourseCurriculumFormData[currentIndex],
  //       videoUrl: "",
  //       public_id: "",
  //     };
 
  //     setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  //   }
  // }
 
//   function handleOpenBulkUploadDialog() {
//     bulkUploadInputRef.current?.click();
//   }
 
//   function areAllCourseCurriculumFormDataObjectsEmpty(arr) {
//     return arr.every((obj) => {
//       return Object.entries(obj).every(([key, value]) => {
//         if (typeof value === 'boolean')
//           return true;
//         return value === ''
//       })
//     })
//   }
 
//   // pdf upload kai liye
//   async function handlePdfUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];
 
//     if (selectedFile) {
//       const pdfFormData = new FormData();
//       pdfFormData.append("file", selectedFile);
 
//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(
//           pdfFormData,
//           setMediaUploadProgressPercentage
//         );
//         // const response = await pdfUploadService(pdfFormData, setMediaUploadProgressPercentage);
 
//         console.log("mai hoon aayush from course-currriculm pdf section",response);
//         if (response.success) {
//           let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//           cpyCourseCurriculumFormData[currentIndex] = {
//             ...cpyCourseCurriculumFormData[currentIndex],
//             pdfUrl: response?.data?.url,
//           };
//           setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//         }
//         setMediaUploadProgress(false);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
//     // Handle PDF Upload
//     // async function handlePdfUpload(event, currentIndex) {
//     //   const selectedFile = event.target.files[0];
 
//     //   if (selectedFile) {
//     //     const pdfFormData = new FormData();
//     //     pdfFormData.append("file", selectedFile);
 
//     //     try {
//     //       setMediaUploadProgress(true);
//     //       const response = await pdfUploadService(pdfFormData, setMediaUploadProgressPercentage);
 
//     //       if (response.success) {
//     //         let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//     //         cpyCourseCurriculumFormData[currentIndex] = {
//     //           ...cpyCourseCurriculumFormData[currentIndex],
//     //           pdfUrl: response?.data?.url,
//     //         };
//     //         setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//     //       }
//     //       setMediaUploadProgress(false);
//     //     } catch (error) {
//     //       console.log(error);
//     //     }
//     //   }
//     // }
 
 
 
//   async function handleMediaBulkUpload(event) {
//     const selectedFiles = Array.from(event.target.files)
//     const bulkFormData = new FormData()
//     selectedFiles.forEach(fileItem => bulkFormData.append("files", fileItem))
 
//     try {
//       setMediaUploadProgress(true);
//       const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage)
 
//       if (response?.success) {
//         let cpyCourseCurriculumFormData = areAllCourseCurriculumFormDataObjectsEmpty(courseCurriculumFormData)
//         ? [] : [...courseCurriculumFormData]
 
//         cpyCourseCurriculumFormData =[
//           ...cpyCourseCurriculumFormData,
//           ...response?.data.map((item,index)=>({
//               videoUrl : item?.url,
//               public_id: item?.public_id,
//               title:`Lecture ${cpyCourseCurriculumFormData.length + (index + 1)}`,
//               freePreview:false
//           }))
//         ]
//         setCourseCurriculumFormData(cpyCourseCurriculumFormData)
//         setMediaUploadProgress(false);
//         console.log("cpy :", cpyCourseCurriculumFormData);
//         console.log("cc :", courseCurriculumFormData);
 
//       }
 
 
//       console.log("bulk Upload Res : ", response);
 
//     }
//     catch (e) {
//       console.log(e);
//     }
//     console.log("Bulk Selected :", selectedFiles);
 
//   }
 
  // async function handleDeleteLecture(currentIndex) {
  //   let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
  //   const getCurrentSelectedVideoPublicId =
  //     cpyCourseCurriculumFormData[currentIndex].public_id;
 
  //   const response = await mediaDeleteService(getCurrentSelectedVideoPublicId);
 
  //   if (response?.success) {
  //     cpyCourseCurriculumFormData = cpyCourseCurriculumFormData.filter(
  //       (_, index) => index !== currentIndex
  //     );
 
  //     setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  //   }
  // }
 
//   console.log(courseCurriculumFormData);
 
//   return (
//     <Card>
//       <CardHeader className="flex flex-row justify-between">
//         <CardTitle>Create Course Curriculum</CardTitle>
//         <div>
//           <Input
//             type="file"
//             ref={bulkUploadInputRef}
//             accept="video/*"
//             multiple
//             className="hidden"
//             id="bulk-media-upload"
//             onChange={handleMediaBulkUpload}
//           />
//           <Button
//             as="label"
//             htmlFor="bulk-media-upload"
//             variant="outline"
//             className="cursor-pointer"
//             onClick={handleOpenBulkUploadDialog}
//           >
//             <Upload className="w-4 h-5 mr-2" />
//             Bulk Upload
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <Button
//           disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
//           onClick={handleNewLecture}
//         >
//           Add Lecture
//         </Button>
//         {mediaUploadProgress ? (
//           <MediaProgressbar
//             isMediaUploading={mediaUploadProgress}
//             progress={mediaUploadProgressPercentage}
//           />
//         ) : null}
//         <div className="mt-4 space-y-4">
//           {courseCurriculumFormData.map((curriculumItem, index) => (
//             <div key={index} className="border p-5 rounded-md">
//               <div className="flex gap-5 items-center">
//                 <h3 className="font-semibold">Lecture {index + 1}</h3>
//                 <Input
//                   name={`title-${index + 1}`}
//                   placeholder="Enter lecture title"
//                   className="max-w-96"
//                   onChange={(event) => handleCourseTitleChange(event, index)}
//                   value={courseCurriculumFormData[index]?.title}
//                 />
//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     onCheckedChange={(value) =>
//                       handleFreePreviewChange(value, index)
//                     }
//                     checked={courseCurriculumFormData[index]?.freePreview}
//                     id={`freePreview-${index + 1}`}
//                   />
//                   <Label htmlFor={`freePreview-${index + 1}`}>
//                     Free Preview
//                   </Label>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 {courseCurriculumFormData[index]?.videoUrl ? (
                  // <div className="flex gap-3">
//                     <VideoPlayer
//                       url={courseCurriculumFormData[index]?.videoUrl}
//                       width="450px"
//                       height="200px"
//                     />
//                     <Button
//                       onClick={() => handleReplaceVideo(index)}
//                     >
//                       Replace Video
//                     </Button>
//                     <Button
//                       onClick={() => handleDeleteLecture(index)}
//                       className="bg-red-900"
//                     >
//                       Delete Lecture
//                     </Button>
//                   </div>
//                 ) : (
//                   <Input
//                     type="file"
//                     accept="video/*"
//                     onChange={(event) =>
//                       handleSingleLectureUpload(event, index)
//                     }
//                     className="mb-4"
//                   />
//                 )}
//                 {courseCurriculumFormData[index]?.videoUrl && (
//     <div className="mt-4">
//       {courseCurriculumFormData[index]?.pdfUrl ? (
//         <p className="text-green-500">PDF Uploaded Successfully!</p>
//       ) : (
//         <div>
//           <Input
//             type="file"
//             accept="application/pdf"
//             onChange={(event) => handlePdfUpload(event, index)}
//         />
//         </div>
//       )}
//     </div>
//   )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
 
//   );
// }
 
// export default CourseCurriculum;



//ye sahi hai code
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { courseCurriculumInitialFormData } from "@/config";
// import { InstructorContext } from "@/context/instructor-context";
// import { mediaBulkUploadService, mediaDeleteService, mediaUploadService, pdfUploadService } from "@/services";
// import { Upload } from "lucide-react";
// import { useContext, useRef } from "react";
// import MediaProgressbar from "@/components/media-progress-bar";
// import VideoPlayer from "@/components/video-player";

// export function CourseCurriculum() {
//   const {
//     courseCurriculumFormData,
//     setCourseCurriculumFormData,
//     mediaUploadProgress,
//     setMediaUploadProgress,
//     mediaUploadProgressPercentage,
//     setMediaUploadProgressPercentage,
//   } = useContext(InstructorContext);

//   const bulkUploadInputRef = useRef(null);

//   function handleNewLecture() {
//     setCourseCurriculumFormData([
//       ...courseCurriculumFormData,
//       {
//         ...courseCurriculumInitialFormData[0],
//       },
//     ]);
//   }

//   function handleCourseTitleChange(event, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       title: event.target.value,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   function handleFreePreviewChange(currentValue, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       freePreview: currentValue,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   async function handleSingleLectureUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             videoUrl: response?.data?.url,  // Add video URL after successful upload
//             public_id: response?.data?.public_id,
//           };
//           setCourseCurriculumFormData(updatedFormData);
//           setMediaUploadProgress(false);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   async function handlePdfUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             pdfUrl: response?.data?.url,
//           };
//           setCourseCurriculumFormData(updatedFormData);
//         }
//         setMediaUploadProgress(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   async function handleReplaceVideo(currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     const publicId = updatedFormData[currentIndex].public_id;

//     const deleteResponse = await mediaDeleteService(publicId);

//     if (deleteResponse?.success) {
//       const selectedFile = bulkUploadInputRef.current?.files[0];

//       if (selectedFile) {
//         const formData = new FormData();
//         formData.append("file", selectedFile);

//         try {
//           setMediaUploadProgress(true);
//           const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//           if (response.success) {
//             updatedFormData[currentIndex] = {
//               ...updatedFormData[currentIndex],
//               videoUrl: response?.data?.url, // Update with new video URL
//               public_id: response?.data?.public_id,
//             };
//             setCourseCurriculumFormData(updatedFormData);
//             setMediaUploadProgress(false);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }
//   }

//   async function handleDeleteLecture(currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     const publicId = updatedFormData[currentIndex].public_id;

//     const deleteResponse = await mediaDeleteService(publicId);

//     if (deleteResponse?.success) {
//       updatedFormData.splice(currentIndex, 1); // Remove the lecture
//       setCourseCurriculumFormData(updatedFormData);
//     }
//   }

//   function isLectureValid(lecture) {
//     return lecture.videoUrl.trim() !== "" || lecture.pdfUrl?.trim() !== "";
//   }

//   function isCourseCurriculumFormDataValid() {
//     return courseCurriculumFormData.some(isLectureValid);
//   }

//   async function handleMediaBulkUpload(event) {
//     const selectedFiles = Array.from(event.target.files);
//     const bulkFormData = new FormData();
//     selectedFiles.forEach((file) => bulkFormData.append("files", file));

//     try {
//       setMediaUploadProgress(true);
//       const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage);

//       if (response?.success) {
//         let updatedFormData = courseCurriculumFormData.some(isLectureValid)
//           ? [...courseCurriculumFormData]
//           : [];

//         updatedFormData = [
//           ...updatedFormData,
//           ...response?.data.map((item, index) => ({
//             videoUrl: item?.url,  // Add video URL after successful bulk upload
//             public_id: item?.public_id,
//             title: `Lecture ${updatedFormData.length + (index + 1)}`,
//             freePreview: false,
//           })),
//         ];

//         setCourseCurriculumFormData(updatedFormData);
//         setMediaUploadProgress(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }


// return (
//   <Card>
//     <CardHeader className="flex flex-row justify-between">
//       <CardTitle>Create Course Curriculum</CardTitle>
//       <div>
//         <Input
//           type="file"
//           ref={bulkUploadInputRef}
//           accept="video/*"
//           multiple
//           className="hidden"
//           id="bulk-media-upload"
//           onChange={handleMediaBulkUpload}
//         />
//         <Button
//           as="label"
//           htmlFor="bulk-media-upload"
//           variant="outline"
//           className="cursor-pointer"
//         >
//           <Upload className="w-4 h-5 mr-2" />
//           Bulk Upload
//         </Button>
//       </div>
//     </CardHeader>
//     <CardContent>
//       <Button
//         disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
//         onClick={handleNewLecture}
//       >
//         Add Lecture
//       </Button>
//       {mediaUploadProgress && (
//         <MediaProgressbar
//           isMediaUploading={mediaUploadProgress}
//           progress={mediaUploadProgressPercentage}
//         />
//       )}
//       <div className="mt-4 space-y-4">
//         {courseCurriculumFormData.map((curriculumItem, index) => (
//           <div key={index} className="border p-5 rounded-md">
//             <div className="flex gap-5 items-center">
//               <h3 className="font-semibold">Lecture {index + 1}</h3>
//               <Input
//                 name={`title-${index + 1}`}
//                 placeholder="Enter lecture title"
//                 className="max-w-96"
//                 onChange={(event) => handleCourseTitleChange(event, index)}
//                 value={curriculumItem.title}
//               />
//               <div className="flex items-center space-x-2">
//                 <Label>Free Preview</Label>
//                 <Switch
//                   checked={curriculumItem.freePreview}
//                   onCheckedChange={(value) => handleFreePreviewChange(value, index)}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-5 mt-4">
//               <Input
//                 type="file"
//                 accept="video/*"
//                 onChange={(event) => handleSingleLectureUpload(event, index)}
//               />
//               <Input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={(event) => handlePdfUpload(event, index)}
//               />
//             </div>

//             {/* Video player section */}
//                   {curriculumItem.videoUrl && <VideoPlayer url={curriculumItem.videoUrl}  width="450px"
//                       height="200px"/>}
//               <div className="mt-2 flex space-x-4">
//                 <Button variant="outline" onClick={() => handleReplaceVideo(index)}>
//                   Replace Video
//                 </Button>
//                 <Button variant="outline" color="red" onClick={() => handleDeleteLecture(index)}>
//                   Delete Lecture
//                 </Button>
//               </div>
//             </div>
//           ))}
          

          
//       </div>
//     </CardContent>
//   </Card>
// );
// }
// export default CourseCurriculum;






// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { courseCurriculumInitialFormData } from "@/config";
// import { InstructorContext } from "@/context/instructor-context";
// import { mediaBulkUploadService, mediaDeleteService, mediaUploadService, pdfUploadService } from "@/services";
// import { Upload } from "lucide-react";
// import { useContext, useRef, useState } from "react";
// import MediaProgressbar from "@/components/media-progress-bar";
// import VideoPlayer from "@/components/video-player";

// function CourseCurriculum() {
//   const {
//     courseCurriculumFormData,
//     setCourseCurriculumFormData,
//     mediaUploadProgress,
//     setMediaUploadProgress,
//     mediaUploadProgressPercentage,
//     setMediaUploadProgressPercentage,
//   } = useContext(InstructorContext);

//   const bulkUploadInputRef = useRef(null);

//   // Track PDF upload status
//   const [pdfUploadStatus, setPdfUploadStatus] = useState([]);
//   const [videoUploadStatus, setVideoUploadStatus] = useState([]);

//   function handleNewLecture() {
//     setCourseCurriculumFormData([
//       ...courseCurriculumFormData,
//       {
//         ...courseCurriculumInitialFormData[0],
//       },
//     ]);
//   }

//   function handleCourseTitleChange(event, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       title: event.target.value,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   function handleFreePreviewChange(currentValue, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       freePreview: currentValue,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   // Handle video upload and replace button after success
//   async function handleSingleLectureUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             videoUrl: response?.data?.url,
//             public_id: response?.data?.public_id,
//           };
//           setCourseCurriculumFormData(updatedFormData);
//           setMediaUploadProgress(false);

//           // Update video upload status
//           const updatedVideoStatus = [...videoUploadStatus];
//           updatedVideoStatus[currentIndex] = "Video uploaded successfully";
//           setVideoUploadStatus(updatedVideoStatus);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   // Handle PDF upload and track the success state
//   async function handlePdfUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             pdfUrl: response?.data?.url,
//           };
//           setCourseCurriculumFormData(updatedFormData);

//           // Update PDF upload status to success
//           const updatedPdfStatus = [...pdfUploadStatus];
//           updatedPdfStatus[currentIndex] = "PDF uploaded successfully";
//           setPdfUploadStatus(updatedPdfStatus);
//         }
//         setMediaUploadProgress(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   // async function handleReplaceVideo(currentIndex) {
//   //   const updatedFormData = [...courseCurriculumFormData];
//   //   const publicId = updatedFormData[currentIndex].public_id;

//   //   const deleteResponse = await mediaDeleteService(publicId);

//   //   if (deleteResponse?.success) {
//   //     const selectedFile = bulkUploadInputRef.current?.files[0];

//   //     if (selectedFile) {
//   //       const formData = new FormData();
//   //       formData.append("file", selectedFile);

//   //       try {
//   //         setMediaUploadProgress(true);
//   //         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//   //         if (response.success) {
//   //           updatedFormData[currentIndex] = {
//   //             ...updatedFormData[currentIndex],
//   //             videoUrl: response?.data?.url,
//   //             public_id: response?.data?.public_id,
//   //           };
//   //           setCourseCurriculumFormData(updatedFormData);
//   //           setMediaUploadProgress(false);
//   //         }
//   //       } catch (error) {
//   //         console.error(error);
//   //       }
//   //     }
//   //   }
//   // }
//   async function handleReplaceVideo(currentIndex) {
//     let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//     const getCurrentVideoPublicId =
//       cpyCourseCurriculumFormData[currentIndex].public_id;
 
//     const deleteCurrentMediaResponse = await mediaDeleteService(
//       getCurrentVideoPublicId
//     );
 
//     if (deleteCurrentMediaResponse?.success) {
//       cpyCourseCurriculumFormData[currentIndex] = {
//         ...cpyCourseCurriculumFormData[currentIndex],
//         videoUrl: "",
//         public_id: "",
//       };
 
//       setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//     }
//   }

//   async function handleDeleteLecture(currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     const publicId = updatedFormData[currentIndex].public_id;

//     const deleteResponse = await mediaDeleteService(publicId);

//     if (deleteResponse?.success) {
//       updatedFormData.splice(currentIndex, 1);
//       setCourseCurriculumFormData(updatedFormData);
//     }
//   }
//   // async function handleDeleteLecture(currentIndex) {
//   //   let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//   //   const getCurrentSelectedVideoPublicId =
//   //     cpyCourseCurriculumFormData[currentIndex].public_id;
 
//   //   const response = await mediaDeleteService(getCurrentSelectedVideoPublicId);
 
//   //   if (response?.success) {
//   //     cpyCourseCurriculumFormData = cpyCourseCurriculumFormData.filter(
//   //       (_, index) => index !== currentIndex
//   //     );
 
//   //     setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//   //   }
//   // }
 

//   function isLectureValid(lecture) {
//     return lecture.videoUrl.trim() !== "" || lecture.pdfUrl?.trim() !== "";
//   }

//   function isCourseCurriculumFormDataValid() {
//     return courseCurriculumFormData.some(isLectureValid);
//   }

//   async function handleMediaBulkUpload(event) {
//     const selectedFiles = Array.from(event.target.files);
//     const bulkFormData = new FormData();
//     selectedFiles.forEach((file) => bulkFormData.append("files", file));

//     try {
//       setMediaUploadProgress(true);
//       const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage);

//       if (response?.success) {
//         let updatedFormData = courseCurriculumFormData.some(isLectureValid)
//           ? [...courseCurriculumFormData]
//           : [];

//         updatedFormData = [
//           ...updatedFormData,
//           ...response?.data.map((item, index) => ({
//             videoUrl: item?.url,
//             public_id: item?.public_id,
//             title: `Lecture ${updatedFormData.length + (index + 1)}`,
//             freePreview: false,
//           })),
//         ];

//         setCourseCurriculumFormData(updatedFormData);
//         setMediaUploadProgress(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
  

//   return (
//     <Card>
//       <CardHeader className="flex flex-row justify-between">
//         <CardTitle>Create Course Curriculum</CardTitle>
//         <div>
//           <Input
//             type="file"
//             ref={bulkUploadInputRef}
//             accept="video/*"
//             multiple
//             className="hidden"
//             id="bulk-media-upload"
//             onChange={handleMediaBulkUpload}
//           />
//           <Button
//             as="label"
//             htmlFor="bulk-media-upload"
//             variant="outline"
//             className="cursor-pointer"
//           >
//             <Upload className="w-4 h-5 mr-2" />
//             Bulk Upload
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <Button
//           disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
//           onClick={handleNewLecture}
//         >
//           Add Lecture
//         </Button>
//         {mediaUploadProgress && (
//           <MediaProgressbar
//             isMediaUploading={mediaUploadProgress}
//             progress={mediaUploadProgressPercentage}
//           />
//         )}
//         <div className="mt-4 space-y-4">
//           {courseCurriculumFormData.map((curriculumItem, index) => (
//             <div key={index} className="border p-5 rounded-md">
//               <div className="flex gap-5 items-center">
//                 <h3 className="font-semibold">Lecture {index + 1}</h3>
//                 <Input
//                   name={`title-${index + 1}`}
//                   placeholder="Enter lecture title"
//                   className="max-w-96"
//                   onChange={(event) => handleCourseTitleChange(event, index)}
//                   value={curriculumItem.title}
//                 />
//                 <div className="flex items-center space-x-2">
//                   <Label>Free Preview</Label>
//                   <Switch
//                     checked={curriculumItem.freePreview}
//                     onCheckedChange={(value) => handleFreePreviewChange(value, index)}
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-5 mt-4">
        
//               {curriculumItem.videoUrl ? (
//                 <div className="flex gap-3">
//                  <VideoPlayer url={curriculumItem.videoUrl} width="550px" height="200px" />

//                  <Button
//                       onClick={() => handleReplaceVideo(index)}
//                     >
//                       Replace Video
//                     </Button>
//                     <Button
//                       onClick={() => handleDeleteLecture(index)}
//                       className="bg-red-900"
//                     >
//                       Delete Lecture
//                     </Button>
//                     </div>
//                    ) : (
 
//                       !curriculumItem.videoUploaded && (
//                        <Input
//                          type="file"
//                          accept="video/*"
//                          onChange={(event) => handleSingleLectureUpload(event, index)}
//                        />
//                     )
//                 )}

                

//                 {pdfUploadStatus[index] ? (
//                   <span className="text-green-500">{pdfUploadStatus[index]}</span>
//                 ) : (
//                   <Input
//                     type="file"
//                     accept="application/pdf"
//                     onChange={(event) => handlePdfUpload(event, index)}
//                   />
//                 )}
//               </div>

             
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
  
// }


// export default CourseCurriculum;




import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { mediaBulkUploadService, mediaDeleteService, mediaUploadService, pdfUploadService } from "@/services";
import { Upload } from "lucide-react";
import { useContext, useRef, useState } from "react";
import MediaProgressbar from "@/components/media-progress-bar";
import VideoPlayer from "@/components/video-player";

function CourseCurriculum() {
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  const bulkUploadInputRef = useRef(null);

  // Track PDF upload status
  const [pdfUploadStatus, setPdfUploadStatus] = useState([]);
  const [videoUploadStatus, setVideoUploadStatus] = useState([]);

  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }

  function handleCourseTitleChange(event, currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    updatedFormData[currentIndex] = {
      ...updatedFormData[currentIndex],
      title: event.target.value,
    };
    setCourseCurriculumFormData(updatedFormData);
  }

  function handleFreePreviewChange(currentValue, currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    updatedFormData[currentIndex] = {
      ...updatedFormData[currentIndex],
      freePreview: currentValue,
    };
    setCourseCurriculumFormData(updatedFormData);
  }

  async function handleSingleLectureUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
        if (response.success) {
          const updatedFormData = [...courseCurriculumFormData];
          updatedFormData[currentIndex] = {
            ...updatedFormData[currentIndex],
            videoUrl: response?.data?.url,
            public_id: response?.data?.public_id,
          };
          setCourseCurriculumFormData(updatedFormData);
          setMediaUploadProgress(false);

          const updatedVideoStatus = [...videoUploadStatus];
          updatedVideoStatus[currentIndex] = "Video uploaded successfully";
          setVideoUploadStatus(updatedVideoStatus);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handlePdfUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
        if (response.success) {
          const updatedFormData = [...courseCurriculumFormData];
          updatedFormData[currentIndex] = {
            ...updatedFormData[currentIndex],
            pdfUrl: response?.data?.url,
          };
          setCourseCurriculumFormData(updatedFormData);

          const updatedPdfStatus = [...pdfUploadStatus];
          updatedPdfStatus[currentIndex] = "PDF uploaded successfully";
          setPdfUploadStatus(updatedPdfStatus);
        }
        setMediaUploadProgress(false);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleReplaceVideo(currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    const publicId = updatedFormData[currentIndex].public_id;

    const deleteResponse = await mediaDeleteService(publicId);

    if (deleteResponse?.success) {
      updatedFormData[currentIndex] = {
        ...updatedFormData[currentIndex],
        videoUrl: "",
        public_id: "",
      };

      setCourseCurriculumFormData(updatedFormData);
    }
  }

  async function handleDeleteLecture(currentIndex) {
    const updatedFormData = [...courseCurriculumFormData];
    const publicId = updatedFormData[currentIndex].public_id;
  
    const deleteResponse = await mediaDeleteService(publicId);
  
    if (deleteResponse?.success) {
      updatedFormData.splice(currentIndex, 1);
      setCourseCurriculumFormData(updatedFormData);
  
      // Clear video and PDF upload statuses
      const updatedPdfStatus = [...pdfUploadStatus];
      updatedPdfStatus.splice(currentIndex, 1);
      setPdfUploadStatus(updatedPdfStatus);
  
      const updatedVideoStatus = [...videoUploadStatus];
      updatedVideoStatus.splice(currentIndex, 1);
      setVideoUploadStatus(updatedVideoStatus);
  
      // Re-enable the "Add Lecture" button if there's at least one lecture left
      if (updatedFormData.length === 0) {
        setCourseCurriculumFormData([
          ...updatedFormData,
          {
            ...courseCurriculumInitialFormData[0],
          },
        ]);
      }
    }
  }
  

  async function handleMediaBulkUpload(event) {
    const selectedFiles = Array.from(event.target.files);
    const bulkFormData = new FormData();
    selectedFiles.forEach((file) => bulkFormData.append("files", file));

    try {
      setMediaUploadProgress(true);
      const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage);

      if (response?.success) {
        let updatedFormData = courseCurriculumFormData.some(isLectureValid)
          ? [...courseCurriculumFormData]
          : [];

        updatedFormData = [
          ...updatedFormData,
          ...response?.data.map((item, index) => ({
            videoUrl: item?.url,
            public_id: item?.public_id,
            title: `Lecture ${updatedFormData.length + (index + 1)}`,
            freePreview: false,
          })),
        ];

        setCourseCurriculumFormData(updatedFormData);
        setMediaUploadProgress(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Create Course Curriculum</CardTitle>
        <div>
          <Input
            type="file"
            ref={bulkUploadInputRef}
            accept="video/*"
            multiple
            className="hidden"
            id="bulk-media-upload"
            onChange={handleMediaBulkUpload}
          />
          <Button
            as="label"
            htmlFor="bulk-media-upload"
            variant="outline"
            className="cursor-pointer"
          >
            <Upload className="w-4 h-5 mr-2" />
            Bulk Upload
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleNewLecture}
        >
          Add Lecture
        </Button>
        {mediaUploadProgress && (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        )}
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((curriculumItem, index) => (
            <div key={index} className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={(event) => handleCourseTitleChange(event, index)}
                  value={curriculumItem.title}
                />
                <div className="flex items-center space-x-2">
                  <Label>Free Preview</Label>
                  <Switch
                    checked={curriculumItem.freePreview}
                    onCheckedChange={(value) => handleFreePreviewChange(value, index)}
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-4">
                {curriculumItem.videoUrl ? (
                  <div className="flex gap-3">
                    <VideoPlayer url={curriculumItem.videoUrl} width="550px" height="200px" />
                    <Button onClick={() => handleReplaceVideo(index)}>Replace Video</Button>
                    <Button onClick={() => handleDeleteLecture(index)} className="bg-red-900">
                      Delete Lecture
                    </Button>
                  </div>
                ) : (
                  !curriculumItem.videoUploaded && (
                    <Input
                      type="file"
                      accept="video/*"
                       placeholder="Upload video"
                   
                      onChange={(event) => handleSingleLectureUpload(event, index)}
                    />
                  )
                )}
                {pdfUploadStatus[index] ? (
                  <span className="text-green-500">{pdfUploadStatus[index]}</span>
                ) : (
                  <Input
                    type="file"
                    accept="application/pdf"
                    
                    onChange={(event) => handlePdfUpload(event, index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;









































































































































































































































































































































// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { courseCurriculumInitialFormData } from "@/config";
// import { InstructorContext } from "@/context/instructor-context";
// import { mediaBulkUploadService, mediaDeleteService, mediaUploadService, pdfUploadService } from "@/services";
// import { Upload } from "lucide-react";
// import { useContext, useRef } from "react";
// import MediaProgressbar from "@/components/media-progress-bar";
// import VideoPlayer from "@/components/video-player";

// export function CourseCurriculum() {
//   const {
//     courseCurriculumFormData,
//     setCourseCurriculumFormData,
//     mediaUploadProgress,
//     setMediaUploadProgress,
//     mediaUploadProgressPercentage,
//     setMediaUploadProgressPercentage,
//   } = useContext(InstructorContext);

//   const bulkUploadInputRef = useRef(null);

//   function handleNewLecture() {
//     setCourseCurriculumFormData([
//       ...courseCurriculumFormData,
//       {
//         ...courseCurriculumInitialFormData[0],
//       },
//     ]);
//   }

//   function handleCourseTitleChange(event, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       title: event.target.value,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   function handleFreePreviewChange(currentValue, currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     updatedFormData[currentIndex] = {
//       ...updatedFormData[currentIndex],
//       freePreview: currentValue,
//     };
//     setCourseCurriculumFormData(updatedFormData);
//   }

//   async function handleSingleLectureUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             videoUrl: response?.data?.url,  // Add video URL after successful upload
//             public_id: response?.data?.public_id,
//           };
//           setCourseCurriculumFormData(updatedFormData);
//           setMediaUploadProgress(false);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   async function handlePdfUpload(event, currentIndex) {
//     const selectedFile = event.target.files[0];

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       try {
//         setMediaUploadProgress(true);
//         const response = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//         if (response.success) {
//           const updatedFormData = [...courseCurriculumFormData];
//           updatedFormData[currentIndex] = {
//             ...updatedFormData[currentIndex],
//             pdfUrl: response?.data?.url,
//           };
//           setCourseCurriculumFormData(updatedFormData);
//         }
//         setMediaUploadProgress(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   async function handleReplaceVideo(event, currentIndex) {
//     const selectedFile = event.target.files[0];
//     if (!selectedFile) return;

//     const updatedFormData = [...courseCurriculumFormData];
//     const publicId = updatedFormData[currentIndex].public_id;

//     try {
//       setMediaUploadProgress(true);

//       // Delete old video
//       const deleteResponse = await mediaDeleteService(publicId);
//       if (!deleteResponse?.success) {
//         setMediaUploadProgress(false);
//         return;
//       }

//       // Upload new video
//       const formData = new FormData();
//       formData.append("file", selectedFile);

//       const uploadResponse = await mediaUploadService(formData, setMediaUploadProgressPercentage);
//       if (uploadResponse.success) {
//         updatedFormData[currentIndex] = {
//           ...updatedFormData[currentIndex],
//           videoUrl: uploadResponse?.data?.url,  // Update with new video URL
//           public_id: uploadResponse?.data?.public_id,
//         };
//         setCourseCurriculumFormData(updatedFormData);
//       }
//       setMediaUploadProgress(false);
//     } catch (error) {
//       console.error(error);
//       setMediaUploadProgress(false);
//     }
//   }

//   async function handleDeleteLecture(currentIndex) {
//     const updatedFormData = [...courseCurriculumFormData];
//     const publicId = updatedFormData[currentIndex].public_id;

//     try {
//       // Confirm deletion of media
//       const deleteResponse = await mediaDeleteService(publicId);
//       if (deleteResponse?.success) {
//         updatedFormData.splice(currentIndex, 1); // Remove the lecture
//         setCourseCurriculumFormData(updatedFormData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function isLectureValid(lecture) {
//     return lecture.videoUrl.trim() !== "" || lecture.pdfUrl?.trim() !== "";
//   }

//   function isCourseCurriculumFormDataValid() {
//     return courseCurriculumFormData.some(isLectureValid);
//   }

//   async function handleMediaBulkUpload(event) {
//     const selectedFiles = Array.from(event.target.files);
//     const bulkFormData = new FormData();
//     selectedFiles.forEach((file) => bulkFormData.append("files", file));

//     try {
//       setMediaUploadProgress(true);
//       const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage);

//       if (response?.success) {
//         let updatedFormData = courseCurriculumFormData.some(isLectureValid)
//           ? [...courseCurriculumFormData]
//           : [];

//         updatedFormData = [
//           ...updatedFormData,
//           ...response?.data.map((item, index) => ({
//             videoUrl: item?.url,  // Add video URL after successful bulk upload
//             public_id: item?.public_id,
//             title: `Lecture ${updatedFormData.length + (index + 1)}`,
//             freePreview: false,
//           })),
//         ];

//         setCourseCurriculumFormData(updatedFormData);
//         setMediaUploadProgress(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <Card>
//       <CardHeader className="flex flex-row justify-between">
//         <CardTitle>Create Course Curriculum</CardTitle>
//         <div>
//           <Input
//             type="file"
//             ref={bulkUploadInputRef}
//             accept="video/*"
//             multiple
//             className="hidden"
//             id="bulk-media-upload"
//             onChange={handleMediaBulkUpload}
//           />
//           <Button
//             as="label"
//             htmlFor="bulk-media-upload"
//             variant="outline"
//             className="cursor-pointer"
//           >
//             <Upload className="w-4 h-5 mr-2" />
//             Bulk Upload
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <Button
//           disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
//           onClick={handleNewLecture}
//         >
//           Add Lecture
//         </Button>
//         {mediaUploadProgress && (
//           <MediaProgressbar
//             isMediaUploading={mediaUploadProgress}
//             progress={mediaUploadProgressPercentage}
//           />
//         )}
//         <div className="mt-4 space-y-4">
//           {courseCurriculumFormData.map((curriculumItem, index) => (
//             <div key={index} className="border p-5 rounded-md">
//               <div className="flex gap-5 items-center">
//                 <h3 className="font-semibold">Lecture {index + 1}</h3>
//                 <Input
//                   name={`title-${index + 1}`}
//                   placeholder="Enter lecture title"
//                   className="max-w-96"
//                   onChange={(event) => handleCourseTitleChange(event, index)}
//                   value={curriculumItem.title}
//                 />
//                 <div className="flex items-center space-x-2">
//                   <Label>Free Preview</Label>
//                   <Switch
//                     checked={curriculumItem.freePreview}
//                     onCheckedChange={(value) => handleFreePreviewChange(value, index)}
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-5 mt-4">
//                 <Input
//                   type="file"
//                   accept="video/*"
//                   onChange={(event) => handleSingleLectureUpload(event, index)}
//                 />
//                 <Input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={(event) => handlePdfUpload(event, index)}
//                 />
//               </div>

//               {/* Video player section */}
//               {curriculumItem.videoUrl && <VideoPlayer url={curriculumItem.videoUrl} width="450px" height="200px" />}
//               <div className="mt-2 flex space-x-4">
               
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default CourseCurriculum;
























{/* <Button variant="outline">
<input
  type="file"
  accept="video/*"
  className="hidden"
  onChange={(event) => handleReplaceVideo(event, index)}
/>
<label className="cursor-pointer">Replace Video</label>
</Button>
<Button variant="outline" color="red" onClick={() => handleDeleteLecture(index)}>
Delete Lecture
</Button> */}




































