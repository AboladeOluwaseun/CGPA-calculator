import React, { useState } from "react";
import Course from "./Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
type Props = {};
export type coursesDataType = {
  id: number;
  courseCode: string;
  courseUnit: number;
  courseGrade: string;
  cummulativePoint: number;
};

const Semester = (props: Props) => {
  const [courses, setCourses] = useState<coursesDataType[]>([
    {
      id: 1,
      courseCode: "",
      courseUnit: 0,
      courseGrade: "",
      cummulativePoint: 0,
    },
  ]);
  const [gpa, setGpa] = useState<number>(0);
  const newCourse = {
    id: courses.length + 1,
    courseCode: "",
    courseUnit: 0,
    courseGrade: "",
    cummulativePoint: 0,
  };
  const handleAddCourse = (course: coursesDataType) => {
    setCourses([...courses, course]);
  };
  const handleDeleteAllCourses = () => {
    setCourses([]);
  };
  const gpaHandler = () => {
    const totalNuberOfUnits = courses
      .map((course) => {
        return course.courseUnit;
      })
      .reduce((acc, currentUnit) => {
        return acc + currentUnit;
      }, 0);

    const totalCumulativePoint = courses
      .map((course) => {
        return course.cummulativePoint;
      })
      .reduce((acc, currentCummulativePoint) => {
        return acc + currentCummulativePoint;
      }, 0);
    const newGpa = totalCumulativePoint / totalNuberOfUnits;
    setGpa(newGpa);
  };

  return (
    <>
      <div className="bg-white mt-4 mx-auto my-auto py-4   rounded-md ">
        <div className=" flex items-center justify-between">
          <h2 className=" text-mainBlue text-[1.3rem] md:text-[1.5rem] px-4 font-bold">
            Semester 1
          </h2>
          <h2 className=" text-mainBlue text-[1.3rem] md:text-[1.5rem] px-4 font-bold">
            Semester GPA:{gpa.toFixed(2)}
          </h2>
        </div>

        <div className=" text-black mt-8 ">
          <div className=" text-textGreen font-bold grid grid-cols-tableHeader justify-between space-x-6 px-4 ">
            <div>Course Code</div>
            <div>Course Unit</div>
            <div>Grade</div>
          </div>
          <div>
            {courses.map((course) => {
              return (
                <Course
                  key={course.id}
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  id={course.id}
                />
              );
            })}
          </div>
        </div>
        <div className=" mt-8 flex justify-center items-center gap-[2rem] flex-wrap">
          <div className=" active:scale-[1.2] cursor-pointer flex items-center gap-1">
            <div>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className=" text-textGreen"
              />
            </div>
            <button
              onClick={() => handleAddCourse(newCourse)}
              className=" py-2 rounded-md  text-textGreen"
            >
              Add Course
            </button>
          </div>
          <div className=" active:scale-[1.2] cursor-pointer flex items-center gap-1">
            <div>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className=" text-[#D62246]"
              />
            </div>
            <button
              onClick={handleDeleteAllCourses}
              className=" py-2 rounded-md text-[#D62246]"
            >
              Clear All
            </button>
          </div>
          <div
            onClick={gpaHandler}
            className="active:scale-[1.05]  flex items-center gap-1 bg-mainBlue justify-center w-[7.5rem]"
          >
            <FontAwesomeIcon className=" text-white" icon={faCalculator} />
            <button className="  h-[1.875rem] text-[0.75rem] font-bold">
              Calculate GPA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Semester;
