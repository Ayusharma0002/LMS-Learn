// import { Outlet, useLocation } from "react-router-dom";
// import StudentViewCommonHeader from "./header";

// function StudentViewCommonLayout() {
//   const location = useLocation();
//   return (
//     <div>
//       {!location.pathname.includes("course-progress") ? (
//         <StudentViewCommonHeader />
//       ) : null}

//       <Outlet />
//     </div>
//   );
// }

// export default StudentViewCommonLayout;



import { Outlet, useLocation } from "react-router-dom";
import StudentViewCommonHeader from "./header";
import CommonHeader from "./commonheader"; 

function StudentViewCommonLayout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" || location.pathname === "/home" ? (
        <StudentViewCommonHeader />
      ) : 
      location.pathname.includes("course-progress") ? null : 
      (
        <CommonHeader />
      )}
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;
