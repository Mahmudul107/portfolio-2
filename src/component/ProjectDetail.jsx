import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    AOS.init();
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProject(found);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 text-white ">
      {/* Title Section */}
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-lime-400 mb-5">{project.name}</h1>
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
      </div>

      {/* Image Section */}
      <div data-aos="fade-left" data-aos-duration="1200" className="mb-8">
        <img
          src={project.detail_page_img}
          alt={project.name}
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Description Section */}
      <div data-aos="fade-up" data-aos-duration="1400" className="mb-8">
        <p className="text-lg text-white">{project.description}</p>
      </div>

      {/* Button Section */}
      <div data-aos="fade-right" data-aos-duration="1600" className="flex gap-6 justify-center flex-wrap mt-8">
        <a
          href={project.clientLink}
          className="bg-lime-600 px-6 py-3 rounded-lg text-white text-lg font-semibold transform hover:bg-lime-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Client Repo
        </a>
        <a
          href={project.serverLink}
          className="bg-lime-600 px-6 py-3 rounded-lg text-white text-lg font-semibold transform hover:bg-lime-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Server Repo
        </a>
        <a
          href={project.liveDemo}
          className="bg-lime-600 px-6 py-3 rounded-lg text-white text-lg font-semibold transform hover:bg-lime-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
