import React, { useState } from "react";
import mypic from "../assets/images/my-pic.jpg";
import SkillsCarousel from "./Skills/SkillsCarousel";
import Title from "../components/Title";
import reactnote from "../assets/images/reactnote.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import projects from "./projects/projectsData";
import { Link } from "react-router-dom";
import Experience from "./experience/Experience";
import RESUME from "../assets/files/latestResume.pdf"

const Home = () => {
  const trimmedProjects = projects.slice(0, 3);

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen w-full bg-custom-gradient pt-24 sm:pt-32 flex justify-center items-center px-6 sm:px-12 cursor-pointer overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 items-center gap-10 rounded-lg min-h-[650px] max-w-md sm:max-w-2xl md:max-w-3xl bg-slate-900 p-10 shadow-xl">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Hello! I'm Kier Joshua!
            </h1>
            <h2 className="text-xl sm:text-3xl text-gray-300 mb-6 font-semibold">
              A <span className="text-[#40A2D8]">Front-end Developer </span>
              Aiming to be a Full-Stack Developer!
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg mb-6">
              Soon-to-be graduate of Bachelor of Science in Information
              Technology from City College of Calamba. Passionate about web
              development and actively seeking opportunities to expand my skills
              in a dynamic and collaborative environment.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <button className="px-6 py-3 bg-[#40A2D8] border border-[#40A2D8] text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:scale-105 transition-all">
                <a href={RESUME} download={"Resume"}>Download CV</a>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center cursor-pointer">
            <img
              src={mypic}
              alt="Kier Joshua"
              className="h-[50vh] z-0 w-auto rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="max-w-7xl flex flex-col items-center gap-4 my-10 ">
          <Title title={"Tech Skills"} />
          <SkillsCarousel />
        </div>

        <div className="max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-7xl my-10">
          <Title title={"Projects"} />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {trimmedProjects.map((project, index) => {
              const isLongDescription = project.description.length > 200;

              return (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="rounded-lg bg-slate-900 my-3 hover:scale-105 transition-all p-5 min-h-[500px] flex flex-col">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full rounded p-4"
                    />
                    <h1 className="text-center font-semibold text-2xl pb-3 h-16 flex items-center justify-center">
                      {project.name}
                    </h1>
                    <p className="px-4 flex-grow">
                      {expanded[index] || !isLongDescription
                        ? project.description
                        : `${project.description.slice(0, 200)}... `}
                      {isLongDescription && (
                        <button
                          className="text-blue-400 hover:underline text-sm inline"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpand(index);
                          }}
                        >
                          {expanded[index] ? "View Less" : "View All"}
                        </button>
                      )}
                    </p>
                    <h1 className="text-end px-4 font-semibold mt-4">
                      Made With:
                    </h1>
                    <div className="flex justify-end px-4 py-2 gap-2">
                      {Object.values(project.madeWith).map((skill, i) => (
                        <img key={i} src={skill} alt="" className="w-1/12" />
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="my-4 flex w-full justify-center">
            <Link to={"/projects"}>
              <button className="px-6 py-3 bg-[#40A2D8] border border-[#40A2D8] text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:scale-105 transition-all">
                View More
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full">
        <Experience noPadding noHeight/>
        </div>
      </div>
    </div>
  );
};

export default Home;
