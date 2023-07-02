import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import cover from "../assets/mahmudul-rembg.png";
import Typewriter from "typewriter-effect";

const Portfolio = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <div className="bg-lime-500 w-[380px] h-[400px] rounded-full hover:scale-90 transition-transform hover:translate-x-4 duration-700">
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

            <div className="flex flex-col sm:items-center md:flex-row gap-4 mt-8">
            <Link className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="flex items-center gap-2 justify-center relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-hidden">
                  View Resume{" "}
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <FaDownload />
                  </span>
                </span>
              </Link>
              <Link className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-black text-center transition-colors duration-300 ease-in-out group-hover:text-white">
                  Hire Me
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
