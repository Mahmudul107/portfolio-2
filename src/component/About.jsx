import React, { useEffect } from "react";
import Lottie from "lottie-react";
import coding from "../assets/coding.json";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import pdf from "../../public/MERN Stack Developer.pdf";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="aboutMe">
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto"></div>
      <h2 className="text-lime-500 text-center sm:text-2xl lg:text-6xl md:text-6xl font-semibold font-[cinzel]">
        <i>About Me</i>
      </h2>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-96 mx-auto"></div>
      <div className="card lg:card-side mx-auto lg:flex-row-reverse justify-center gap-32">
        <div
          className="mt-8"
          data-aos="fade-down-right"
          data-aos-duration="1000"
        >
          <figure className="">
            <Lottie
              animationData={coding}
              style={{ height: "100%", width: "100%" }}
            />
          </figure>
          <a
            href={pdf}
            download
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-24 ml-24 lg:ml-40"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="flex items-center gap-2 justify-center relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-hidden">
              Download Resume{" "}
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <FaDownload />
              </span>
            </span>
          </a>
        </div>
        <div
          className="w-full md:w-2/5 mt-8 md:mt-20"
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <p className="text-gray-300 font-sans text-base md:text-lg">
            A MERN stack web developer crafts stunning and dynamic portfolio
            websites. Combining MongoDB, Express.js, React, and Node.js, they
            create captivating user experiences and robust back-end
            functionality. With an eye for design and a knack for coding, they
            bring your ideas to life, showcasing your work in an engaging and
            visually appealing manner. From seamless navigation to interactive
            features, a MERN stack web developer delivers a captivating online
            portfolio that leaves a lasting impression.
          </p>
          <div className="flex flex-col md:flex-row shadow-lime-200 shadow-2xl rounded-lg gap-4  mt-4 p-6 md:p-10">
            <div className="mr-8">
              <p className="text-white text-base md:text-lg">Name</p>
              <h2 className="text-gray-300 mb-4">Mahmudul Islam</h2>
              <p className="text-white text-base md:text-lg">Email</p>
              <h2 className="text-gray-300 mb-4">mahmudulislam378@gmail.com</h2>
              <p className="text-white text-base md:text-lg">Phone</p>
              <h2 className="text-gray-300 mb-4">+8801868697940</h2>
              <p className="text-white text-base md:text-lg">Address</p>
              <h2 className="text-gray-300 mb-4">1205-Dhaka, Bangladesh</h2>
            </div>
            <div className="border border-gray-500 my-4 md:my-0"></div>
            <div>
              <p className="text-white text-base md:text-lg">Education</p>
              <h2 className="text-gray-300 mb-4">
                BA in Sociology (2019-Present)
              </h2>
              <p className="text-white text-base md:text-lg">Language</p>
              <h2 className="text-gray-300 mb-4">Bangla, English</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
