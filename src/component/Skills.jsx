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
    const animations = ['fade', 'fade-right', 'zoom-in', 'zoom-in-up', 'fade-left', 'flip-left', 'slide-up', 'fade-up'];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  return (
    <div className="my-40" id="skills">
      {/* Divider line */}
      <div className="border-b-2 border-dashed border-[#06b6d4] my-4 w-96 mx-auto"></div>
      <h2 className="text-[#84cc16] text-center sm:text-2xl lg:text-6xl md:text-6xl font-semibold font-[cinzel]">
        <i>Skills</i>
      </h2>
      <div className="border-b-2 border-dashed border-[#06b6d4] my-4 w-96 mx-auto mb-16"></div>

      {/* Grid layout for skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 justify-center items-center px-36">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative p-4 rounded-lg bg-[#0f172a] shadow-xl shadow-[#84cc16] hover:shadow-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105"
            data-aos={getRandomAnimation()}
            data-aos-duration="1000"
          >
            {/* Skill Image */}
            <div className="h-14 flex justify-center items-center mb-4">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 object-cover rounded-full border-4 border-[#84cc16] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Skill Name */}
            <h2 className="text-lg font-[cinzel] text-[#e2e8f0] mt-4 font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
