// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// // import React from 'react'
// import { Delete, Edit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from 'react-router-dom';

// const InstructorCourses = ({ listOfCourses }) => {

//   const navigate = useNavigate();
//   // const {
//   //   setCurrentEditedCourseId,
//   //   setCourseLandingFormData,
//   //   setCourseCurriculumFormData,
//   // } = useContext(InstructorContext);

//   return (
//   <Card>
//     <CardHeader className="flex justify-between flex-row items-center">
//       <CardTitle className="text-3xl font-extrabold">
//       All Courses
//       </CardTitle>
//       <Button
//           onClick={() => {
//             // setCurrentEditedCourseId(null);
//             // setCourseLandingFormData(courseLandingInitialFormData);
//             // setCourseCurriculumFormData(courseCurriculumInitialFormData);
//             navigate("/instructor/create-new-course");
            
//           }}
//           className="p-6"
//         >
//         Create New Course
//       </Button>
//       <CardContent>
//       <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Course</TableHead>
//                 <TableHead>Students</TableHead>
//                 <TableHead>Revenue</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {listOfCourses && listOfCourses.length > 0
//                 ? listOfCourses.map((course) => (
//                     <TableRow key={course?._id}>
//                       <TableCell className="font-medium">
//                         {course?.title}
//                         {/* React js full course */}
//                       </TableCell>
//                       <TableCell>
//                       {course?.students?.length}
//                       {/* 100 */}
//                       </TableCell>
//                       <TableCell>
//                         ${course?.students?.length * course?.pricing}
//                         {/* $5000 */}
//                        </TableCell>
//                       <TableCell className="text-right">
//                         <Button
//                           // onClick={() => {
//                           //   navigate(`/instructor/edit-course/${course?._id}`);
//                           // }}
//                           variant="ghost"
//                           size="sm"
//                           // className="mr-2"
//                         >
//                           <Edit className="h-6 w-6" />
//                         </Button>
//                         <Button variant="ghost" size="sm">
//                           <Delete className="h-6 w-6" />
//                         </Button>
//                         {/* $1250.00 */}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : null}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </CardHeader>
//   </Card>
//   )
// }

// export default InstructorCourses
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// // import React from 'react'
// import { Delete, Edit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from 'react-router-dom';

// const InstructorCourses = ({ listOfCourses }) => {
//   const navigate = useNavigate();

//   return (
//     <Card>
//       <CardHeader className="flex justify-between items-center">
//         <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
//         {/* Create New Course button on the right */}
//         <Button
//           onClick={() => {
//             navigate("/instructor/create-new-course");
//           }}
//           className="p-6"
//         >
//           Create New Course
//         </Button>
//       </CardHeader>

//       <CardContent>
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Course</TableHead>
//                 <TableHead>Students</TableHead>
//                 <TableHead>Revenue</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {listOfCourses && listOfCourses.length > 0
//                 ? listOfCourses.map((course) => (
//                     <TableRow key={course?._id}>
//                       <TableCell className="font-medium">
//                         {course?.title}
//                       </TableCell>
//                       <TableCell>
//                         {course?.students?.length}
//                       </TableCell>
//                       <TableCell>
//                         ${course?.students?.length * (course?.pricing || 0)}
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <Button
//                           onClick={() => {
//                             navigate(`/instructor/edit-course/${course?._id}`);
//                           }}
//                           variant="ghost"
//                           size="sm"
//                         >
//                           <Edit className="h-6 w-6" />
//                         </Button>
//                         <Button variant="ghost" size="sm">
//                           <Delete className="h-6 w-6" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : null}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default InstructorCourses;
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Delete, Edit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from 'react-router-dom';

// const InstructorCourses = ({ listOfCourses }) => {
//   const navigate = useNavigate();

//   return (
//     <Card>
//       <CardHeader className="flex justify-between items-center">
//         <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
//         {/* Create New Course button on the right */}
//         <Button
//           onClick={() => {
//             navigate("/instructor/create-new-course");
//           }}
//           className="p-6"
//         >
//           Create New Course
//         </Button>
//       </CardHeader>

//       <CardContent>
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Course</TableHead>
//                 <TableHead>Students</TableHead>
//                 <TableHead>Revenue</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {listOfCourses && listOfCourses.length > 0
//                 ? listOfCourses.map((course) => (
//                     <TableRow key={course?._id}>
//                       <TableCell className="font-medium">
//                         {course?.title}
//                       </TableCell>
//                       <TableCell>
//                         {course?.students?.length}
//                       </TableCell>
//                       <TableCell>
//                         ${course?.students?.length * (course?.pricing || 0)}
//                       </TableCell>
//                       <TableCell className="text-right">
//                         {/* Buttons with spacing */}
//                         <Button
//                           onClick={() => {
//                             navigate(`/instructor/edit-course/${course?._id}`);
//                           }}
//                           variant="ghost"
//                           size="sm"
//                           className="mr-2"  {/* Add margin right to space out buttons */}
//                         >
//                           <Edit className="h-6 w-6" />
//                         </Button>
//                         <Button
//                           onClick={() => {
//                             // Add delete action here
//                             console.log('Deleting course with id:', course?._id);
//                           }}
//                           variant="ghost"
//                           size="sm"
//                         >
//                           <Delete className="h-6 w-6" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : null}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// // export default InstructorCourses;
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// // import React from 'react'
// import { Delete, Edit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from 'react-router-dom';

// const InstructorCourses = ({ listOfCourses }) => {

//   const navigate = useNavigate();
//   // const {
//   //   setCurrentEditedCourseId,
//   //   setCourseLandingFormData,
//   //   setCourseCurriculumFormData,
//   // } = useContext(InstructorContext);

//   return (
//     <Card>
//       <CardHeader className="flex justify-between items-center">
//         <CardTitle className="text-3xl font-extrabold">
//           All Courses
//         </CardTitle>
//         {/* Create New Course button on the right */}
//         <Button
//           onClick={() => {
//             // setCurrentEditedCourseId(null);
//             // setCourseLandingFormData(courseLandingInitialFormData);
//             // setCourseCurriculumFormData(courseCurriculumInitialFormData);
//             navigate("/instructor/create-new-course");
//           }}
//           className="p-6"
//         >
//           Create New Course
//         </Button>
//       </CardHeader>

//       <CardContent>
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Course</TableHead>
//                 <TableHead>Students</TableHead>
//                 <TableHead>Revenue</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {listOfCourses && listOfCourses.length > 0
//                 ? listOfCourses.map((course) => (
//                     <TableRow key={course?._id}>
//                       <TableCell className="font-medium">
//                         {course?.title}
//                         {/* React js full course */}
//                       </TableCell>
//                       <TableCell>
//                         {course?.students?.length}
//                         {/* 100 */}
//                       </TableCell>
//                       <TableCell>
//                         ${course?.students?.length * course?.pricing}
//                         {/* $5000 */}
//                       </TableCell>
//                       <TableCell className="text-right">
//                         {/* Edit button with spacing */}
//                         <Button
//                           // onClick={() => {
//                           //   navigate(`/instructor/edit-course/${course?._id}`);
//                           // }}
//                           variant="ghost"
//                           size="sm"
//                           className="mr-2"  {/* Margin-right for spacing */}
//                         >
//                           <Edit className="h-6 w-6" />
//                         </Button>
//                         {/* Delete button */}
//                         <Button variant="ghost" size="sm">
//                           <Delete className="h-6 w-6" />
//                         </Button>
//                         {/* $1250.00 */}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : null}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default InstructorCourses;
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import React from 'react'
import { Delete, Edit } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from 'react-router-dom';
import { InstructorContext } from '@/context/instructor-context';
import { useContext } from 'react';
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from '@/config';

const InstructorCourses = ({ listOfCourses }) => {

  const navigate = useNavigate();
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="sm:text-xl md:text-3xl font-extrabold">
          All Courses
        </CardTitle>
        <Button
          onClick={() => {
            setCurrentEditedCourseId(null);
            setCourseLandingFormData(courseLandingInitialFormData);
            setCourseCurriculumFormData(courseCurriculumInitialFormData);
            navigate("/instructor/create-new-course");
          }}
          className="p-6"
        >
          Create New Course
        </Button>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfCourses && listOfCourses.length > 0
                ? listOfCourses.map((course) => (
                    <TableRow key={course?._id}>
                      <TableCell className="font-medium">
                        {course?.title}
                        {/* React js full course */}
                      </TableCell>
                      <TableCell>
                        {course?.students?.length}
                        {/* 100 */}
                      </TableCell>
                      <TableCell>
                        ${course?.students?.length * course?.pricing}
                        {/* $5000 */}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => {
                            navigate(`/instructor/edit-course/${course?._id}`);
                          }}
                          variant="ghost"
                          size="sm"
                          className="mr-2" // Margin-right for spacing
                        >
                          <Edit className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Delete className="h-6 w-6" />
                        </Button>
                        {/* $1250.00 */}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCourses;
