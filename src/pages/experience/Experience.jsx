import React from "react";
import Title from "../../components/Title";
import experienceData from "./experienceData";

const Experience = ( {noPadding, noHeight} ) => {
  return (
    <div className={`${noHeight ? "mb-10" : "min-h-screen"}  w-full ${noPadding ? "" : "pt-24 sm:pt-32 md:pt-36"} pb-5 flex justify-center px-6 sm:px-12`}>
      <div className="max-w-sm sm:max-w-lg lg:max-w-5xl w-full">
        <Title title={"Experience"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg bg-slate-900 p-6 shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <h1 className="font-semibold text-2xl text-[#40A2D8]">
                {exp.companyName}
              </h1>
              <p className="text-lg font-medium text-gray-300">{exp.title}</p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <ul className="mt-3 space-y-2">
                {exp.type.map((type, i) => (
                  <li key={i} className="text-gray-300">
                    - {type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
