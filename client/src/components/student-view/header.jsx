// import { GraduationCap, TvMinimalPlay } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { useContext } from "react";
// import { AuthContext } from "@/context/auth-context";

// function StudentViewCommonHeader() {
//   const navigate = useNavigate();
//   const { resetCredentials } = useContext(AuthContext);

//   function handleLogout() {
//     resetCredentials();
//     sessionStorage.clear();
//   }

//   return (
//     <header className="flex items-center justify-between p-4 border-b relative">
//       <div className="flex items-center space-x-4">
//         <Link to="/home" className="flex items-center hover:text-black">
//           <GraduationCap className="h-10 w-8 mr-2 " />
//           {/* <span className="font-extrabold md:text-xl text-[14px]">
//             UpSkillPRO
//           </span> */}
//           {/* <Link to={"/"} className="flex items-center justify-center"> */}
//           {/* <GraduationCap className="h-10 w-8 mr-4" /> */}
//           <img className="font-extrabold text-md h-8 md:w-full w-2/3" src="/logo.png"></img>
//         {/* </Link> */}
//         </Link>
//         <div className="flex items-center space-x-1">
//           <Button
//             variant="ghost"
//             onClick={() => {
//               location.pathname.includes("/courses")
//                 ? null
//                 : navigate("/courses");
//             }}
//             // onClick={() => navigate("/courses")}
//             className="text-[14px] md:text-[16px] md:flex hidden font-medium"
//           >
//             Explore Courses
//           </Button>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="flex gap-4 items-center">
//           <div
//             onClick={() => navigate("/student-courses")}
//             className="flex cursor-pointer items-center gap-3"
//           >
//             <span className="font-extrabold md:text-xl md:flex hidden text-[14px]">
//               My Courses
//             </span>
//             <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
//           </div>
//           <Button
//           className='h-8'
//            onClick={handleLogout}
//           >Sign Out</Button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default StudentViewCommonHeader;




// import { GraduationCap, Search, SearchXIcon, TvMinimalPlay } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { useContext, useState } from "react";
// import { AuthContext } from "@/context/auth-context";

// function StudentViewCommonHeader() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();
//   const { resetCredentials } = useContext(AuthContext);

//   function handleLogout() {
//     resetCredentials();
//     sessionStorage.clear();
//   }

//   function handleSearchChange(event) {
//     setSearchQuery(event.target.value);
//   }

//   function handleSearchSubmit(event) {
//     event.preventDefault();
//     // Navigate with the search query and include it in the URL
//     if (searchQuery != '')
//       navigate(`/courses?search=${searchQuery}`);
//     setSearchQuery('');  // Clear search field after submission
//   }

//   return (
//     <>
//       <header className="flex items-center justify-between p-4 border-b relative">
//         <div className="flex items-center space-x-4">
//           <Link to="/home" className="flex items-center hover:text-black">
//             <GraduationCap className="h-10 w-8 mr-2" />
//             <img className="font-extrabold text-md h-8 md:w-full w-2/3" src="/logo.png" alt="Logo" />
//           </Link>
//           <div className="flex items-center space-x-1">
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 location.pathname.includes("/courses") ? null : navigate("/courses");
//               }}
//               className="text-[14px] md:text-[16px] md:flex hidden font-medium"
//             >
//               Explore Courses
//             </Button>
//           </div>
//         </div>


//         <div className="flex items-center space-x-4">
//           <div className="flex gap-4 items-center">

//             {/* Search Input */}
//             <form
//               onSubmit={handleSearchSubmit}
//               className="items-center hidden md:flex md:flex-row border rounded-full px-4 sm:space-y-0"
//             >
//               <input
//                 type="text"
//                 placeholder="Search Courses..."
//                 title="Search"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="outline-none p-2 rounded-md w-full sm:w-64"
//               />
//               <button
//                 type="submit"
//                 className="h-10 text-md w-full sm:w-auto"
//               >
//                 <Search className="text-gray-500"/>
//               </button>
//             </form>

//             <div onClick={() => navigate("/student-courses")} className="flex cursor-pointer items-center gap-3">
//               <span className="font-extrabold md:text-xl md:flex hidden text-[14px]">My Courses</span>
//               <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
//             </div>
//             <Button className='h-8' onClick={handleLogout}>Sign Out</Button>
//           </div>
//         </div>


//       </header>
//       <form
//         onSubmit={handleSearchSubmit}
//         className="flex items-center m-4 mr-8 w-[92%] md:hidden"
//       >
//         <div className="relative w-full flex">
//           <input
//             type="text"
//             placeholder="Search Courses"
//             title="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="border border-gray-300 p-2 pl-8 rounded-full w-full focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
//             aria-label="Search"
//           >
//             <Search className="w-5 h-5" />
//           </button>
//         </div>
//       </form>

//     </>
//   );
// }

// export default StudentViewCommonHeader;



import { CircleUserRound, GraduationCap, History, Search, TvMinimalPlay, User2Icon, UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "@/context/auth-context";
import ProfileModal from "./ProfileModal";
import { useToast } from "@/hooks/use-toast";


function StudentViewCommonHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);
  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout on component unmount or query change
    };
  }, [searchQuery]);

  // Fetch suggestions when debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Mock API call for suggestions
    const fetchSuggestions = async () => {
      // Simulating an API call with a static dataset
      const mockCourses = [
        // HTML Basics
        "HTML Basics",
        "HTML Forms and Inputs",
        "Semantic HTML",
        "HTML5 New Features",

        // CSS Basics
        "CSS Basics",
        "CSS Grid and Flexbox",
        "Responsive Web Design",
        "Advanced CSS Animations",
        "CSS Variables and Preprocessors",

        // JavaScript Basics
        "JavaScript Fundamentals",
        "ES6 and Beyond",
        "JavaScript Asynchronous Programming",
        "DOM Manipulation and Events",

        // React
        "React Basics",
        "Advanced React",
        "React Router and Navigation",
        "State Management with Redux",
        "React Context API",

        // C++ Basics
        "C++ Fundamentals",
        "OOP in C++",
        "C++ STL (Standard Template Library)",
        "Advanced C++ Concepts",

        // Python Basics
        "Python for Beginners",
        "Python Data Structures",
        "Python Object-Oriented Programming",
        "Python Web Development with Flask",
        "Python for Data Science",

        // Web Development
        "Building Your First Website",
        "Introduction to Web Development",
        "Full-Stack Web Development",

        // Backend
        "Node.js Basics",
        "Express.js Essentials",
        "REST API Development",
        "GraphQL Fundamentals",
        "Database Management with MongoDB",

        // Data Structures and Algorithms
        "Introduction to Data Structures",
        "Sorting and Searching Algorithms",
        "Dynamic Programming Concepts",
        "Graph Theory and Algorithms",

        // Additional Programming Topics
        "Version Control with Git and GitHub",
        "Introduction to TypeScript",
        "Building CLI Tools with Node.js",
        "Debugging and Testing in JavaScript",
        "Web Performance Optimization",

        // Other Topics
        "Introduction to UI/UX Design",
        "DevOps Essentials",
        "Cloud Computing for Beginners",
        "Docker and Containerization",
      ];

      const filtered = mockCourses.filter((course) =>
        course.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setSuggestions(filtered);
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/courses?search=${searchQuery}`);
      setSearchQuery("");
      setSuggestions([]); // Clear suggestions after search
    }
  }

  function handleSuggestionClick(suggestion) {
    setSearchQuery(suggestion);
    navigate(`/courses?search=${suggestion}`);
    setSuggestions([]); // Clear suggestions
  }
  const {toast} = useToast();
  const testingToast = () =>{
      toast({ title: "Welcome to Enlighto",
        variant: 'success'
      })
  }

  return (
    <>
      <header className="flex bg-[#FFFFFF] items-center justify-between p-4 border-b relative shadow-md">
        <div className="flex items-center w-full space-x-4 justify-between">
          <Link to="/home"  className="flex items-center hover:text-black">
            <img onClick={()=>testingToast()} className="font-extrabold text-md h-8 md:w-full w-2/3" src="/logo.png" alt="Logo" />
          </Link>
          <div className="flex gap-4 items-center">
            {/* Search Input */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative items-center hidden md:flex md:flex-row border rounded-full px-4 sm:space-y-0"
            >
              <input
                type="text"
                placeholder="Search Courses..."
                title="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="outline-none p-2 rounded-md w-full sm:w-64"
              />
              <button type="submit" className="h-10 text-md w-full sm:w-auto">
                <Search className="text-gray-500" />
              </button>
              {/* Autocomplete Dropdown */}
              {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="flex gap-2 items-center justify-start">
                        <History className="h-4" />
                        <p>
                          {suggestion}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </form>

          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4 gap-4 pl-10">
              <Link
                to='/courses'
                className=" cursor-pointer text-[14px] md:text-[16px] md:flex hidden"
              >
                Courses
              </Link>
              <Link
                to='/contact'
                className="cursor-pointer text-[14px] md:text-[16px] md:flex hidden">
                Contact
              </Link>
            </div>
            <UserDropdown
              className='h-16 w-16 text-xl'
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center m-4 mr-8 w-[92%] md:hidden relative"
      >
        <div className="relative w-full flex">
          <input
            type="text"
            placeholder="Search Courses"
            title="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 p-2 pl-8 rounded-full w-full focus:outline-none"
          />
          <button
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          {/* Autocomplete Dropdown for Mobile */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </>
  );
}

export const UserDropdown = ({ handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);

  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Icon */}
      <div
        className="cursor-pointer"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <CircleUserRound />
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
          <div
            onClick={openProfileModal}
            className="px-4 py-2 text-[14px] cursor-pointer hover:bg-gray-100 rounded-md"
          >
            My Profile
          </div>

          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-gray-100"
          >
            <span className="md:flex text-[14px]">My Learning</span>
          </div>
          <div
            className="px-4 py-2 text-[14px] cursor-pointer hover:bg-gray-100"
            onClick={handleLogout}
          >
            Sign Out
          </div>
        </div>
      )}
      {showProfileModal && (
        <ProfileModal onClose={closeProfileModal} />
      )}
    </div>
  );
};


export default StudentViewCommonHeader;
