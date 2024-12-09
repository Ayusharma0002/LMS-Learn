// import { courseCurriculumInitialFormData } from "@/config";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { InstructorContext } from "@/context/instructor-context";
// import { Upload } from "lucide-react";
// import { useContext, useRef } from "react";


// function CourseCurriculum() {

//     const {
//         courseCurriculumFormData,
//         setCourseCurriculumFormData,
//         // mediaUploadProgress,
//         // setMediaUploadProgress,
//         // mediaUploadProgressPercentage,
//         // setMediaUploadProgressPercentage,
//       } = useContext(InstructorContext);

//       return (
//         <Card>
//           <CardHeader className="flex flex-row justify-between">
//             <CardTitle>Create Course Curriculum</CardTitle>
//             <div>
//               <Input
//                 type="file"
//                 // ref={bulkUploadInputRef}
//                 accept="video/*"
//                 multiple
//                 className="hidden"
//                 id="bulk-media-upload"
//                 // onChange={handleMediaBulkUpload}
//               />
//               <Button
//                 as="label"
//                 htmlFor="bulk-media-upload"
//                 variant="outline"
//                 className="cursor-pointer"
//                 // onClick={handleOpenBulkUploadDialog}
//               >
//                 <Upload className="w-4 h-5 mr-2" />
//                 Bulk Upload
//               </Button>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Button
//             //   disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
//             //   onClick={handleNewLecture}
//             >
//               Add Lecture
//             </Button>
//             {/* {mediaUploadProgress ? (
//               <MediaProgressbar
//                 isMediaUploading={mediaUploadProgress}
//                 progress={mediaUploadProgressPercentage}
//               />
//             ) : null} */}
//             <div className="mt-4 space-y-4">
//   {courseCurriculumFormData.map((curriculumItem, index) => (
//     <div key={index} className="border p-5 rounded-md"> {/* Added key */}
//       <div className="flex gap-5 items-center">
//         <h3 className="font-semibold">
//         Lecture 
//         {index + 1}
//         </h3>

//       </div>
//     </div>
//   ))}
// </div>



//           </CardContent>
//         </Card>
//       );

// }

// export default CourseCurriculum

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
//   // async function handlePdfUpload(event, currentIndex) {
//   //   const selectedFile = event.target.files[0];
  
//   //   if (selectedFile) {
//   //     const pdfFormData = new FormData();
//   //     pdfFormData.append("file", selectedFile);
  
//   //     try {
//   //       setMediaUploadProgress(true);
//   //       const response = await mediaUploadService(
//   //         pdfFormData,
//   //         setMediaUploadProgressPercentage
//   //       );

//   //       console.log("mai hoon aayush from course-currriculm pdf section",response);
//   //       if (response.success) {
//   //         let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//   //         cpyCourseCurriculumFormData[currentIndex] = {
//   //           ...cpyCourseCurriculumFormData[currentIndex],
//   //           pdfUrl: response?.data?.url,
//   //         };
//   //         setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//   //       }
//   //       setMediaUploadProgress(false);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   // }
//     // Handle PDF Upload
//     async function handlePdfUpload(event, currentIndex) {
//       const selectedFile = event.target.files[0];
  
//       if (selectedFile) {
//         const pdfFormData = new FormData();
//         pdfFormData.append("file", selectedFile);
  
//         try {
//           setMediaUploadProgress(true);
//           const response = await pdfUploadService(pdfFormData, setMediaUploadProgressPercentage);
  
//           if (response.success) {
//             let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//             cpyCourseCurriculumFormData[currentIndex] = {
//               ...cpyCourseCurriculumFormData[currentIndex],
//               pdfUrl: response?.data?.url,
//             };
//             setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//           }
//           setMediaUploadProgress(false);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     }
  
  

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

//   async function handleDeleteLecture(currentIndex) {
//     let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
//     const getCurrentSelectedVideoPublicId =
//       cpyCourseCurriculumFormData[currentIndex].public_id;

//     const response = await mediaDeleteService(getCurrentSelectedVideoPublicId);

//     if (response?.success) {
//       cpyCourseCurriculumFormData = cpyCourseCurriculumFormData.filter(
//         (_, index) => index !== currentIndex
//       );

//       setCourseCurriculumFormData(cpyCourseCurriculumFormData);
//     }
//   }

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
//                   <div className="flex gap-3">
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
//                     {/* <Button
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
//     </Card> */}
//     <Button
//                       onClick={() => handleDeleteLecture(index)}
//                       variant="destructive"
//                     >
//                       Delete Lecture
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="mt-4 flex items-center gap-3">
//                     <Input
//                       type="file"
//                       accept="video/*"
//                       onChange={(event) => handleSingleLectureUpload(event, index)}
//                     />
//                     <Button
//                       onClick={() => handleSingleLectureUpload(event, index)}
//                       disabled={mediaUploadProgress}
//                     >
//                       Upload Video
//                     </Button>
//                   </div>
//                 )}
//               </div>
//               {courseCurriculumFormData[index]?.pdfUrl ? (
//                 <div className="mt-4">
//                   <a
//                     href={courseCurriculumFormData[index]?.pdfUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600"
//                   >
//                     View PDF
//                   </a>
//                   <Button
//                     onClick={() => handleDeleteLecture(index)}
//                     variant="destructive"
//                   >
//                     Delete PDF
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="mt-4">
//                   <Input
//                     type="file"
//                     accept="application/pdf"

//                     onChange={(event) => handlePdfUpload(event, index)}
//                     name="pdf"
//                   />
//                   <Button
//                     onClick={(event) => handlePdfUpload(event, index)}
//                     disabled={mediaUploadProgress}
//                      name="pdf"
//                   >
//                     Upload PDF
//                   </Button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default CourseCurriculum;






































// <div className="flex items-center space-x-2">
// <Switch
//   onCheckedChange={(value) => handleFreePreviewChange(value, index)}
//   checked={courseCurriculumFormData[index]?.freePreview || false} {/* Default to false */}
//   id={`freePreview-${index + 1}`}
// />
// <Label htmlFor={`freePreview-${index + 1}`}>
//   Free Preview
// </Label>
// </div>
// </div>
{/* <div className="mt-6">
{courseCurriculumFormData[index]?.videoUrl ? (
<div className="flex gap-3">
  <VideoPlayer
    url={courseCurriculumFormData[index]?.videoUrl}
    width="450px"
    height="200px"
  />
  <Button onClick={() => handleReplaceVideo(index)}>
    Replace Video
  </Button>
  <Button
    onClick={() => handleDeleteLecture(index)}
    className="bg-red-900"
  >
    Delete Lecture
  </Button>
</div> */}
// ) : (
{/* <Input
  type="file"
  accept="video/*"
  onChange={(event) => handleSingleLectureUpload(event, index)}
  className="mb-4"
/> */}
// )}



































































import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { mediaBulkUploadService, mediaDeleteService, mediaUploadService ,pdfUploadService } from "@/services";
import { Upload } from "lucide-react";
import { useContext, useRef } from "react";
import MediaProgressbar from "@/components/media-progress-bar";
import VideoPlayer from "@/components/video-player";

function CourseCurriculum() {
  // Destructure context values
  const {
    courseCurriculumFormData,
    setCourseCurriculumFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);


  const bulkUploadInputRef = useRef(null);

  // Add Lecture function (just for demo purposes)
  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }
  // console.log(courseCurriculumFormData)
  function handleCourseTitleChange(event, currentIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    cpyCourseCurriculumFormData[currentIndex] = {
      ...cpyCourseCurriculumFormData[currentIndex],
      title: event.target.value,
    };

    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }

  function handleFreePreviewChange(currentValue, currentIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    cpyCourseCurriculumFormData[currentIndex] = {
      ...cpyCourseCurriculumFormData[currentIndex],
      freePreview: currentValue,
    };

    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }


  async function handleSingleLectureUpload(event, currentIndex) {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const videoFormData = new FormData();
      videoFormData.append("file", selectedFile);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          videoFormData,
          setMediaUploadProgressPercentage
        );
        console.log(response, 'response');
        if (response.success) {
          let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
          cpyCourseCurriculumFormData[currentIndex] = {
            ...cpyCourseCurriculumFormData[currentIndex],
            videoUrl: response?.data?.url,
            public_id: response?.data?.public_id,
          };
          setCourseCurriculumFormData(cpyCourseCurriculumFormData);
          setMediaUploadProgress(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function isCourseCurriculumFormDataValid() {
    return courseCurriculumFormData.every((item) => {
      return (
        item &&
        typeof item === "object" &&
        item.title.trim() !== "" &&
        item.videoUrl.trim() !== ""
      );
    });
  }

  async function handleReplaceVideo(currentIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    const getCurrentVideoPublicId =
      cpyCourseCurriculumFormData[currentIndex].public_id;

    const deleteCurrentMediaResponse = await mediaDeleteService(
      getCurrentVideoPublicId
    );

    if (deleteCurrentMediaResponse?.success) {
      cpyCourseCurriculumFormData[currentIndex] = {
        ...cpyCourseCurriculumFormData[currentIndex],
        videoUrl: "",
        public_id: "",
      };

      setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }
  }

  function handleOpenBulkUploadDialog() {
    bulkUploadInputRef.current?.click();
  }

  function areAllCourseCurriculumFormDataObjectsEmpty(arr) {
    return arr.every((obj) => {
      return Object.entries(obj).every(([key, value]) => {
        if (typeof value === 'boolean')
          return true;
        return value === ''
      })
    })
  }

  // pdf upload kai liye
  async function handlePdfUpload(event, currentIndex) {
    const selectedFile = event.target.files[0];
  
    if (selectedFile) {
      const pdfFormData = new FormData();
      pdfFormData.append("file", selectedFile);
  
      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          pdfFormData,
          setMediaUploadProgressPercentage
        );
        // const response = await pdfUploadService(pdfFormData, setMediaUploadProgressPercentage);

        console.log("mai hoon aayush from course-currriculm pdf section",response);
        if (response.success) {
          let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
          cpyCourseCurriculumFormData[currentIndex] = {
            ...cpyCourseCurriculumFormData[currentIndex],
            pdfUrl: response?.data?.url,
          };
          setCourseCurriculumFormData(cpyCourseCurriculumFormData);
        }
        setMediaUploadProgress(false);
      } catch (error) {
        console.log(error);
      }
    }
  }
    // Handle PDF Upload
    // async function handlePdfUpload(event, currentIndex) {
    //   const selectedFile = event.target.files[0];
  
    //   if (selectedFile) {
    //     const pdfFormData = new FormData();
    //     pdfFormData.append("file", selectedFile);
  
    //     try {
    //       setMediaUploadProgress(true);
    //       const response = await pdfUploadService(pdfFormData, setMediaUploadProgressPercentage);
  
    //       if (response.success) {
    //         let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    //         cpyCourseCurriculumFormData[currentIndex] = {
    //           ...cpyCourseCurriculumFormData[currentIndex],
    //           pdfUrl: response?.data?.url,
    //         };
    //         setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    //       }
    //       setMediaUploadProgress(false);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }
  
  

  async function handleMediaBulkUpload(event) {
    const selectedFiles = Array.from(event.target.files)
    const bulkFormData = new FormData()
    selectedFiles.forEach(fileItem => bulkFormData.append("files", fileItem))

    try {
      setMediaUploadProgress(true);
      const response = await mediaBulkUploadService(bulkFormData, setMediaUploadProgressPercentage)

      if (response?.success) {
        let cpyCourseCurriculumFormData = areAllCourseCurriculumFormDataObjectsEmpty(courseCurriculumFormData)
        ? [] : [...courseCurriculumFormData]

        cpyCourseCurriculumFormData =[
          ...cpyCourseCurriculumFormData,
          ...response?.data.map((item,index)=>({
              videoUrl : item?.url,
              public_id: item?.public_id,
              title:`Lecture ${cpyCourseCurriculumFormData.length + (index + 1)}`,
              freePreview:false
          }))
        ]
        setCourseCurriculumFormData(cpyCourseCurriculumFormData)
        setMediaUploadProgress(false);
        console.log("cpy :", cpyCourseCurriculumFormData);
        console.log("cc :", courseCurriculumFormData);

      }


      console.log("bulk Upload Res : ", response);

    }
    catch (e) {
      console.log(e);
    }
    console.log("Bulk Selected :", selectedFiles);

  }

  async function handleDeleteLecture(currentIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    const getCurrentSelectedVideoPublicId =
      cpyCourseCurriculumFormData[currentIndex].public_id;

    const response = await mediaDeleteService(getCurrentSelectedVideoPublicId);

    if (response?.success) {
      cpyCourseCurriculumFormData = cpyCourseCurriculumFormData.filter(
        (_, index) => index !== currentIndex
      );

      setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }
  }

  console.log(courseCurriculumFormData);

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
            onClick={handleOpenBulkUploadDialog}
          >
            <Upload className="w-4 h-5 mr-2" />
            Bulk Upload
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          disabled={!isCourseCurriculumFormDataValid() || mediaUploadProgress}
          onClick={handleNewLecture}
        >
          Add Lecture
        </Button>
        {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
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
                  value={courseCurriculumFormData[index]?.title}
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    onCheckedChange={(value) =>
                      handleFreePreviewChange(value, index)
                    }
                    checked={courseCurriculumFormData[index]?.freePreview}
                    id={`freePreview-${index + 1}`}
                  />
                  <Label htmlFor={`freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
              </div>
              <div className="mt-6">
                {courseCurriculumFormData[index]?.videoUrl ? (
                  <div className="flex gap-3">
                    <VideoPlayer
                      url={courseCurriculumFormData[index]?.videoUrl}
                      width="450px"
                      height="200px"
                    />
                    <Button
                      onClick={() => handleReplaceVideo(index)}
                    >
                      Replace Video
                    </Button>
                    <Button
                      onClick={() => handleDeleteLecture(index)}
                      className="bg-red-900"
                    >
                      Delete Lecture
                    </Button>
                  </div>
                ) : (
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={(event) =>
                      handleSingleLectureUpload(event, index)
                    }
                    className="mb-4"
                  />
                )}
                {courseCurriculumFormData[index]?.videoUrl && (
    <div className="mt-4">
      {courseCurriculumFormData[index]?.pdfUrl ? (
        <p className="text-green-500">PDF Uploaded Successfully!</p>
      ) : (
        <div>
          <Input
            type="file"
            accept="application/pdf"
            onChange={(event) => handlePdfUpload(event, index)}
        />
        </div>
      )}
    </div>
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

































































































