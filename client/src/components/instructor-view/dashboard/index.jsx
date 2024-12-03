// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { DollarSign, Users } from "lucide-react";

// function InstructorDashboard({ listOfCourses }) {
//   function calculateTotalStudentsAndProfit() {
//     const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
//       (acc, course) => {
//         const studentCount = course.students.length;
//         acc.totalStudents += studentCount;
//         acc.totalProfit += course.pricing * studentCount;

//         course.students.forEach((student) => {
//           acc.studentList.push({
//             courseTitle: course.title,
//             studentName: student.studentName,
//             studentEmail: student.studentEmail,
//           });
//         });

//         return acc;
//       },
//       {
//         totalStudents: 0,
//         totalProfit: 0,
//         studentList: [],
//       }
//     );

//     return {
//       totalProfit,
//       totalStudents,
//       studentList,
//     };
//   }

//   // console.log(calculateTotalStudentsAndProfit());

//   const config = [
//     {
//       icon: Users,
//       label: "Total Students",
//       value: calculateTotalStudentsAndProfit().totalStudents,
//       // value: 100,
//     },
//     {
//       icon: DollarSign,
//       label: "Total Revenue",
//       value: calculateTotalStudentsAndProfit().totalProfit,
//       // value: 100,
//     },
//   ];

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {config.map((item, index) => (
//           <Card key={index}>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 {item.label}
//               </CardTitle>
//               <item.icon className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{item.value}</div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Courses List</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table className="w-full">
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Course Name</TableHead>
//                   <TableHead>Student Name</TableHead>
//                   <TableHead>Student Email</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {calculateTotalStudentsAndProfit().studentList.map(
//                   (studentItem, index) => (
//                     <TableRow key={index}>
//                       <TableCell className="font-medium">
//                         {studentItem.courseTitle}
//                       </TableCell>
//                       <TableCell>{studentItem.studentName}</TableCell>
//                       <TableCell>{studentItem.studentEmail}</TableCell>
//                     </TableRow>
//                   )
//                 )}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default InstructorDashboard;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Users } from "lucide-react";

function InstructorDashboard({ listOfCourses }) {
  const [selectedCourse, setSelectedCourse] = useState("All");

  function calculateTotalStudentsAndProfit() {
    const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
      (acc, course) => {
        const studentCount = course.students.length;
        acc.totalStudents += studentCount;
        acc.totalProfit += course.pricing * studentCount;

        course.students.forEach((student) => {
          acc.studentList.push({
            courseTitle: course.title,
            studentName: student.studentName,
            studentEmail: student.studentEmail,
          });
        });

        return acc;
      },
      {
        totalStudents: 0,
        totalProfit: 0,
        studentList: [],
      }
    );

    return {
      totalProfit,
      totalStudents,
      studentList,
    };
  }

  const { totalProfit, totalStudents, studentList } = calculateTotalStudentsAndProfit();

  const config = [
    {
      icon: Users,
      label: "Total Students",
      value: totalStudents,
    },
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: totalProfit,
    },
  ];

  const filteredStudents =
    selectedCourse === "All"
      ? studentList
      : studentList.filter((student) => student.courseTitle === selectedCourse);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {config.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-4">
        <label htmlFor="courseFilter" className="block text-sm font-medium mb-2">
          Filter by Course:
        </label>
        <select
          id="courseFilter"
          className="border rounded p-2 w-full md:w-1/3"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="All">All Courses</option>
          {listOfCourses.map((course, index) => (
            <option key={index} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Courses List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            {filteredStudents.length > 0 ? (
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Student Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((studentItem, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {studentItem.courseTitle}
                      </TableCell>
                      <TableCell>{studentItem.studentName}</TableCell>
                      <TableCell>{studentItem.studentEmail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg font-medium text-muted-foreground">
                  No students enrolled in this course yet.
                </p>
                <p className="text-sm text-muted-foreground">
                  Select another course or check back later.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstructorDashboard;
