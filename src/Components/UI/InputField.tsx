import React, { useState } from "react";
import { coursesDataType } from "../Semester/Semester";

type Props = {
  type: string;
  id: number;
  setDetails: React.Dispatch<React.SetStateAction<coursesDataType[]>>;
};
const InputField = ({ id, setDetails, type }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        id={type}
        onChange={(e) =>
          setDetails((prev) => {
            const updatedCoursesData = prev.map((course) => {
              if (course.id === id) {
                return { ...course, [type]: e.target.value };
              } else {
                return course;
              }
            });
            return updatedCoursesData;
          })
        }
        placeholder="ARC 101"
        type={type === "password" && showPassword ? "text" : type}
        className=" px-4 w-full outline-1 outline-textGreen bg-mainBackground h-[2rem]  focus:ring-[1px] mxl:h-[3rem] bg-fiverockBackground rounded-md  text-textGreen"
      />
    </>
  );
};

export default InputField;
