// import { courseCategories } from "@/config";
// // import banner from "../../../../public/banner-img.png";
// import banner from "@/assets/banner-img.png";
// import { Button } from "@/components/ui/button";
// import { useContext, useEffect } from "react";
// import { StudentContext } from "@/context/student-context";
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

//   useEffect(() => {
//     fetchAllStudentViewCourses();
//   }, []);

//   return (
//     <div className="min-h-screen student-home bg-white">
//       <section className="flex flex-col lg:flex-row items-center justify-between md:py-4 sm:pt-4 px-4 lg:px-8">
//         <div className="lg:w-1/2 lg:pr-12">
//           <h1 className="md:text-4xl text-3xl font-bold mb-2">Learning that gets you</h1>
//           <p className="md:text-xl text-sm mb-4">
//             Skills for your present and your future. Get Started with US
//           </p>
//         </div>
//         <div className="lg:w-full mb-8 lg:mb-0">
//           <img
//             src={banner}
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </section>
//       <section className="py-8 px-4 lg:px-8 bg-gray-100">
//         <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {courseCategories.map((categoryItem) => (
//             <Button
//               className="justify-start"
//               variant="outline"
//               key={categoryItem.id}
//               onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
//             >
//               {categoryItem.label}
//             </Button>
//           ))}
//         </div>
//       </section>
//       <section className="py-12 px-4 lg:px-8">
//         <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
//             studentViewCoursesList.map((courseItem) => (
//               <div
//                key={courseItem.id}
//                 onClick={() => handleCourseNavigate(courseItem?._id)}
//                 className="border rounded-lg overflow-hidden shadow cursor-pointer"
//               >
//                 <img
//                   src={courseItem?.image}
//                   width={300}
//                   height={150}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-bold mb-2">{courseItem?.title}</h3>
//                   <p className="text-sm text-gray-700 mb-2">
//                     {courseItem?.instructorName}
//                   </p>
//                   <p className="font-bold text-[16px]">
//                     ${courseItem?.pricing}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h1>No Courses Found</h1>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default StudentHomePage;




























import { courseCategories } from "@/config";
// import banner from "../../../../public/banner-img.png";
import banner from "@/assets/banner-img.png";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses

  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    console.log(response);
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    const response = await checkCoursePurchaseInfoService(
      getCurrentCourseId,
      auth?.user?._id
    );

    if (response?.success) {
      if (response?.data) {
        navigate(`/course-progress/${getCurrentCourseId}`);
      } else {
        navigate(`/course/details/${getCurrentCourseId}`);
      }
    }
  }

  // Filter courses based on search term
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
    <div className="min-h-screen student-home bg-white">
      <section className="flex flex-col lg:flex-row items-center justify-between md:py-4 sm:pt-4 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="md:text-4xl text-3xl font-bold mb-2 text-secondary">
            Learning that gets you
          </h1>
          <p className="md:text-xl text-sm mb-4 text-secondary">
            Skills for your present and your future. Get Started with US
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-8 px-4 lg:px-8 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary">Course Categories</h2>
          {/* <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-4 py-2 text-sm w-full md:w-1/2"
          /> */}
        </div>
        <div className="grid grid-cols-2 text-primary sm:grid-cols-3 md:grid-cols-4 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
              className="justify-start"
              variant="outline"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold mb-6  text-secondary">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses && filteredCourses.length > 0 ? (
            filteredCourses.map((courseItem) => (
              <div
                key={courseItem.id}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="border rounded-lg overflow-hidden shadow cursor-pointer"
              >
                <img
                  src={courseItem?.image}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-[16px]">
                  ₹{courseItem?.pricing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>No Courses Found</h1>
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
