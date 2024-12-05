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




import { GraduationCap, Search, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    // Navigate with the search query and include it in the URL
    if (searchQuery != '')
      navigate(`/courses?search=${searchQuery}`);
    setSearchQuery('');  // Clear search field after submission
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b relative">
        <div className="flex items-center space-x-4">
          <Link to="/home" className="flex items-center hover:text-black">
            <GraduationCap className="h-10 w-8 mr-2" />
            <img className="font-extrabold text-md h-8 md:w-full w-2/3" src="/logo.png" alt="Logo" />
          </Link>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => {
                location.pathname.includes("/courses") ? null : navigate("/courses");
              }}
              className="text-[14px] md:text-[16px] md:flex hidden font-medium"
            >
              Explore Courses
            </Button>
          </div>
        </div>


        <div className="flex items-center space-x-4">
          <div className="flex gap-4 items-center">

            {/* Search Input */}
            <form
              onSubmit={handleSearchSubmit}
              className="items-center hidden md:flex md:flex-row sm:space-x-2 sm:space-y-0"
            >
              <input
                type="text"
                placeholder="Search Courses"
                title="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border p-2 rounded-md w-full sm:w-64"
              />
              <Button
                type="submit"
                className="h-10 text-md w-full sm:w-auto"
              >
                Search
              </Button>
            </form>

            <div onClick={() => navigate("/student-courses")} className="flex cursor-pointer items-center gap-3">
              <span className="font-extrabold md:text-xl md:flex hidden text-[14px]">My Courses</span>
              <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
            </div>
            <Button className='h-8' onClick={handleLogout}>Sign Out</Button>
          </div>
        </div>


      </header>
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center m-4 mr-8 w-[92%] md:hidden"
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
        </div>
      </form>

    </>
  );
}

export default StudentViewCommonHeader;
