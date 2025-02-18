import React from "react";
import mypic from "../assets/images/my-pic.jpg";
import SkillsCarousel from "./Skills/SkillsCarousel";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-custom-gradient pt-32 flex justify-center items-center px-6 sm:px-12 cursor-pointer overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 items-center gap-10 rounded-lg min-h-[650px] max-w-lg sm:max-w-2xl md:max-w-5xl bg-slate-900 p-10 shadow-xl">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Hello! I'm Kier Joshua!
            </h1>
            <h2 className="text-3xl text-gray-300 mb-6 font-semibold">
              A <span className="text-[#40A2D8]">Front-end Developer </span>
              Aiming to be a Full-Stack Developer!
            </h2>
            <p className="text-lg text-gray-400 max-w-lg mb-6">
              Bachelor of Science in Information Technology graduate from City
              College of Calamba. Passionate about web development, actively
              seeking opportunities to expand my skills in a dynamic and
              collaborative environment.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <button className="px-6 py-3 bg-[#40A2D8] border border-[#40A2D8] text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:scale-105 transition-all">
                Download CV
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
        <h1 className="text-center font-bold text-4xl ">Tech Skills</h1>
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
