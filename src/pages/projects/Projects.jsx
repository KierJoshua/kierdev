import React, { useState } from 'react';
import projects from './projectsData';
import Title from '../../components/Title';

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex justify-center pt-36">
      <div className="max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-7xl">
        <Title title={"Projects"} />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const isLongDescription = project.description.length > 200;

            return (
              <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                <div className="rounded-lg bg-slate-900 my-3 hover:scale-105 transition-all p-5 min-h-[500px] flex flex-col">
                  <img src={project.image} alt="" className="w-full rounded p-4" />
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
                  <h1 className="text-end px-4 font-semibold mt-4">Made With:</h1>
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
      </div>
    </div>
  );
};

export default Projects;
