import { FormEvent, useState, useEffect } from "react";
import Semester from "./Components/Semester/Semester";

type PreviousSessions = {
  prevTotalNumberOfUnits: number;
  prevTotalCumulativePoint: number;
  prevCGPA: number;
};

function App() {
  const [hasCompletedTask, setHasCompletedTask] = useState<Boolean>(false);
  const [previousSessions, setPreviousSessions] = useState<PreviousSessions>({
    prevTotalNumberOfUnits: 0,
    prevTotalCumulativePoint: 0,
    prevCGPA: 0,
  });
  console.log(previousSessions);
  useEffect(() => {
    // Check if the user has completed the task
    const hasTaskCompleted = localStorage.getItem("hasTaskCompleted");

    if (hasTaskCompleted) {
      setHasCompletedTask(true);
    }
  }, []);



  // const submitHandler = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const { prevTotalCumulativePoint, prevTotalNumberOfUnits } =
  //     previousSessions;
  //   const currentCGPA =
  //     prevTotalNumberOfUnits <= 24
  //       ? prevTotalCumulativePoint / prevTotalNumberOfUnits
  //       : NaN;
  //   setPreviousSessions({ ...previousSessions, prevCGPA: currentCGPA });
  //   localStorage.setItem("hasTaskCompleted", "true");
  //   setHasCompletedTask(true);
  // };
  return (
    <>
      <div className="flex flex-col bg-[#F2F7F7] items-center justify-center min-h-[100vh] ">
        <div>
          {" "}
          <h1 className=" text-mainBlue font-bold text-[1.5rem] md:text-[2rem] ">
            CGPA CALCULATOR
          </h1>
          <div>{/* <FontAwesomeIcon icon={solid("gear")} /> */}</div>
        </div>

        {/* <h1>
          Kindly enter previous TCU and TCP <br /> *Hint:you can get it from the
          CheckResult section of your portal{" "}
        </h1> */}
        {/* <h3>Current CGPA:{previousSessions.prevCGPA}</h3> */}
        {/* {!hasCompletedTask && (
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div>
              <label htmlFor="prevTotalNumberOfUnits">
                Previous Total Number of Units
              </label>
              <input
                className=" text-red-200"
                type="number"
                id="prevTotalNumberOfUnits"
                onChange={(e) => {
                  setPreviousSessions({
                    ...previousSessions,
                    prevTotalNumberOfUnits: parseInt(e.target.value),
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="prevTotalCumulativePoint">
                Previous Total Cumulative Point
              </label>
              <input
                className=" text-red-200"
                type="number"
                id="prevTotalCumulativePoint"
                onChange={(e) =>
                  setPreviousSessions({
                    ...previousSessions,
                    prevTotalCumulativePoint: parseInt(e.target.value),
                  })
                }
              />

              <button
                className=" bg-green-500 px-4 py-2 ml-2 rounded-md"
                type="submit"
              >
                add
              </button>
            </div>
          </form>
        )} */}
        <div className="min-w-[50%]  ">
          <Semester />
        </div>
        <div className=" mt-4 flex items-center justify-center gap-3 flex-wrap">
          <button className=" active:scale-[1.05] bg-mainBlue w-[7.5rem] h-[1.875rem] text-[0.75rem] font-bold">
            Calculate CGPA
          </button>
          <button className=" active:scale-[1.05] bg-textGreen w-[7.5rem] h-[1.875rem] text-[0.75rem] font-bold">
            Add Semester
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
