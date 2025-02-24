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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 xl:hidden">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-900 p-6 shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <h1
                  className="font-semibold text-2xl text-[#40A2D8]"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  {exp.companyName}
                </h1>
                <p
                  className="text-lg font-medium text-gray-300"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  {exp.title}
                </p>
                <p
                  className="text-sm text-gray-400"
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

        <div className="max-w-7xl bg-slate-900 rounded mt-10 w-full px-5 py-8 hidden xl:block">
          <div className="flex flex-col items-center w-full relative">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className="w-full relative flex flex-col items-center"
              >
                {/* Timeline Entry */}
                <div
                  className={`flex items-center w-full relative ${
                    index % 2 !== 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Centered Circle and Year */}
                  <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 gap-2 ">
                    <h1
                      className="text-[#f97316] text-2xl"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <FaCircle />
                    </h1>
                    <h1 className="text-xl text-white"   data-aos="fade-up"
                      data-aos-duration="800">{experience.date}</h1>
                    <div
                      className="bg-[#38bdf8] w-1 h-12 sm:h-16 md:h-20"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    ></div>
                    <div className="bg-[#38bdf8] w-1 h-12 sm:h-16 md:h-20"   data-aos="fade-up"
                      data-aos-duration="1000"></div>
                  </div>

                  {/* Company Info - Aligning next to the circle */}
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "ml-28 text-left" : "mr-28 text-right"
                    }`}
                       data-aos={`${ index % 2 === 0 ? "fade-right" : "fade-left"}`}
                      data-aos-duration="1000"
                  >
                    <div className="bg-[#b92f2f] py-2 px-4 rounded xl:w-full">
                      <h1 className="text-white text-lg lg:text-xl">
                        {experience.companyName}
                      </h1>
                      <p className="text-sm lg:text-md text-gray-200">
                        {experience.title}
                      </p>
                    </div>
                    <ul className="text-gray-300 list-inside mt-2 max-w-80">
                      {experience.type.map((point, i) => (
                        <li key={i} className="my-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Blue Connecting Line - Ensures No Gaps */}
                {index < experienceData.length - 1 && (
                  <div className="bg-[#38bdf8] w-1 h-12 sm:h-16 md:h-20"    data-aos="fade-up"
                  data-aos-duration="1000"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
