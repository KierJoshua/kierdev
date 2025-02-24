import React from "react";
import Title from "../../components/Title";
import experienceData from "./experienceData";
import { Helmet } from "react-helmet";
import { FaCircle } from "react-icons/fa";

const Experience = ({ noPadding, noHeight, noTitle }) => {
  return (
    <>
      {noTitle ? (
        <Helmet>
          <title>Experience</title>
          <meta charSet="utf-8" />
        </Helmet>
      ) : (
        ""
      )}

      <div
        className={`${noHeight ? "mb-10" : "min-h-screen"}  w-full ${
          noPadding ? "" : "pt-24 sm:pt-32 md:pt-36"
        } pb-5 flex flex-col items-center px-6 sm:px-12`}
      >
        <div className="max-w-sm sm:max-w-lg lg:max-w-5xl w-full">
          <Title title={"Experience"} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-900 p-6 shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <div className="bg-[#b92f2f] rounded py-1 px-2">
                  <h1
                    className="font-semibold text-2xl text-white"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    {exp.companyName}
                  </h1>
                  <p
                    className="text-lg font-medium text-gray-200"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    {exp.title}
                  </p>
                </div>
                <p
                  className="text-sm text-gray-400                   py-1"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  {exp.date}
                </p>
                <ul
                  className="mt-3 space-y-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
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
    </>
  );
};

export default Experience;
