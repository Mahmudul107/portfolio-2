import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="projects" className="px-4 sm:px-6 lg:px-20">
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto"></div>
      <h2 className="text-lime-500 text-center text-2xl lg:text-6xl font-semibold font-cinzel">
        <i>My Projects</i>
      </h2>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto mb-32"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-6 overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="rounded-2xl p-4 flex flex-col items-center justify-center shadow-2xl hover:overflow-auto border border-sky-700"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <figure className="h-48 sm:h-56 md:h-64 overflow-hidden rounded-md">
              <img
                src={project.img}
                alt={project.name}
                className="w-full object-cover transition-transform duration-[10000ms] hover:-translate-y-1/2"
              />
            </figure>
            <h2 className="text-lime-400 font-semibold mt-6 text-lg sm:text-xl lg:text-2xl font-sans">
              {project.name}
            </h2>
            <div className="border-b-2 border border-gray-400 my-4 -mb-4 mt-10 w-80 mx-auto"></div>
            <div className="flex gap-5 mt-8 text-white font-[cinzel text-xl]">
              <a
                href={project.serverLink}
                className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                  Client Side
                </span>
              </a>
              <a
                href={project.clientLink}
                className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                  Server
                </span>
              </a>
              <a
                href={project.liveDemo}
                className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all  rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                  Demo
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
