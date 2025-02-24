import React from 'react'

const ExperienceTry = () => {
  return (
    <div className="max-w-7xl bg-slate-900 rounded mt-10 w-full px-5 py-8">
    <div className="flex flex-col items-center w-full relative">
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="w-full relative flex flex-col items-center"
        >
          {/* Timeline Entry */}
          <div
            className={`flex items-center w-full relative ${
              index % 2 !== 0
                ? "flex-row-reverse sm:flex-row"
                : "sm:flex-row"
            } flex-col`}
          >
            {/* Company Info - Moves above the circle on small screens */}
            <div
              className={`flex flex-col w-full sm:w-auto ${
                index % 2 === 0
                  ? "sm:ml-32 sm:text-left text-center mb-4 sm:mb-0"
                  : "sm:mr-32 sm:text-right text-center mb-4 sm:mb-0"
              }`}
            >
              <div className="bg-[#b92f2f] py-2 px-4 rounded">
                <h1 className="text-white text-xl font-semibold">
                  {experience.companyName}
                </h1>
                <p className="text-md text-gray-200">
                  {experience.title}
                </p>
              </div>
              <ul className="text-gray-300 list-inside mt-2 max-w-full">
                {experience.type.map((point, i) => (
                  <li key={i} className="my-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Centered Circle and Year */}
            <div className="flex flex-col items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 gap-2">
              <h1 className="text-[#f97316] text-2xl">
                <FaCircle />
              </h1>
              <h1 className="text-xl text-white">{experience.date}</h1>
            </div>
          </div>

          {/* Blue Connecting Line - Ensures No Gaps */}
          {index < experienceData.length - 1 && (
            <div className="bg-[#38bdf8] w-1 h-20 sm:h-24 md:h-32"></div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default ExperienceTry