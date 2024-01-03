import React, { ChangeEvent, useState } from "react";
import { coursesDataType } from "./Semester";
import SelectField from "../UI/Select";
import InputField from "../UI/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

type Props = {
  courses: coursesDataType[];
  setCourses: React.Dispatch<React.SetStateAction<coursesDataType[]>>;
  course: coursesDataType;
  id: number;
};

const Course = ({ courses, setCourses, course, id }: Props) => {
  const handleDeleteCourse = (id: number) => {
    const updatedCoursesData = courses.filter((course) => {
      return course.id !== id;
    });
    setCourses(updatedCoursesData);
  };

  return (
    <div className=" mt-4 grid grid-cols-tableHeader space-x-6 justify-between items-center px-4">
      <div>
        <InputField
          id={course.id}
          type={"courseCode"}
          setDetails={setCourses}
        />
      </div>

      <div>
        <SelectField
          id={course.id}
          setDetails={setCourses}
          options={[...Array(25).keys()]}
          type={"courseUnit"}
        />
      </div>
      <div>
        <SelectField
          id={course.id}
          setDetails={setCourses}
          options={["A", "B", "C", "D", "E", "F"]}
          type={"courseGrade"}
        />
      </div>
      <div
        onClick={() => {
          handleDeleteCourse(id);
        }}
        className=" active:scale-[1.2]"
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className=" text-textGreen cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Course;
