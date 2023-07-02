import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-10">
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-40 sm:w-96 mx-auto"></div>
      <figure className="h-40">
        <Lottie animationData={contact} style={{ height: "80%", width: "100%" }} />
      </figure>
      <div className="border-b-2 border-dashed border-gray-600 my-4 w-40 sm:w-96 -mt-4 mb-8 mx-auto"></div>
      <form onSubmit={handleSubmit} data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-300 mb-3 text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border bg-slate-300 text-white text-lg shadow-lg shadow-sky-400 rounded focus:outline-none focus:border-lime-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-300 mb-3 text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border bg-slate-300 text-white text-lg shadow-lg shadow-sky-400 rounded focus:outline-none focus:border-lime-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-300 mb-3 text-xl">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border bg-slate-300 text-white text-lg shadow-lg shadow-lime-200 rounded focus:outline-none focus:border-lime-500"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button>
          <Link className="relative shadow-lg shadow-lime-100 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-black text-center transition-colors duration-300 ease-in-out group-hover:text-white">
              Hire Me
            </span>
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Contact;
