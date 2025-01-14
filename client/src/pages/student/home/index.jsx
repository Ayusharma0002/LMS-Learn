// import { courseCategories } from "@/config";
// import banner from "@/assets/banner-img.png";
// import { Button } from "@/components/ui/button";
// import { useContext, useEffect, useState } from "react";
// import { StudentContext } from "@/context/student-context";
// import { motion } from "framer-motion";
// import {
//   checkCoursePurchaseInfoService,
//   fetchStudentViewCourseListService,
// } from "@/services";
// import { AuthContext } from "@/context/auth-context";
// import { useNavigate } from "react-router-dom";

// function StudentHomePage() {
//   const { studentViewCoursesList, setStudentViewCoursesList } =
//     useContext(StudentContext);
//   const { auth } = useContext(AuthContext);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search input
//   const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses

//   const navigate = useNavigate();

//   function handleNavigateToCoursesPage(getCurrentId) {
//     console.log(getCurrentId);
//     sessionStorage.removeItem("filters");
//     const currentFilter = {
//       category: [getCurrentId],
//     };

//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));

//     navigate("/courses");
//   }

//   async function fetchAllStudentViewCourses() {
//     const response = await fetchStudentViewCourseListService();
//     console.log(response);
//     if (response?.success) setStudentViewCoursesList(response?.data);
//   }

//   async function handleCourseNavigate(getCurrentCourseId) {
//     const response = await checkCoursePurchaseInfoService(
//       getCurrentCourseId,
//       auth?.user?._id
//     );

//     if (response?.success) {
//       if (response?.data) {
//         navigate(`/course-progress/${getCurrentCourseId}`);
//       } else {
//         navigate(`/course/details/${getCurrentCourseId}`);
//       }
//     }
//   }

//   // Filter courses based on search term
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredCourses(studentViewCoursesList || []);
//     } else {
//       const filtered = studentViewCoursesList.filter(
//         (course) =>
//           course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           course?.description?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredCourses(filtered);
//     }
//   }, [searchTerm, studentViewCoursesList]);

//   useEffect(() => {
//     fetchAllStudentViewCourses();
//   }, []);

//   return (
//     // <div className="min-h-screen student-home bg-white">
//     //   <section className="flex flex-col lg:flex-row items-center justify-between md:py-4 sm:pt-4 px-4 lg:px-8">
//     //     <div className="lg:w-1/2 lg:pr-12">
//     //       <h1 className="md:text-4xl text-3xl font-bold mb-2 text-secondary">
//     //         Learning that gets you
//     //       </h1>
//     //       <p className="md:text-xl text-sm mb-4 text-secondary">
//     //         Skills for your present and your future. Get Started with US
//     //       </p>
//     //     </div>
//     //     <div className="lg:w-full mb-8 lg:mb-0">
//     //       <img
//     //         src={banner}
//     //         width={600}
//     //         height={400}
//     //         className="w-full h-auto rounded-lg shadow-lg"
//     //       />
//     //     </div>
//     //   </section>
//     //   <section className="py-8 px-4 lg:px-8 bg-gray-100">
//     //     <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//     //       <h2 className="text-2xl font-bold text-secondary">Course Categories</h2>
//     //       {/* <input
//     //         type="text"
//     //         placeholder="Search courses..."
//     //         value={searchTerm}
//     //         onChange={(e) => setSearchTerm(e.target.value)}
//     //         className="border rounded-md px-4 py-2 text-sm w-full md:w-1/2"
//     //       /> */}
//     //     </div>
//     //     <div className="grid grid-cols-2 text-primary sm:grid-cols-3 md:grid-cols-4 gap-4">
//     //       {courseCategories.map((categoryItem) => (
//     //         <Button
//     //           className="justify-start"
//     //           variant="outline"
//     //           key={categoryItem.id}
//     //           onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
//     //         >
//     //           {categoryItem.label}
//     //         </Button>
//     //       ))}
//     //     </div>
//     //   </section>
//     //   <section className="py-12 px-4 lg:px-8">
//     //     <h2 className="text-2xl font-bold mb-6  text-secondary">Featured Courses</h2>
//     //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//     //       {filteredCourses && filteredCourses.length > 0 ? (
//     //         filteredCourses.map((courseItem) => (
//     //           <div
//     //             key={courseItem.id}
//     //             onClick={() => handleCourseNavigate(courseItem?._id)}
//     //             className="border rounded-lg overflow-hidden shadow cursor-pointer"
//     //           >
//     //             <img
//     //               src={courseItem?.image}
//     //               width={300}
//     //               height={150}
//     //               className="w-full h-40 object-cover"
//     //             />
//     //             <div className="p-4">
//     //               <h3 className="font-bold mb-2">{courseItem?.title}</h3>
//     //               <p className="text-sm text-gray-700 mb-2">
//     //                 {courseItem?.instructorName}
//     //               </p>
//     //               <p className="font-bold text-[16px]">
//     //               ₹{courseItem?.pricing}
//     //               </p>
//     //             </div>
//     //           </div>
//     //         ))
//     //       ) : (
//     //         <h1>No Courses Found</h1>
//     //       )}
//     //     </div>
//     //   </section>
//     // </div>

//     <div className="min-h-screen student-home bg-white">
//       < section className = "bg-gradient-to-r from-blue-500 to-indigo-600 text-white" >
//         <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
//                 Learning that gets you
//               </h1>
//               <p className="text-xl mb-8">
//                 Skills for your present and your future. Get started with us today.
//               </p>
//               <Button
//                 className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300"
//                 onClick={() => navigate("/courses")}
//               >
//                 Explore Courses
//               </Button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               className="lg:w-1/2"
//             >
//               <img
//                 src={banner}
//                 alt="Learning Banner"
//                 className="w-full h-auto rounded-lg shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section >

//     {/* Course Categories */ }
//     < section className = "py-16 px-4 lg:px-8 bg-gray-100" >
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Course Categories</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {courseCategories.map((categoryItem) => (
//             <motion.div
//               key={categoryItem.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 className="w-full justify-center text-center py-4 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-lg shadow-md transition-all duration-300"
//                 onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
//               >
//                 {categoryItem.label}
//               </Button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       </section >

//     {/* Featured Courses */ }
//     < section className = "py-16 px-4 lg:px-8" >
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Courses</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredCourses && filteredCourses.length > 0 ? (
//             filteredCourses.map((courseItem) => (
//               <motion.div
//                 key={courseItem.id}
//                 whileHover={{ y: -5 }}
//                 onClick={() => handleCourseNavigate(courseItem?._id)}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
//               >
//                 <img
//                   src={courseItem?.image}
//                   alt={courseItem?.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="font-bold text-xl mb-2 text-gray-800">{courseItem?.title}</h3>
//                   <p className="text-sm text-gray-600 mb-4">{courseItem?.instructorName}</p>
//                   <p className="font-bold text-2xl text-blue-600">₹{courseItem?.pricing}</p>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-gray-500 text-xl">
//               No Courses Found
//             </div>
//           )}
//         </div>
//       </div>
//       </section >

//     {/* Testimonials */ }
//     < section className = "py-16 px-4 lg:px-8 bg-gray-100" >
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Students Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { name: "Alex Johnson", role: "Web Developer", content: "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date." },
//             { name: "Sarah Lee", role: "Data Scientist", content: "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned." },
//             { name: "Mike Chen", role: "UX Designer", content: "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job." }
//           ].map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-lg shadow-md"
//             >
//               <p className="text-gray-600 mb-4">{testimonial.content}</p>
//               <div className="font-bold text-gray-800">{testimonial.name}</div>
//               <div className="text-sm text-gray-500">{testimonial.role}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       </section >
//     </div >
//   );
// }

// export default StudentHomePage;
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { courseCategories } from "@/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StudentContext } from "@/context/student-context";
import { AuthContext } from "@/context/auth-context";
// import AiIcon from '@/assets/ai-icon.png'
// import BackendIcon from '@/assets/backend-icon.png'
// import MlIcon from '@/assets/ml-icon.png'
// import MobileDevIcon from '@/assets/mobiledev-icon.png'
// import EbDevIcon from '@/assets/webdev-icon.png'
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { Book, Code, Database, TypeIcon as Design, Globe, Home, Search, Star, Users } from 'lucide-react';
import HeroSection from "./HeroSection";
import CoreOfferings from "./CoreOfferings";
import TestimonialsSection from "./Testimonials";
import Footer from "./Footer";

const categoryIcons = {
  "web-development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>

  ),
  "mobile-development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>

  ),
  "data-science": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#2196F3"
      className="w-6 h-6"
    >
      <path d="M3 3h18v2H3zm2 4h14v2H5zm-2 4h18v2H3zm2 4h14v2H5zm-2 4h18v2H3z" />
    </svg>
  ),
  "ui-ux-design": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#E91E63"
      className="w-6 h-6"
    >
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  "machine-learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#673AB7"
      className="w-6 h-6"
    >
      <path d="M9 3l3 3 3-3v7h4v6h-4v7l-3-3-3 3V3z" />
    </svg>
  ),
  "soft-skills": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FFC107"
      className="w-6 h-6"
    >
      <path d="M12 3l3 3-3 3-3-3 3-3zm-6 7h12v2H6zm-3 4h18v2H3z" />
    </svg>
  ),
};


function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } = useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();

  const handleNavigateToCoursesPage = (getCurrentId) => {
    sessionStorage.removeItem("filters");
    const currentFilter = { category: [getCurrentId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  const fetchAllStudentViewCourses = async () => {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  };

  const handleCourseNavigate = async (getCurrentCourseId) => {
    const response = await checkCoursePurchaseInfoService(getCurrentCourseId, auth?.user?._id);
    if (response?.success) {
      navigate(response?.data ? `/course-progress/${getCurrentCourseId}` : `/course/details/${getCurrentCourseId}`);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCourses(studentViewCoursesList || []);
    } else {
      const filtered = studentViewCoursesList.filter(
        (course) =>
          course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course?.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, studentViewCoursesList]);

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen student-home bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Course Categories */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">Explore Our Course Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {courseCategories.map((categoryItem) => (
              <motion.div
                key={categoryItem.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Button
                  className="w-full h-full flex flex-col items-center justify-center py-6 px-4 bg-white hover:bg-blue-50 text-blue-600 transition-all duration-300"
                  onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
                >
                  <div className="text-4xl mb-4">

                    {categoryIcons[categoryItem.id] || <Book className="w-10 h-10" />}
                  </div>
                  <span className="text-center font-medium">{categoryItem.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">Featured Courses</h2>
            {/* <div className="relative">
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses && filteredCourses.length > 0 ? (
              filteredCourses.map((courseItem) => (
                <motion.div
                  key={courseItem.id}
                  whileHover={{ y: -5 }}
                  onClick={() => handleCourseNavigate(courseItem?._id)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={courseItem?.image}
                      alt={courseItem?.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{courseItem?.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{courseItem?.instructorName}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-2xl text-[#26c6da]">₹{courseItem?.pricing}</p>
                      <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-xl">
                No Courses Found
              </div>
            )}
          </div>
          <div className="flex justify-center mt-10 items-center">
            <Button
              variant="outline"
              className="text-black border-black bg-white 
             hover:bg-[#2e9ba9] hover:text-white"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
      <CoreOfferings />
      {/* Testimonials */}
      <TestimonialsSection />
      <Footer />
    </div>
  )
};
export default StudentHomePage;
