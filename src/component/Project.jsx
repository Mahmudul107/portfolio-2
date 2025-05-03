import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="projects" className="px-4 sm:px-6 lg:px-20 text-[#e2e8f0]">
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto"></div>
      <h2 className="text-lime-500 text-center text-2xl lg:text-6xl font-semibold font-cinzel">
        <i>My Projects</i>
      </h2>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto mb-20"></div>

      <div className="grid grid-cols-1 gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row bg-[#1e293b] rounded-2xl shadow-md border border-[#06b6d4]/30 overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <figure className="lg:w-1/2 w-full max-h-64 overflow-hidden">
              <img
                src={project.auto_img}
                alt={project.name}
                className="w-[2000px] h-[3000px]  transition-transform duration-[7000ms] hover:-translate-y-1/3"
              />
            </figure>

            {/* Content */}
            <div className="p-6 flex flex-col justify-center lg:w-1/2 w-full">
              <h2 className="text-2xl font-semibold text-[#84cc16] font-cinzel mb-2">
                {project.name}
              </h2>
              <h2 className="text-xl font-semibold text-gray-300 font-cinzel mb-2">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-md border border-[#84cc16] text-[#e2e8f0] hover:bg-[#84cc16]/20 transition text-sm"
                >
                  Demo
                </a>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="px-4 py-1.5 rounded-md border border-[#84cc16] text-[#e2e8f0] hover:bg-[#84cc16]/20 transition text-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
