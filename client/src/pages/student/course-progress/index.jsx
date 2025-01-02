// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogOverlay,
//   DialogPortal,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import VideoPlayer from "@/components/video-player";
// import { AuthContext } from "@/context/auth-context";
// import { StudentContext } from "@/context/student-context";
// import {
//   getCurrentCourseProgressService,
//   markLectureAsViewedService,
//   resetCourseProgressService,
// } from "@/services";
// import {
//   Check
//   ,
//   ChevronLeft,
//   ChevronRight
//   ,
//   Download,
//   Files,
//   Folder,
//   Play
// } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// // import Confetti from "react-confetti/dist/types/Confetti";
// import Confetti from "react-confetti";
// import {
//   useNavigate
//   ,
//   useParams
// } from "react-router-dom";

// function StudentViewCourseProgressPage() {
//   const navigate = useNavigate();
//   const { auth } = useContext(AuthContext);
//   const { studentCurrentCourseProgress, setStudentCurrentCourseProgress } =
//     useContext(StudentContext);
//   const [lockCourse, setLockCourse] = useState(false);
//   const [currentLecture, setCurrentLecture] = useState(null);
//   const [showCourseCompleteDialog, setShowCourseCompleteDialog] =
//     useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [isSideBarOpen, setIsSideBarOpen] = useState(true);
//   const { id } = useParams();

//   async function fetchCurrentCourseProgress() {
//     const response = await getCurrentCourseProgressService(auth?.user?._id, id);
//     if (response?.success) {
//       if (!response?.data?.isPurchased) {
//         setLockCourse(true);
//       } else {
//         setStudentCurrentCourseProgress({
//           courseDetails: response?.data?.courseDetails,
//           progress: response?.data?.progress,
//         });

//         if (response?.data?.completed) {
//           setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
//           setShowCourseCompleteDialog(true);
//           setShowConfetti(true);

//           return;
//         }

//         if (response?.data?.progress?.length === 0) {
//           setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
//         } else {
//           console.log("logging here");
//           const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
//             (acc, obj, index) => {
//               return acc === -1 && obj.viewed ? index : acc;
//             },
//             -1
//           );

//           setCurrentLecture(
//             response?.data?.courseDetails?.curriculum[
//             lastIndexOfViewedAsTrue + 1
//             ]
//           );
//         }
//       }
//     }
//   }

//   async function updateCourseProgress() {
//     if (currentLecture) {
//       const response = await markLectureAsViewedService(
//         auth?.user?._id,
//         studentCurrentCourseProgress?.courseDetails?._id,
//         currentLecture._id
//       );

//       if (response?.success) {
//         fetchCurrentCourseProgress();
//       }
//     }
//   }

//   async function handleRewatchCourse() {
//     const response = await resetCourseProgressService(
//       auth?.user?._id,
//       studentCurrentCourseProgress?.courseDetails?._id
//     );

//     if (response?.success) {
//       setCurrentLecture(null);
//       setShowConfetti(false);
//       setShowCourseCompleteDialog(false);
//       fetchCurrentCourseProgress();
//     }
//   }

//   useEffect(() => {
//     fetchCurrentCourseProgress();
//   }, [id]);

//   useEffect(() => {
//     if (currentLecture?.progressValue === 1) updateCourseProgress();
//   }, [currentLecture]);

//   useEffect(() => {
//     if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
//   }, [showConfetti]);

//   console.log(currentLecture, "currentLecture");

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {showConfetti && <Confetti />}
//       <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
//         <div className="flex items-center space-x-4">
//           <Button
//             onClick={() => navigate("/student-courses")}
//             className="text-black"
//             variant="ghost"
//             size="sm"
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//           </Button>
//           <h1 className="text-lg font-bold hidden md:block">
//             {studentCurrentCourseProgress?.courseDetails?.title}
//           </h1>
//         </div>
//         <Button
//           className=""
//           onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
//           {isSideBarOpen ? (
//             <ChevronRight className="h-5 w-5" />
//           ) : (
//             <ChevronLeft className="h-5 w-5" />
//           )}
//         </Button>
//       </div>
//       <div className="flex flex-1 overflow-hidden">
//         <div
//           className={`flex-1 ${isSideBarOpen ? "mr-[400px]" : ""
//             } transition-all duration-300`}
//         >
//           <VideoPlayer
//             width="100%"
//             height="500px"
//             url={currentLecture?.videoUrl}
//             onProgressUpdate={setCurrentLecture}
//             progressData={currentLecture}
//           />
//           <div className="p-6 bg-white">
//             <h2 className="text-2xl font-bold mb-2">{currentLecture?.title}</h2>
//           </div>
//         </div>
//         <div
//           className={`fixed top-[64px] right-0 bottom-0 w-[400px] bg-white text-black border-l border-gray-700 transition-all duration-300 ${isSideBarOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//         >
//           <Tabs defaultValue="content" className="h-full flex flex-col">
//             <TabsList className="grid bg-gray-200 rounded-md w-full grid-cols-2 p-0 h-14">
//               <TabsTrigger
//                 value="content"
//                 className=" text-black rounded-none h-full"
//               >
//                 Course Content
//               </TabsTrigger>
//               <TabsTrigger
//                 value="overview"
//                 className=" text-black rounded-none h-full"
//               >
//                 Overview
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="content">
//               <ScrollArea className="h-full">
//                 <div className="p-4  space-y-4 text-black">
//                   {console.log("Course --->  : ", studentCurrentCourseProgress)}
//                   {studentCurrentCourseProgress?.courseDetails?.curriculum.map(
//                     (item) => (
//                       <div
//                         className="flex border-b items-center space-x-2  text-sm text-black font-bold cursor-pointer"
//                         key={item._id}
//                       >
//                         {item && (
//                           <>
//                             {item.videoUrl && (
//                               studentCurrentCourseProgress?.progress?.find(
//                                 (progressItem) => progressItem.lectureId === item._id
//                               )?.viewed ? (
//                                 <Check className="h-4 w-4 text-green-500" />
//                               ) : (
//                                 <Play className="h-4 w-4 text-secondary" />
//                               )
//                             )}

//                             {!item.videoUrl && item.pdfUrl && (
//                               studentCurrentCourseProgress?.progress?.find(
//                                 (progressItem) => progressItem.lectureId === item._id
//                               )?.viewed ? (
//                                 <Check className="h-4 w-4 text-green-500" />
//                               ) : (
//                                 <Folder className="h-4 w-4 text-secondary" />
//                               )
//                              // Assuming Files is an icon for PDF or similar
//                             )}
//                           </>
//                         )}

//                         <div className="flex justify-between w-full p-4 ">
//                           <span>{item?.title}</span>
//                           {item?.pdfUrl && (
//                             <a
//                             className=""
//                               href={item?.pdfUrl}
//                               onClick={async (e) => {
//                                 e.preventDefault(); // Prevent the default anchor behavior
//                                 window.open(
//                                   item.pdfUrl,
//                                   "PDFPopup",
//                                   "width=800,height=600,scrollbars=yes,resizable=yes"
//                                 ); // Opens the PDF in a popup in the same tab

//                                 if (!item?.videoUrl && item?.pdfUrl) {
//                                   // If the lecture has only a PDF
//                                   await markLectureAsViewedService(
//                                     auth?.user?._id,
//                                     studentCurrentCourseProgress?.courseDetails?._id,
//                                     item._id
//                                   );

//                                   // Fetch progress to update the current lecture
//                                   await fetchCurrentCourseProgress();
//                                 }
//                               }}
//                             >
//                               <Download />
//                             </a>

//                           )}

//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </ScrollArea>
//             </TabsContent>
//             <TabsContent value="overview" className="flex-1 overflow-hidden">
//               <ScrollArea className="h-full">
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold mb-4">About this course</h2>
//                   <p className="text-gray-400">
//                     {studentCurrentCourseProgress?.courseDetails?.description}
//                   </p>
//                 </div>
//               </ScrollArea>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>

//       <Dialog open={lockCourse}>
//         <DialogContent showOverlay={false} className="sm:w-[425px]">
//           <DialogHeader>
//             <DialogTitle>You can't view this page</DialogTitle>
//             <DialogDescription>
//               Please purchase this course to get access
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={showCourseCompleteDialog}>
//         <DialogContent showOverlay={false} className="sm:w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Congratulations!</DialogTitle>
//             <DialogDescription className="flex flex-col gap-3">
//               <Label>You have completed the course</Label>
//               <div className="flex flex-row gap-3">
//                 <Button
//                   onClick={() => navigate("/student-courses")}
//                 >
//                   My Courses Page
//                 </Button>
//                 <Button
//                   onClick={handleRewatchCourse}>
//                   Rewatch Course
//                 </Button>
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//     //  </div>
//   );
// }

// export default StudentViewCourseProgressPage;






































// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogOverlay,
//   DialogPortal,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import VideoPlayer from "@/components/video-player";
// import { AuthContext } from "@/context/auth-context";
// import { StudentContext } from "@/context/student-context";
// import {
//   getCurrentCourseProgressService,
//   markLectureAsViewedService,
//   resetCourseProgressService,
// } from "@/services";
// import {
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Files,
//   Folder,
//   Play,
// } from "lucide-react";
// import { useContext, useEffect, useState,useRef ,useCallback } from "react";
// import Confetti from "react-confetti";
// import { useNavigate, useParams } from "react-router-dom";
// import { Worker, Viewer } from "@react-pdf-viewer/core"; // PDF viewer
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { set } from "react-hook-form";

// function StudentViewCourseProgressPage() {
//   const navigate = useNavigate();
//   const [isPdfScrolledToEnd, setIsPdfScrolledToEnd] = useState(false);

  
//   const { auth } = useContext(AuthContext);
//   const { studentCurrentCourseProgress, setStudentCurrentCourseProgress } =
//     useContext(StudentContext);
//   const [lockCourse, setLockCourse] = useState(false);
//   const [currentLecture, setCurrentLecture] = useState(null);
//   const [showCourseCompleteDialog, setShowCourseCompleteDialog] =
//     useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [isSideBarOpen, setIsSideBarOpen] = useState(true);
//   const { id } = useParams();
  
//   // Reference to the PDF viewer container
//   const pdfViewerRef = useRef(null);
  
//   useEffect(() => {
//     const element = pdfViewerRef.current;
//     console.log("aayusheleuseeffect",element);
//     if (pdfViewerRef.current) {
//           const { scrollTop, scrollHeight, clientHeight } = pdfViewerRef.current;
//           console.log('scrollTop:', scrollTop, 'scrollHeight:', scrollHeight, 'clientHeight:', clientHeight);
//           if (scrollTop + clientHeight >= scrollHeight - 10) {
//             console.log('Scrolled to end');
//             setIsPdfScrolledToEnd(true);
//             console.log("setIsPdfScrolledToEndaayush")
//           }
//     }
//   // }, [handlePdfScroll]);
//   },);
//   // }, [setIsPdfScrolledToEnd]);
  

//   //mark lecture as viewsd
//   const markLectureAsViewed = useCallback(async () => {
//     console.log("markLectureAsViewed aayush sharma");
//     // if (isPdfScrolledToEnd && currentLecture?.pdfUrl) {
//     if (currentLecture?.pdfUrl) {
//       try {
//         const response = await markLectureAsViewedService(
//           auth?.user?._id,
//           studentCurrentCourseProgress?.courseDetails?._id,
//           currentLecture._id
//         );
//         if (response?.success) fetchCurrentCourseProgress();
//       } catch (error) {
//         console.error("Error marking lecture as viewed:", error);
//       }
//     }
//   }, [isPdfScrolledToEnd, currentLecture]);
  

//   async function fetchCurrentCourseProgress() {
//     const response = await getCurrentCourseProgressService(auth?.user?._id, id);
//     if (response?.success) {
//       if (!response?.data?.isPurchased) {
//         setLockCourse(true);
//       } else {
//         setStudentCurrentCourseProgress({
//           courseDetails: response?.data?.courseDetails,
//           progress: response?.data?.progress,
//         });

//         if (response?.data?.completed) {
//           setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
//           setShowCourseCompleteDialog(true);
//           setShowConfetti(true);

//           return;
//         }

//         if (response?.data?.progress?.length === 0) {
//           setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
//         } else {
//           const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
//             (acc, obj, index) => {
//               return acc === -1 && obj.viewed ? index : acc;
//             },
//             -1
//           );

//           setCurrentLecture(
//             response?.data?.courseDetails?.curriculum[
//               lastIndexOfViewedAsTrue + 1
//             ]
//           );
//         }
//       }
//     }
//   }

//   async function updateCourseProgress() {
//     if (currentLecture) {
//       const response = await markLectureAsViewedService(
//         auth?.user?._id,
//         studentCurrentCourseProgress?.courseDetails?._id,
//         currentLecture._id
//       );

//       if (response?.success) {
//         fetchCurrentCourseProgress();
//       }
//     }
//   }

//   async function handleRewatchCourse() {
//     const response = await resetCourseProgressService(
//       auth?.user?._id,
//       studentCurrentCourseProgress?.courseDetails?._id
//     );

//     if (response?.success) {
//       setCurrentLecture(null);
//       setShowConfetti(false);
//       setShowCourseCompleteDialog(false);
//       fetchCurrentCourseProgress();
//     }
//   }

//   useEffect(() => {
//     fetchCurrentCourseProgress();
//   }, [id]);

//   useEffect(() => {
//     if (currentLecture?.progressValue === 1) updateCourseProgress();
//   }, [currentLecture]);

//   useEffect(() => {
//     if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
//   }, [showConfetti]);


// useEffect(() => {
//   // console.log("markLectureAsViewed aayush sharma");
//   if (isPdfScrolledToEnd && currentLecture?.pdfUrl) {
//     console.log("markLectureAsViewed aayush sharma");
//     markLectureAsViewed();
//   }
// }, [isPdfScrolledToEnd]);

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {showConfetti && <Confetti />}
//       <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
//         <div className="flex items-center space-x-4">
//           <Button
//             onClick={() => navigate("/student-courses")}
//             className="text-black"
//             variant="ghost"
//             size="sm"
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//           </Button>
//           <h1 className="text-lg font-bold hidden md:block">
//             {studentCurrentCourseProgress?.courseDetails?.title}
//           </h1>
//         </div>
//         <Button
//           className=""
//           onClick={() => setIsSideBarOpen(!isSideBarOpen)}
//         >
//           {isSideBarOpen ? (
//             <ChevronRight className="h-5 w-5" />
//           ) : (
//             <ChevronLeft className="h-5 w-5" />
//           )}
//         </Button>
//       </div>
//       <div className="p-6 bg-white">
//             <h2 className="text-2xl font-bold mb-2">{currentLecture?.title}</h2>
//           </div>
//       <div className="flex flex-1 overflow-hidden">
      
//         <div
//           className={`flex-1 ${isSideBarOpen ? "mr-[400px]" : ""} transition-all duration-300`}
//         >
//           {currentLecture?.videoUrl ? (
//             <VideoPlayer
//               width="100%"
//               height="500px"
//               url={currentLecture?.videoUrl}
//               onProgressUpdate={setCurrentLecture}
//               progressData={currentLecture}
//             />
//           ) : currentLecture?.pdfUrl ? (
//             <div className="h-[500px] overflow-auto"
//                   ref={pdfViewerRef}
//                   // onScroll={handlePdfScroll}
//                    >
//               {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${"2.10.377"}/build/pdf.worker.min.js`}> */}
//               <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${"3.11.174"}/build/pdf.worker.min.js`}>
//                 <Viewer 
//                 fileUrl={currentLecture?.pdfUrl} 
               
//                 />
//               </Worker>
            
//             </div>
            
//           ) : null}

          
//         </div>
//         <div
//           className={`fixed top-[64px] right-0 bottom-0 w-[400px] bg-white text-black border-l border-gray-700 transition-all duration-300 ${isSideBarOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//         >
//           <Tabs defaultValue="content" className="h-full flex flex-col">
//             <TabsList className="grid bg-gray-200 rounded-md w-full grid-cols-2 p-0 h-14">
//               <TabsTrigger
//                 value="content"
//                 className=" text-black rounded-none h-full"
//               >
//                 Course Content
//               </TabsTrigger>
//               <TabsTrigger
//                 value="overview"
//                 className=" text-black rounded-none h-full"
//               >
//                 Overview
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="content">
//               <ScrollArea className="h-full">
//                 <div className="p-4 space-y-4 text-black">
//                   {studentCurrentCourseProgress?.courseDetails?.curriculum.map(
//                     (item) => (
//                       <div
//                         className="flex border-b items-center space-x-2 text-sm text-black font-bold cursor-pointer"
//                         key={item._id}
//                       >
//                         {item && (
//                           <>
//                             {item.videoUrl && (
//                               studentCurrentCourseProgress?.progress?.find(
//                                 (progressItem) => progressItem.lectureId === item._id
//                               )?.viewed ? (
//                                 <Check className="h-4 w-4 text-green-500" />
//                               ) : (
//                                 <Play className="h-4 w-4 text-secondary" />
//                               )
//                             )}

//                             {!item.videoUrl && item.pdfUrl && (
//                               studentCurrentCourseProgress?.progress?.find(
//                                 (progressItem) => progressItem.lectureId === item._id
//                               )?.viewed ? (
//                                 <Check className="h-4 w-4 text-green-500" />
//                               ) : (
//                                 <Folder className="h-4 w-4 text-secondary" />
//                               )
//                             )}
//                           </>
//                         )}

//                         <div className="flex justify-between w-full p-4 ">
//                           <span>{item?.title}</span>
//                           {item?.pdfUrl && (
//                             <a
//                               className=""
//                               href={item?.pdfUrl}
//                               onClick={async (e) => {
//                                 e.preventDefault();
//                                 window.open(
//                                   item.pdfUrl,
//                                   "PDFPopup",
//                                   "width=800,height=600,scrollbars=yes,resizable=yes"
//                                 );

//                                 if (!item?.videoUrl && item?.pdfUrl) {
//                                   await markLectureAsViewedService(
//                                     auth?.user?._id,
//                                     studentCurrentCourseProgress?.courseDetails?._id,
//                                     item._id
//                                   );

//                                   await fetchCurrentCourseProgress();
//                                 }
//                               }}
//                             >
//                               <Download />
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </ScrollArea>
//             </TabsContent>
//             <TabsContent value="overview" className="flex-1 overflow-hidden">
//               <ScrollArea className="h-full">
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold mb-4">About this course</h2>
//                   <p className="text-gray-400">
//                     {studentCurrentCourseProgress?.courseDetails?.overview}
//                   </p>
//                 </div>
//               </ScrollArea>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>

//       {showCourseCompleteDialog && (
//         <Dialog open={showCourseCompleteDialog} onOpenChange={setShowCourseCompleteDialog}>
//           <DialogOverlay />
//           <DialogPortal>
//             <DialogContent className="w-[350px] bg-white border border-gray-100 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-lg font-bold">Course Completed!</DialogTitle>
//                 <DialogDescription className="text-sm">
//                   Congratulations, you have completed the course. Would you like to rewatch it?
//                 </DialogDescription>
//               </DialogHeader>
//               <div className="flex justify-between space-x-4 mt-4">
//                 {/* <Button
//                   variant="outline"
//                   onClick={() => setShowCourseCompleteDialog(false)}
//                 >
//                   Close
//                 </Button> */}
//                 <Button onClick={handleRewatchCourse}>Rewatch</Button>
//                 <Button
//                 onClick={() => navigate("/student-courses")}
//                 >
//                 Next Course
//               </Button>
//               </div>
//             </DialogContent>
//           </DialogPortal>
//         </Dialog>
//       )}
//     </div>
//   );
// }

// export default StudentViewCourseProgressPage;


























    // Handle PDF scroll event
    // const handlePdfScroll = useCallback(() => {
    //   console.log("handlePdfScroll aayush sharma");
    //   if (pdfViewerRef.current) {
    //     const { scrollTop, scrollHeight, clientHeight } = pdfViewerRef.current;
    //     console.log('scrollTop:', scrollTop, 'scrollHeight:', scrollHeight, 'clientHeight:', clientHeight);
    //     if (scrollTop + clientHeight >= scrollHeight - 10) {
    //       console.log('Scrolled to end');
    //     }
    //   }
    // }, []);
    // Handle PDF scroll event
  // const handlePdfScroll = useCallback(() => {
  //   if (pdfViewerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = pdfViewerRef.current;
  //     console.log('scrollTop:', scrollTop, 'scrollHeight:', scrollHeight, 'clientHeight:', clientHeight);
  //     if (scrollTop + clientHeight >= scrollHeight - 10) {
  //       console.log('Scrolled to end');
  //     }
  //   }
  // }, []);

  // Add scroll listener as a fallback








































  
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  getCurrentCourseProgressService,
  markLectureAsViewedService,
  resetCourseProgressService,
} from "@/services";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Files,
  Folder,
  Play,
} from "lucide-react";
import { useContext, useEffect, useState,useRef ,useCallback } from "react";
import Confetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core"; // PDF viewer
import "@react-pdf-viewer/core/lib/styles/index.css";
import { set } from "react-hook-form";
import LiveSession from "./livesession";



function StudentViewCourseProgressPage() {
  const navigate = useNavigate();
  const [isPdfScrolledToEnd, setIsPdfScrolledToEnd] = useState(false);

  
  const { auth } = useContext(AuthContext);
  const { studentCurrentCourseProgress, setStudentCurrentCourseProgress } =
    useContext(StudentContext);
  const [lockCourse, setLockCourse] = useState(false);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [showCourseCompleteDialog, setShowCourseCompleteDialog] =
    useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { id } = useParams();
  
  
  // Reference to the PDF viewer container
  const pdfViewerRef = useRef(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  // Function to handle PDF scroll event
  const handlePdfScroll = useCallback(() => {
    if (!pdfViewerRef.current) return; // Ensure the container exists

    const { scrollTop, scrollHeight, clientHeight } = pdfViewerRef.current;

    // Check if the scroll position is at the bottom
    if (scrollHeight - scrollTop === clientHeight) {
      setIsPdfScrolledToEnd(true);
    } else {
      setIsPdfScrolledToEnd(false);
    }
  }, [pdfViewerRef]);

// Attach the scroll event listener to the PDF viewer (useEffect)
useEffect(() => {
  const pdfViewerElement = pdfViewerRef.current;
  if (pdfViewerElement) {
    pdfViewerElement.addEventListener("scroll", handlePdfScroll);
    handlePdfScroll(); // Call initially to set scroll state
  }

  return () => {
    if (pdfViewerElement) {
      pdfViewerElement.removeEventListener("scroll", handlePdfScroll);
    }
  };
}, [pdfViewerRef, handlePdfScroll]);

  // Function to mark lecture as viewed
  const markLectureAsViewed = useCallback(async () => {
    if (isPdfScrolledToEnd && currentLecture?.pdfUrl) {
      try {
        const response = await markLectureAsViewedService(
          auth?.user?._id,
          studentCurrentCourseProgress?.courseDetails?._id,
          currentLecture._id
        );
        if (response?.success) fetchCurrentCourseProgress();
      } catch (error) {
        console.error("Error marking lecture as viewed:", error);
      }
    }
  }, [isPdfScrolledToEnd, currentLecture]);

  
  

  async function fetchCurrentCourseProgress() {
    const response = await getCurrentCourseProgressService(auth?.user?._id, id);
    console.log(response.data.courseDetails.liveSession,"aayushfeteccurrentcourseprogress");
    if (response?.success) {
      if (!response?.data?.isPurchased) {
        setLockCourse(true);
      } else {
        setStudentCurrentCourseProgress({
          courseDetails: response?.data?.courseDetails,
          progress: response?.data?.progress,
          // liveSession:response?.data?.liveSession,
        });

        if (response?.data?.completed) {
          console.log(setStudentCurrentCourseProgress);
          setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
          setShowCourseCompleteDialog(true);
          setShowConfetti(true);

          return;
        }

        if (response?.data?.progress?.length === 0) {
          setCurrentLecture(response?.data?.courseDetails?.curriculum[0]);
        } else {
          const lastIndexOfViewedAsTrue = response?.data?.progress.reduceRight(
            (acc, obj, index) => {
              return acc === -1 && obj.viewed ? index : acc;
            },
            -1
          );

          setCurrentLecture(
            response?.data?.courseDetails?.curriculum[
              lastIndexOfViewedAsTrue + 1
            ]
          );
        }
      }
    }
  }

  async function updateCourseProgress() {
    if (currentLecture) {
      const response = await markLectureAsViewedService(
        auth?.user?._id,
        studentCurrentCourseProgress?.courseDetails?._id,
        currentLecture._id
      );

      if (response?.success) {
        fetchCurrentCourseProgress();
      }
    }
  }

  async function handleRewatchCourse() {
    const response = await resetCourseProgressService(
      auth?.user?._id,
      studentCurrentCourseProgress?.courseDetails?._id
    );

    if (response?.success) {
      setCurrentLecture(null);
      setShowConfetti(false);
      setShowCourseCompleteDialog(false);
      fetchCurrentCourseProgress();
    }
  }

  useEffect(() => {
    fetchCurrentCourseProgress();
  }, [id]);

  useEffect(() => {
    if (currentLecture?.progressValue === 1) updateCourseProgress();
  }, [currentLecture]);

  useEffect(() => {
    if (showConfetti) setTimeout(() => setShowConfetti(false), 15000);
  }, [showConfetti]);

  useEffect(() => {
    const mainContent = pdfViewerRef.current;
    console.log("yiyi",mainContent)
    if (mainContent)
        mainContent.onscroll = function () {
          console.log("hihi",mainContent)
          handlePdfScroll();
        };
}, []);


useEffect(() => {
  // console.log("markLectureAsViewed aayush sharma");
  if (isPdfScrolledToEnd && currentLecture?.pdfUrl) {
    console.log("markLectureAsViewed aayush sharma");
    markLectureAsViewed();
  }
}, [isPdfScrolledToEnd]);

  return (
    <div className="flex flex-col h-screen bg-white  ">
      {showConfetti && <Confetti />}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => navigate("/student-courses")}
            className="text-black"
            variant="ghost"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
          </Button>
          <h1 className="text-lg font-bold hidden md:block">
            {studentCurrentCourseProgress?.courseDetails?.title}
          </h1>
        </div>
        <Button
          className=""
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          {isSideBarOpen ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
    <div className="p-4 bg-white border-b border-gray-100">
      <div className="inline-flex items-center space-x-24 w-full">
      <h2 className="text-2xl font-bold">{currentLecture?.title}</h2>
      <Button
        onClick={openModal}
        className="bg-blue-500 text-white hover:bg-blue-600 rounded-md"
      >
        Join Live Session
      </Button>
    </div>
  </div>

    {isModalOpen && <LiveSession
     onClose={closeModal} 
     studentCurrentCourseProgress={studentCurrentCourseProgress}
     />}
    
      <div className="flex flex-1 overflow-hidden">
      
        <div
          className={`flex-1 ${isSideBarOpen ? "mr-[400px]" : ""} transition-all duration-300`}
        >
          {currentLecture?.videoUrl ? (
            <VideoPlayer
              width="100%"
              height="500px"
              url={currentLecture?.videoUrl}
              onProgressUpdate={setCurrentLecture}
              progressData={currentLecture}
            />
          ) : currentLecture?.pdfUrl ? (

      
        <div
          className="h-[500px] overflow-auto"
          ref={pdfViewerRef}
        >
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${"3.11.174"}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={currentLecture?.pdfUrl} />
          </Worker>
        </div>
      
    
            
          ) : null}

          
        </div>
        <div
          className={`fixed top-[64px] right-0 bottom-0 w-[400px] bg-white text-black border-l border-gray-700 transition-all duration-300 ${isSideBarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <Tabs defaultValue="content" className="h-full flex flex-col">
            <TabsList className="grid bg-gray-200 rounded-md w-full grid-cols-2 p-0 h-14">
              <TabsTrigger
                value="content"
                className=" text-black rounded-none h-full"
              >
                Course Content
              </TabsTrigger>
              <TabsTrigger
                value="overview"
                className=" text-black rounded-none h-full"
              >
                Overview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="content">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4 text-black">
                  {studentCurrentCourseProgress?.courseDetails?.curriculum.map(
                    (item) => (
                      <div
                        className="flex border-b items-center space-x-2 text-sm text-black font-bold cursor-pointer"
                        key={item._id}
                      >
                        {item && (
                          <>
                            {item.videoUrl && (
                              studentCurrentCourseProgress?.progress?.find(
                                (progressItem) => progressItem.lectureId === item._id
                              )?.viewed ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Play className="h-4 w-4 text-secondary" />
                              )
                            )}

                            {!item.videoUrl && item.pdfUrl && (
                              studentCurrentCourseProgress?.progress?.find(
                                (progressItem) => progressItem.lectureId === item._id
                              )?.viewed ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Folder className="h-4 w-4 text-secondary" />
                              )
                            )}
                          </>
                        )}

                        <div className="flex justify-between w-full p-4 ">
                          <span>{item?.title}</span>
                          {item?.pdfUrl && (
                            <a
                              className=""
                              href={item?.pdfUrl}
                              onClick={async (e) => {
                                e.preventDefault();
                                window.open(
                                  item.pdfUrl,
                                  "PDFPopup",
                                  "width=800,height=600,scrollbars=yes,resizable=yes"
                                );

                                // if (!item?.videoUrl && item?.pdfUrl) {
                                //   await markLectureAsViewedService(
                                //     auth?.user?._id,
                                //     studentCurrentCourseProgress?.courseDetails?._id,
                                //     item._id
                                //   );

                                //   await fetchCurrentCourseProgress();
                                // }
                              }}
                            >
                              <Download />
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="overview" className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">About this course</h2>
                  <p className="text-gray-400">
                    {studentCurrentCourseProgress?.courseDetails?.overview}
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {showCourseCompleteDialog && (
        <Dialog open={showCourseCompleteDialog} onOpenChange={setShowCourseCompleteDialog}>
          <DialogOverlay />
          <DialogPortal>
            <DialogContent className="w-[350px] bg-white border border-gray-100 rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold">Course Completed!</DialogTitle>
                <DialogDescription className="text-sm">
                  Congratulations, you have completed the course. Would you like to rewatch it?
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-between space-x-4 mt-4">
                {/* <Button
                  variant="outline"
                  onClick={() => setShowCourseCompleteDialog(false)}
                >
                  Close
                </Button> */}
                <Button onClick={handleRewatchCourse}>Rewatch</Button>
                <Button
                onClick={() => navigate("/student-courses")}
                >
                Next Course
              </Button>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </div>
  );
}

export default StudentViewCourseProgressPage;



