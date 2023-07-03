import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import cover from "../assets/mahmudul-rembg.png";
import Typewriter from "typewriter-effect";

const Portfolio = () => {
  return (
    <div style={{ overflowX: "hidden" }} id="portfolio">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <div className="bg-gray-300 w-[380px] h-[400px] rounded-full hover:scale-90 transition-transform hover:translate-x-4 duration-700">
            <div className="">
              <img
                className="flex justify-center rounded-full w-[380px] h-[436px] -mt-9"
                src={cover}
              />
            </div>
          </div>
          <div className="max-w-xl mb-6 lg:mt-8 hover:-translate-x-8 transition-transform hover:scale-90 duration-700">
            <h2 className="text-white max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Hi, I'm <span className="hidden md:block" />
              <span className="inline-block text-blue-400 font-[cinzel] text-4xl lg:text-6xl">
                Mahmudul Islam{" "}
              </span>
            </h2>
            <h2 className="text-base text-gray-300 md:text-lg">
              <div className="flex gap-2">
                <p>I am</p>
                <span className="text-xl text-lime-500 font-bold">
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
              </span>{" "}
              </div>
              I can provide clean code and pixel perfect design. I also make the
              website more and more interactive with web animations.
            </h2>

            
            <div className="flex  sm:items-center md:flex-row gap-4 mt-8">
                <a href="https://www.facebook.com/mahmudulisla" target="blank"><FaFacebook className="w-8 h-8 text-white hover:text-blue-400 duration-700"/></a>
                <a href="https://github.com/Mahmudul107" target="blank"><FaGithub className="w-8 h-8 text-white hover:text-blue-400 duration-700"/></a>
                <a href="https://www.linkedin.com/in/mahmudul-islam-webdev/" target="blank"><FaLinkedin className="w-8 h-8 text-white hover:text-blue-400 duration-700"/></a>  
            </div>
            {/* <div className="flex flex-col sm:items-center md:flex-row gap-4 mt-8">
                  
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
