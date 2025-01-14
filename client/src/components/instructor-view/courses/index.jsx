import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit, Trash } from "lucide-react";
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
      {/* 
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="rounded-md">
            <TableHeader className="bg-gray-100">
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
                      </TableCell>
                      <TableCell>
                        {course?.students?.length}
                      </TableCell>
                      <TableCell>
                        ${course?.students?.length * course?.pricing}
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
                          <span>Edit</span>
                          <Edit className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <span>Delete</span>
                          <Delete className="h-6 w-6" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </CardContent> */}

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="rounded-md ">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-gray-700 font-bold">Course</TableHead>
                <TableHead className="text-gray-700 font-bold">Students</TableHead>
                <TableHead className="text-gray-700 font-bold">Revenue</TableHead>
                <TableHead className="text-gray-700 font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfCourses && listOfCourses.length > 0
                ? listOfCourses.map((course, index) => (
                  <TableRow
                    key={course?._id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <TableCell className="font-medium text-gray-800">
                      {course?.title}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {course?.students?.length}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      ${course?.students?.length * course?.pricing}
                    </TableCell>
                    <TableCell className="">
                      <Button
                        onClick={() => {
                          navigate(`/instructor/edit-course/${course?._id}`);
                        }}
                        className="bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300 font-medium rounded-lg px-2 py-2 mr-2"
                      >
                        {/* <span>Edit</span> */}
                        <Edit className="h-5 w-5" />
                      </Button>
                      <Button
                        className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 font-medium rounded-lg px-2 py-2"
                      >
                        {/* <span>Delete</span> */}
                        <Trash className="h-5 w-5" />
                      </Button>
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
