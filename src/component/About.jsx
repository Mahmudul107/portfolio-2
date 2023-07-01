import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import cover from '../assets/mahmudul-rembg.png'

const Portfolio = () => {
  return (
    <div>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row pl-20">
        <div className="mb-10 lg:max-w-lg  lg:pr-20 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="text-white max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Hi, I'm <span className="hidden md:block" />
              <span className="inline-block text-blue-400 font-[cinzel] text-6xl">
                Mahmudul Islam{" "}
              </span>
            </h2>
            <p className="text-base text-gray-300 md:text-lg">
              I am a MERN Stack web developer. I can provide clean code and
              pixel perfect design. I also make website more & more interactive
              with web animations.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <Link className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="flex items-center gap-2 justify-center relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-hidden">
                View Resume{" "}
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                  <FaDownload/>
                </span>
              </span>
            </Link>
            <Link className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Hire Me
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-lime-500 w-[500px] h-96 rounded-full">
            <img className="flex justify-center rounded-full h-[400px]" src={cover} alt="" />
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
