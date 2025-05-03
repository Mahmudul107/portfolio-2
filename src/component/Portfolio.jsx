import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import cover from "../assets/Mahmudul_Islam-Enhanced.png";
import Typewriter from "typewriter-effect";

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12" id="portfolio">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl hover:-translate-x-2 transition-transform duration-700">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Hi, I'm
            <br />
            <span className="text-blue-400 text-4xl sm:text-5xl lg:text-6xl font-[cinzel]">
              Mahmudul Islam
            </span>
          </h2>
          <div className="text-base text-gray-300 sm:text-lg">
            <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
              <p>I am</p>
              <span className="text-lime-500 font-bold text-lg sm:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      "a MERN Stack Web Developer.",
                      "a Frontend Developer.",
                      "a Web Developer.",
                      "a Software Engineer"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p>
              I can provide clean code and pixel-perfect design. I also make websites
              more interactive with web animations.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="https://www.facebook.com/mahmudulisla" target="_blank" rel="noreferrer">
              <FaFacebook className="w-7 h-7 text-white hover:text-blue-400 transition duration-500" />
            </a>
            <a href="https://github.com/Mahmudul107" target="_blank" rel="noreferrer">
              <FaGithub className="w-7 h-7 text-white hover:text-blue-400 transition duration-500" />
            </a>
            <a href="https://www.linkedin.com/in/mahmudul-islam-webdev/" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-7 h-7 text-white hover:text-blue-400 transition duration-500" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-96 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <div className="bg-gray-300 rounded-full overflow-hidden transition-transform hover:translate-x-4 duration-700">
            <img
              src={cover}
              alt="Mahmudul Islam"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
