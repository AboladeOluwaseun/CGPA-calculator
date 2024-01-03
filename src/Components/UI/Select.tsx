import React, { ChangeEvent, FormEvent } from "react";
import { coursesDataType } from "../Semester/Semester";

type Props = {
  // labelName: string;
  // inputFor: string;
  // courses: coursesDataType[];
  type: string;
  id: number;
  setDetails: React.Dispatch<React.SetStateAction<coursesDataType[]>>;
  value?: string;
  disabled?: boolean;
  options: number[] | string[];
};
const SelectField = ({
  // labelName,
  // inputFor,
  type,
  id,
  setDetails,
  value,
  options,
  disabled,
}: Props) => {
  const cummulativePointHandler = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    setDetails;
  };
  return (
    <div className="flex flex-col gap-2">
      {/* <label className=" mx-4 text-modalBackground" htmlFor={inputFor}>
        {labelName}
      </label> */}
      <select
        disabled={disabled}
        className="  h-[2rem] w-full bg-mainBackground rounded-md outline-textGreen text-textGreen"
        // value={value ? value : ""}
        onChange={(e) => {
          setDetails((prev) => {
            const updatedCoursesData = prev.map((course) => {
              if (course.id === id) {
                if (type === "courseGrade") {
                  return {
                    ...course,
                    courseGrade: e.target.value,
                    cummulativePoint:
                      e.target.value === "A"
                        ? 5 * course?.courseUnit
                        : e.target.value === "B"
                        ? 4 * course?.courseUnit
                        : e.target.value === "C"
                        ? 3 * course?.courseUnit
                        : e.target.value === "D"
                        ? 2 * course?.courseUnit
                        : e.target.value === "E"
                        ? 1 * course?.courseUnit
                        : e.target.value === "F"
                        ? 0 * course?.courseUnit
                        : 0,
                  };
                } else if (type === "courseUnit") {
                  console.log(e.target.value);
                  const gradeValue = course.courseGrade || ""; // default to an empty string if courseGrade is undefined
                  return {
                    ...course,
                    courseUnit: parseFloat(e.target.value),

                    cummulativePoint:
                      gradeValue === "A"
                        ? 5 * parseFloat(e.target.value)
                        : gradeValue === "B"
                        ? 4 * parseFloat(e.target.value)
                        : gradeValue === "C"
                        ? 3 * parseFloat(e.target.value)
                        : gradeValue === "D"
                        ? 2 * parseFloat(e.target.value)
                        : gradeValue === "E"
                        ? 1 * parseFloat(e.target.value)
                        : gradeValue === "F"
                        ? 0 * parseFloat(e.target.value)
                        : 0,
                  };
                } else {
                  return { ...course, [type]: e.target.value };
                }
              } else {
                return course;
              }
            });
            console.log(updatedCoursesData);
            return updatedCoursesData;
          });
        }}
      >
        {options?.map((option) => {
          return (
            <option className=" w-[50%] " key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
