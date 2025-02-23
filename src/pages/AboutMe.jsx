import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-custom-gradient pt-24 sm:pt-32 md:pt-36 flex flex-col items-center px-6 sm:px-12">
      <div className="max-w-4xl w-full text-white">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Hey there! I'm <span className="font-bold">Kier Joshua Du</span>, a
          passionate <span className="font-bold">front-end developer</span>{" "}
          dedicated to building interactive and user-friendly web applications.
          I'm currently leveling up my skills to become a{" "}
          <span className="font-bold">full-stack developer</span> by learning
          <span className="font-bold"> Node.js, Express.js, and MongoDB</span>.
        </p>

        {/* Education & Journey */}
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          I graduated from{" "}
          <span className="font-bold">City College of Calamba </span>
          with a{" "}
          <span className="font-bold">
            Bachelor of Science in Information Technology
          </span>
          . My journey into coding started with a love for problem-solving and
          creativity. One of my most impactful projects was developing an{" "}
          <span className="font-bold">
            inventory and billing management system
          </span>{" "}
          for <span className="font-bold">Optical Clinic</span>, where I honed
          my skills in front-end development.
        </p>

        {/* Work Ethic & Passion */}
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          I thrive on{" "}
          <span className="font-bold">solving real-world problems</span> through
          code, always seeking <span className="font-bold">new challenges</span>{" "}
          that push my limits. Writing clean, maintainable code is my priority,
          and I strongly believe in
          <span className="font-bold"> lifelong learning</span> to stay ahead in
          the ever-evolving world of technology.
        </p>

        {/* Career Goals */}
        <p className="text-lg sm:text-xl leading-relaxed mb-14">
          My ultimate goal is to transition into a{" "}
          <span className="font-bold">full-stack developer role</span>, where I
          can build both front-end and back-end solutions. I'm currently looking
          for{" "}
          <span className="font-bold">internship or job opportunities </span>
          where I can apply my skills, contribute to exciting projects, and grow
          with a talented team.
        </p>

        {/* Hobbies Section */}
        <div className="w-full text-left">
          <h2 className="text-2xl font-bold my-8">🛠️ Tech Stack & Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg font-medium px-6 sm:px-0">
            <li>⚡ React.js</li>
            <li>🎨 Tailwind CSS</li>
            <li>💻 JavaScript</li>
            <li>🖥️ HTML & CSS</li>
            <li>🌐 Git & GitHub</li>
            <li>🚀 Node.js (Learning)</li>
          </ul>
        </div>

        {/* Hobbies Section */}
        <div className="w-full text-left mt-10">
          <h2 className="text-2xl font-bold mb-4">🎯 My Hobbies</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg font-medium px-6 sm:px-0">
            <li>🎬 Watching Anime & Movies</li>
            <li>💻 Coding & Side Projects</li>
            <li>🏍️ Motorcycle Riding</li>
            <li>🏀 Basketball</li>
            <li>🎮 Computer Gaming</li>
            <li>🏋️‍♂️ Gym & Fitness</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="my-12">
          <h2 className="text-2xl font-bold">🚀 Let's Connect!</h2>
          <p className="text-lg mt-2">
            I'm always open to discussing exciting opportunities or
            collaborating on projects.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#40A2D8] border border-[#40A2D8] text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:scale-105 transition-all">
            <a
              href="mailto:kierjoshuadu1226@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
