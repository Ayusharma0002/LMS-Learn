// import { Route, Routes } from "react-router-dom";
// import AuthPage from "./pages/auth";
// import RouteGuard from "./components/route-guard";
// import { useContext } from "react";
// import { AuthContext } from "./context/auth-context";
// // import StudentHomePage from "./pages/student";
// import StudentViewCommonLayout from "./components/student-view/common-layout";
// import NotFoundPage from "./pages/not-found";
// import InstructorDashboardPage from "./pages/instructor";
// import AddNewCoursePage from "./pages/instructor/add-new-course";
// import StudentHomePage from "./pages/student/home";
// import StudentViewCoursesPage from "./pages/student/courses";
// import StudentViewCourseDetailsPage from "./pages/student/course-details";
// // import PaypalPaymentReturnPage from "./pages/student/payment-return";
// import StudentCoursesPage from "./pages/student/student-courses";
// // import PaymentCancelPage from "./pages/student/payment-cancel";
// import PaymentCancelPage from "./pages/student/payment-cancel";
// import StudentViewCourseProgressPage from "./pages/student/course-progress";
// import Contact from "./components/contact/Contact";
// import { Toaster } from "./components/ui/toaster";

// function App() {
//   const { auth } = useContext(AuthContext);

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/auth"
//           element={
//             <RouteGuard
//               element={<AuthPage />}
//               authenticated={auth?.authenticate}
//               user={auth?.user}
//             />
//           }
//         />
//         <Route
//           path="/instructor"
//           element={
//             <RouteGuard
//               element={<InstructorDashboardPage />}
//               authenticated={auth?.authenticate}
//               user={auth?.user}
//             />
//           }
//         />
//         <Route
//           path="/instructor/create-new-course"
//           element={
//             <RouteGuard
//               element={<AddNewCoursePage />}
//               authenticated={auth?.authenticate}
//               user={auth?.user}
//             />
//           }
//         />
//         <Route
//           path="/instructor/edit-course/:courseId"
//           element={
//             <RouteGuard
//               element={<AddNewCoursePage />}
//               authenticated={auth?.authenticate}
//               user={auth?.user}
//             />
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <RouteGuard
//               element={<StudentViewCommonLayout />}
//               authenticated={auth?.authenticate}
//               user={auth?.user}
//             />
//           }
//         >
//           <Route path="" element={<StudentHomePage />} />
//           <Route path="home" element={<StudentHomePage />} />
//           <Route path="courses" element={<StudentViewCoursesPage />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
//           {/* <Route
//           path="course/details/:id"
//           element={<StudentViewCourseDetailsPage />}
//         />
//         <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
//         <Route path="student-courses" element={<StudentCoursesPage />} />
//         <Route
//           path="course-progress/:id"
//           element={<StudentViewCourseProgressPage />}
//         /> */}
//           {/* <Route path="payment-return" element={<PaypalPaymentReturnPage />} /> */}
//           {/* <Route path="/payment-cancel" component={PaymentCancelPage} /> */}
//           {/* <Route path="/payment-cancel" element={<PaymentCancelPage />} /> */}
//           <Route path="/payment-cancel/:courseId" element={<PaymentCancelPage />} />

//           <Route path="student-courses" element={<StudentCoursesPage />} />
//           <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
// import StudentHomePage from "./pages/student";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import NotFoundPage from "./pages/not-found";
import InstructorDashboardPage from "./pages/instructor";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentHomePage from "./pages/student/home";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
// import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
// import PaymentCancelPage from "./pages/student/payment-cancel";
import PaymentCancelPage from "./pages/student/payment-cancel";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import Contact from "./components/contact/Contact";

// Import ToastContainer from react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor/create-new-course"
          element={
            <RouteGuard
              element={<AddNewCoursePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor/edit-course/:courseId"
          element={
            <RouteGuard
              element={<AddNewCoursePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentViewCommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          <Route path="" element={<StudentHomePage />} />
          <Route path="home" element={<StudentHomePage />} />
          <Route path="courses" element={<StudentViewCoursesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
          <Route path="/payment-cancel/:courseId" element={<PaymentCancelPage />} />
          <Route path="student-courses" element={<StudentCoursesPage />} />
          <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Add the ToastContainer to show toast notifications globally */}
      <ToastContainer />
    </>
  );
}

export default App;
