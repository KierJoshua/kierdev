import React, { useState } from "react";
import projects from "./projectsData";
import Title from "../../components/Title";
import pocadmin from "../../assets/images/poc-admin.png";
import pocnotif from "../../assets/images/poc-notif.png";
import pocstaff from "../../assets/images/poc-staff.png";
import pocrequest from "../../assets/images/poc-request.png";
import pocbill from "../../assets/images/poc-bill.png";
import pocinventory from "../../assets/images/poc-inventory.png";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const openCapstone = () => document.getElementById("my_modal_1").showModal();

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="flex justify-center pt-24 sm:pt-32 md:pt-36">
        <div className="max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-7xl">
          <Title title={"Projects"} />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project, index) => {
              const isLongDescription = project.description.length > 200;

              return (
                <a
                  onClick={(e) => {
                    if (
                      project.name === "Capstone Project (Front End Developer)"
                    ) {
                      e.preventDefault(); // Stop navigation
                      openCapstone(); // Open modal
                    } else {
                      window.open(project.link, "_blank");
                    }
                  }}
                  className="cursor-pointer"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
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

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-slate-900 max-w-5xl p-8 rounded-lg shadow-lg">
              {/* Close Button */}
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              {/* Header */}
              <h3 className="font-bold text-2xl text-white text-center mb-6 uppercase">
                Capstone Project: Clinic Management System
              </h3>

              {/* Content Layout */}
              <div className="space-y-8 text-gray-300 leading-relaxed text-2xl">
                {/* Section 1: Overview */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/2">
                    <p>
                      The{" "}
                      <span className="text-[#40A2D8] font-semibold">
                        Clinic Management System
                      </span>{" "}
                      is a comprehensive web application designed for optical
                      clinics to optimize daily operations. It provides seamless
                      inventory management for eyeglasses, frames, and
                      accessories, while also integrating an automated billing
                      system to track client payments, reducing overdue balances
                      and ensuring smooth financial transactions.
                    </p>
                    <p className="mt-3">
                      As the{" "}
                      <span className="text-[#40A2D8] font-semibold">
                        Front-End Developer
                      </span>
                      , I was responsible for designing and implementing the
                      user interface (UI), ensuring a responsive, user-friendly
                      experience. I leveraged HTML, CSS, Bootstrap, and
                      JavaScript, while the backend was developed using PHP and
                      MySQL.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={pocbill}
                      alt="billing"
                      className="w-full rounded-lg shadow-lg mb-1"
                    />
                    <img
                      src={pocinventory}
                      alt="billing"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Section 2: User Roles */}
                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <div className="lg:w-1/2">
                    <p>
                      The system features multiple user roles for structured
                      workflow management. The{" "}
                      <span className="text-[#40A2D8] font-semibold">
                        Superadmin (Owner)
                      </span>{" "}
                      has full control over all branches, while staff members
                      have access permissions based on their assigned clinic.
                      Staff can update inventory but require admin approval for
                      critical changes, ensuring security and accountability.
                    </p>
                    <p className="mt-3">
                      I developed the role-based UI components, ensuring dynamic
                      access controls and a smooth, structured experience for
                      different users.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={pocadmin}
                      alt="Admin Dashboard"
                      className="w-full rounded-lg shadow-lg mb-1"
                    />

                    <img
                      src={pocstaff}
                      alt="Staff Dashboard"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Section 3: Request System */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/2">
                    <p>
                      A built-in{" "}
                      <span className="text-[#40A2D8] font-semibold">
                        request system
                      </span>{" "}
                      allows staff to submit supply requests, which are reviewed
                      and approved by the Superadmin. This structured process
                      prevents unauthorized inventory modifications and ensures
                      smooth coordination across multiple branches.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={pocrequest}
                      alt="Request Feature"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Section 4: Notifications & Monitoring */}
                <div className="flex flex-col lg:flex-row-reverse gap-6">
                  <div className="lg:w-1/2">
                    <p>
                      To enhance operational efficiency, the system includes
                      real-time notifications that alert the Superadmin of
                      inventory updates, staff activities, and pending
                      approvals. These notifications ensure seamless
                      communication between branches and management.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={pocnotif}
                      alt="Notifications"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Projects;
