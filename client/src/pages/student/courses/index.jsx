// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { filterOptions, sortOptions } from "@/config";
// import { Label } from "@/components/ui/label";
// import { AuthContext } from "@/context/auth-context";
// import { StudentContext } from "@/context/student-context";
// import {
//   checkCoursePurchaseInfoService,
//   fetchStudentViewCourseListService,
// } from "@/services";
// import { ArrowUpDownIcon } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useSearchParams } from "react-router-dom";
// import { useNavigate} from "react-router-dom";

// function createSearchParamsHelper(filterParams) {
//   const queryParams = [];

//   for (const [key, value] of Object.entries(filterParams)) {
//     if (Array.isArray(value) && value.length > 0) {
//       const paramValue = value.join(",");

//       queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
//     }
//   }

//   return queryParams.join("&");
// }

// function StudentViewCoursesPage() {
//   const [sort, setSort] = useState("price-lowtohigh");
//   const [filters, setFilters] = useState({});
//   const [searchParams, setSearchParams] = useSearchParams();
// //   useSearchParams : a convenenite wrapper for reading and writing serach paraemters via the URLSearchParams interaface
//   const {
//     studentViewCoursesList,
//     setStudentViewCoursesList,
//     loadingState,
//     setLoadingState,
//   } = useContext(StudentContext);
//   const navigate = useNavigate();
//   const { auth } = useContext(AuthContext);

//   function handleFilterOnChange(getSectionId, getCurrentOption) {
//     let cpyFilters = { ...filters };
//     const indexOfCurrentSeection =
//       Object.keys(cpyFilters).indexOf(getSectionId);

//     console.log(indexOfCurrentSeection, getSectionId);
//     if (indexOfCurrentSeection === -1) {
//       cpyFilters = {
//         ...cpyFilters,
//         [getSectionId]: [getCurrentOption.id],
//       };

//       console.log(cpyFilters);
//     } else {
//       const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
//         getCurrentOption.id
//       );

//       if (indexOfCurrentOption === -1)
//         cpyFilters[getSectionId].push(getCurrentOption.id);
//       else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
//     }

//     setFilters(cpyFilters);
//     sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
//   }

//   async function fetchAllStudentViewCourses(filters, sort) {
//     const query = new URLSearchParams({
//       ...filters,
//       sortBy: sort,
//     });
//     const response = await fetchStudentViewCourseListService(query);
//     if (response?.success) {
//       setStudentViewCoursesList(response?.data);
//       setLoadingState(false);
//     }
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
//     const buildQueryStringForFilters = createSearchParamsHelper(filters);
//     setSearchParams(new URLSearchParams(buildQueryStringForFilters));
//   }, [filters]);

//   useEffect(() => {
//     setSort("price-lowtohigh");
//     setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
//   }, []);

//   useEffect(() => {
//     if (filters !== null && sort !== null)
//       fetchAllStudentViewCourses(filters, sort);
//   },[filters, sort]);

//   useEffect(() => {
//     return () => {
//       sessionStorage.removeItem("filters");
//     };
//   }, []);

//   console.log(loadingState, "loadingState");

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">All Courses</h1>
//       <div className="flex flex-col md:flex-row gap-4">
//         <aside className="w-full md:w-64 space-y-4">
//           <div>
//             {Object.keys(filterOptions).map((ketItem) => (
                
//               <div className="p-4 border-b" key={ketItem.id}>
//                 <h3 className="font-bold mb-3">
//                 {ketItem.toUpperCase()}
//                 </h3>
//                 <div className="grid gap-2 mt-2">
//                 {filterOptions[ketItem].map((option) => (
//                    <Label key={option.id} className="flex font-medium items-center gap-3">
//                      <Checkbox
//                        checked={filters &&
//                           Object.keys(filters).length > 0 &&
//                           filters[ketItem] &&
//                           filters[ketItem].indexOf(option.id) > -1} // You may want to add a dynamic value here based on state or props
//                        onCheckedChange={() => handleFilterOnChange(ketItem, option)}
//                      />
//                      {option.label}
//                    </Label>
//                  ))}

//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>
//         <main className="flex-1">
//           <div className="flex justify-end items-center mb-4 gap-5">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="flex items-center gap-2 p-5"
//                 >
//                   <ArrowUpDownIcon className="h-4 w-4" />
//                   <span className="text-[16px] font-medium">Sort By</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-[180px]">
//                 <DropdownMenuRadioGroup
//                   value={sort}
//                   onValueChange={(value) => setSort(value)}
//                 >
//                   {sortOptions.map((sortItem) => (
//                     <DropdownMenuRadioItem
//                       value={sortItem.id}
//                       key={sortItem.id}
//                     >
//                       {sortItem.label}
//                     </DropdownMenuRadioItem>
//                   ))}
//                 </DropdownMenuRadioGroup>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <span className="text-sm text-black font-bold">
//               {studentViewCoursesList.length} Results
//             </span>
//           </div>
//           <div className="space-y-4">
//             {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
//               studentViewCoursesList.map((courseItem) => (
//                 <Card
//                   onClick={() => handleCourseNavigate(courseItem?._id)}
//                   // onClick={() => navigate(`/course/details/${courseItem?._id}`)}
//                   className="cursor-pointer"
//                   key={courseItem?._id}
//                 >
//                   <CardContent className="flex gap-4 p-4">
//                     <div className="w-48 h-32 flex-shrink-0">
//                       <img
//                         src={courseItem?.image}
//                         className="w-ful h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <CardTitle className="text-xl mb-2">
//                         {courseItem?.title}
//                       </CardTitle>
//                       <p className="text-sm text-gray-600 mb-1">
//                         Created By{" "}
//                         <span className="font-bold">
//                           {courseItem?.instructorName}
//                         </span>
//                       </p>
//                       <p className="text-[16px] text-gray-600 mt-3 mb-2">
//                         {`${courseItem?.curriculum?.length} ${
//                           courseItem?.curriculum?.length <= 1
//                             ? "Lecture"
//                             : "Lectures"
//                         } - ${courseItem?.level.toUpperCase()} Level`}
//                       </p>
//                       <p className="font-bold text-lg">
//                         ${courseItem?.pricing}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             ) : loadingState ? (
//               <Skeleton />
//             ) : (
//               <h1 className="font-extrabold text-4xl">No Courses Found</h1>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default StudentViewCoursesPage;


// import { useState, useEffect, useContext } from "react";
// import { useSearchParams } from "react-router-dom";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { checkCoursePurchaseInfoService, fetchStudentViewCourseListService } from "@/services";
// import { StudentContext } from "@/context/student-context";

// function StudentViewCoursesPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const { studentViewCoursesList, setStudentViewCoursesList } = useContext(StudentContext);

//   useEffect(() => {
//     // Fetch courses when the component loads
//     async function fetchCourses() {
//       const response = await fetchStudentViewCourseListService();
//       if (response?.success) {
//         setStudentViewCoursesList(response.data);
//       }
//     }
//     fetchCourses();
//   }, [setStudentViewCoursesList]);

//   useEffect(() => {
//     // Filter courses based on the search query
//     const filtered = studentViewCoursesList.filter(course => 
//       course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredCourses(filtered);
//   }, [studentViewCoursesList, searchQuery]);

//   useEffect(() => {
//     // Update search query in URL when the search changes
//     if (searchQuery) {
//       setSearchParams({ search: searchQuery });
//     } else {
//       setSearchParams({});
//     }
//   }, [searchQuery, setSearchParams]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">All Courses</h1>
//       <div className="flex flex-col md:flex-row gap-4">
//         <main className="flex-1">
//           <div className="space-y-4">
//             {filteredCourses.length > 0 ? (
//               filteredCourses.map(courseItem => (
//                 <Card key={courseItem?._id} className="cursor-pointer" onClick={() => navigate(`/course/details/${courseItem._id}`)}>
//                   <CardContent className="flex gap-4 p-4">
//                     <div className="w-48 h-32 flex-shrink-0">
//                       <img src={courseItem?.image} className="w-full h-full object-cover" />
//                     </div>
//                     <div className="flex-1">
//                       <CardTitle className="text-xl mb-2">{courseItem?.title}</CardTitle>
//                       <p className="text-sm text-gray-600 mb-1">{courseItem?.description}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             ) : (
//               <p>No courses found matching your search.</p>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default StudentViewCoursesPage;







import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { filterOptions, sortOptions } from "@/config";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { ArrowUpDownIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSeection =
      Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSeection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption.id],
      };
    } else {
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
        getCurrentOption.id
      );

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort) {
    const query = new URLSearchParams({
      ...filters,
      sortBy: sort,
    });
    const response = await fetchStudentViewCourseListService(query);
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
      setLoadingState(false);
    }
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

  useEffect(() => {
    const buildQueryStringForFilters = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(buildQueryStringForFilters));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters !== null && sort !== null)
      fetchAllStudentViewCourses(filters, sort);
  }, [filters, sort]);

  useEffect(() => {
    const filtered = studentViewCoursesList.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [studentViewCoursesList, searchQuery]);

  useEffect(() => {
    // Update search query in URL when the search changes
    if (searchQuery) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("filters");
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-8 text-secondary text-[#1a237e]">All Courses</h1>
  <div className="flex flex-col md:flex-row gap-8">
    <aside className="w-full md:w-64 space-y-4">
      <div>
        {Object.keys(filterOptions).map((ketItem) => (
          <div className="p-4 border-b" key={ketItem}>
            <h3 className="font-bold mb-3">{ketItem.toUpperCase()}</h3>
            <div className="grid gap-2 mt-2">
              {filterOptions[ketItem].map((option) => (
                <Label
                  key={option.id}
                  className="flex text-primary font-medium items-center gap-3"
                >
                  <Checkbox
                    checked={
                      filters &&
                      Object.keys(filters).length > 0 &&
                      filters[ketItem] &&
                      filters[ketItem].indexOf(option.id) > -1
                    }
                    onCheckedChange={() => handleFilterOnChange(ketItem, option)}
                  />
                  {option.label}
                </Label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
    <main className="flex-1">
      <div className="flex justify-between items-center mb-8 gap-5">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 p-5"
            >
              <ArrowUpDownIcon className="h-4 w-4" />
              <span className="text-[16px] font-medium">Sort By</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[180px]">
            <DropdownMenuRadioGroup
              value={sort}
              onValueChange={(value) => setSort(value)}
            >
              {sortOptions.map((sortItem) => (
                <DropdownMenuRadioItem value={sortItem.id} key={sortItem.id}>
                  {sortItem.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((courseItem) => (
            
             <motion.div
               key={courseItem.id}
               onClick={() => handleCourseNavigate(courseItem?._id)}
               className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
               whileHover={{ y: -5 }}
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
                   <p className="text-sm text-gray-600 mb-1">
                   Created By{" "}
                   <span className="font-bold">
                     {courseItem?.instructorName}
                   </span>
                   </p>
               {/* // <p className="text-sm text-gray-600 mb-4">{courseItem?.instructorName}</p> */}
                    <p className="text-[16px] text-gray-600 mt-3 mb-2">
                    {` ${courseItem?.level.toUpperCase()} Level - ${courseItem?.curriculum?.length} ${
                      courseItem?.curriculum?.length <= 1
                        ? "Lecture"
                        : "Lectures"
                    }
                    `}
                    </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-2xl text-[#26c6da]">₹{courseItem?.pricing}</p>
                  <Button
                    variant="outline"
                    className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
              </motion.div>
            
          ))
        ) : loadingState ? (
          <Skeleton />
        ) : (
          <h1 className="font-extrabold text-4xl text-center">No Courses Found</h1>
        )}
      </div>
    </main>
  </div>
</div>
  
  );
}

export default StudentViewCoursesPage;

















































































// <div className="container mx-auto p-4">
// <h1 className="text-3xl font-bold mb-4 text-secondary">All Courses</h1>
// <div className="flex flex-col md:flex-row gap-4">
//   <aside className="w-full md:w-64 space-y-4">
//     <div>
//       {Object.keys(filterOptions).map((ketItem) => (
//         <div className="p-4 border-b" key={ketItem}>
//           <h3 className="font-bold mb-3">{ketItem.toUpperCase()}</h3>
//           <div className="grid gap-2 mt-2">
//             {filterOptions[ketItem].map((option) => (
//               <Label
//                 key={option.id}
//                 className="flex text-primary font-medium items-center gap-3"
//               >
//                 <Checkbox
//                   checked={
//                     filters &&
//                     Object.keys(filters).length > 0 &&
//                     filters[ketItem] &&
//                     filters[ketItem].indexOf(option.id) > -1
//                   }
//                   onCheckedChange={() =>
//                     handleFilterOnChange(ketItem, option)
//                   }
//                 />
//                 {option.label}
//               </Label>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </aside>
//   <main className="flex-1">
//     <div className="flex justify-between items-center mb-4 gap-5">
//       <input
//         type="text"
//         placeholder="Search courses..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="border rounded px-3 py-2 w-full"
//       />
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="outline"
//             size="sm"
//             className="flex items-center gap-2 p-5"
//           >
//             <ArrowUpDownIcon className="h-4 w-4" />
//             <span className="text-[16px] font-medium">Sort By</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-[180px]">
//           <DropdownMenuRadioGroup
//             value={sort}
//             onValueChange={(value) => setSort(value)}
//           >
//             {sortOptions.map((sortItem) => (
//               <DropdownMenuRadioItem
//                 value={sortItem.id}
//                 key={sortItem.id}
//               >
//                 {sortItem.label}
//               </DropdownMenuRadioItem>
//             ))}
//           </DropdownMenuRadioGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//     <div className="space-y-4">
//       {filteredCourses.length > 0 ? (
//         filteredCourses.map((courseItem) => (
//           <Card
//             onClick={() => handleCourseNavigate(courseItem?._id)}
//             className="cursor-pointer"
//             key={courseItem?._id}
//           >
//             <CardContent className="flex gap-4 p-4">
//               <div className="w-48 h-32 flex-shrink-0">
//                 <img
//                   src={courseItem?.image}
//                   className="w-full h-full object-cover"
//                   alt="Course"
//                 />
//               </div>
//               <div className="flex-1">
//                 <CardTitle className="text-xl mb-2">
//                   {courseItem?.title}
//                 </CardTitle>
//                 <p className="text-sm text-gray-600 mb-1">
//                   Created By{" "}
//                   <span className="font-bold">
//                     {courseItem?.instructorName}
//                   </span>
//                 </p>
//                 <p className="text-[16px] text-gray-600 mt-3 mb-2">
//                   {`${courseItem?.curriculum?.length} ${
//                     courseItem?.curriculum?.length <= 1
//                       ? "Lecture"
//                       : "Lectures"
//                   } - ${courseItem?.level.toUpperCase()} Level`}
//                 </p>
//                 <p className="font-bold text-lg">
//                 ₹{courseItem?.pricing}
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         ))
//       ) : loadingState ? (
//         <Skeleton />
//       ) : (
//         <h1 className="font-extrabold text-4xl">No Courses Found</h1>
//       )}
//     </div>
//   </main>
// </div>
// </div>