import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('skill.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const getRandomAnimation = () => {
    const animations = ['fade','fade-right', 'zoom-in', 'zoom-in-up', 'fade-left', 'flip-left', 'slide-up', 'fade-up',];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  return (
    <div className="my-40" id='skills'>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto"></div>
      <h2 className="text-lime-500 text-center sm:text-2xl lg:text-6xl md:text-6xl font-semibold font-[cinzel]">
        <i>Skills</i>
      </h2>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto mb-16"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center px-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative p-4 rounded shadow-xl shadow-lime-200 hover:shadow-lg w-40 h-40 text-center mt-20 mx-auto"
            data-aos={getRandomAnimation()}
            data-aos-duration="1000"
          >
            <img src={skill.image} alt={skill.name} className="mt-2" />
            <h2 className="text-lg font-[cinzel] text-white mt-4 font-semibold">{skill.name}</h2>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-full hover:scale-90 transition-transform hover:translate-x-4 duration-1000">
              <p className="text-white text-sm">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
