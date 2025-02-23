import React from "react";
import skills from "./SkillsData";

const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-custom-gradient pt-24 sm:pt-32 md:pt-36 flex justify-center px-6 sm:px-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-center font-bold text-4xl mb-8">TECH SKILLS</h1>

        {["Most Used", "Occasionally Used", "Developing Expertise", "Familiar With"].map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold pl-4 mb-4">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-slate-700 p-4 rounded-lg shadow-md border border-[#40A2D8] hover:shadow-[#40A2D8] transition-transform transform hover:scale-105 duration-300 cursor-pointer"
                  >
                    <img src={skill.skill} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
                    <h3 className="text-xs sm:text-sm md:text-md lg:text-lg font-medium">{skill.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
