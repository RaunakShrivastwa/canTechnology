import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const Table = () => {
  const data = [
    {
      name: "Structured + Problem Solving based",
      codingNinja: true,
      freeResources: false,
      OtherCourses: true,
    },
    {
      name: "Fastest 1:1 doubt support",
      codingNinja: true,
      freeResources: false,
      OtherCourses: false,
    },
    {
      name: "Integrated Prep platform",
      codingNinja: true,
      freeResources: false,
      OtherCourses: false,
    },
    {
      name: "Profiles highlighted on Naukri",
      codingNinja: true,
      freeResources: false,
      OtherCourses: false,
    },
  ];
  return (
    <div className="flex flex-col mt-16 pb-12 items-center h-auto">
      <table className="w-9/12 rounded-lg">
        <thead>
          <tr className="bg-transparent h-16 relative top-1">
            <th className="py-4 bg-transparent"></th>
            <th className="py-4 pl-14">
              <img
                src="https://files.codingninjas.com/new-cn-logos-32028.svg"
                alt="Coding Ninja"
              />
            </th>
            <th className="py-4 text-white/80">Free Resources</th>
            <th className="py-4 text-white/80">Other Courses</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-transparent h-16"
                    : "bg-gray-900/75 h-16"
                }
              >
                <td className="pl-6 text-white py-4">{data.name}</td>
                <td className="pl-14">
                  {data.codingNinja ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <></>
                  )}
                </td>
                <td className="pl-16">
                  {data.freeResources ? (
                    <></>
                  ) : (
                    <ClearIcon className="text-gray-500" />
                  )}
                </td>
                <td className="pl-16">
                  {data.OtherCourses ? (
                    <DoneIcon className="text-gray-500" />
                  ) : (
                    <ClearIcon className="text-gray-500" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
