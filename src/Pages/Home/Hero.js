import React from "react";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import useTitle from "../../Hook/useTitle";

const Hero = () => {
  useTitle("Home");
  return (
    <div
      id="hero"
      className="w-full h-ull lg:h-[550px] backgroundImage flex flex-col items-center justify-center py-10 lg:py-0"
    >
      <div className="px-2 container">
        <div className="flex items-center justify-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl mr-2">HEY, I'M</h1>
          <div className="animation-hero">
            <div className="header-content">
              <span data-hover="MERN Developer">JHARNA KHATUN</span>
              <div></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 mx-auto text-center">
          <h3 className="text-lg mb-7 lg:mb-10 text-[#000]">
            "I am a MERN-stack web developer. I am seeking a web challenging
            position in a reputed organization where I can expand my web
            developing knowledge"
          </h3>
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 w-9/12 mx-auto">
            <a
              href="https://drive.google.com/file/d/1U_wTKECpMoJuNxpASoV7F6xY8tnN8fMz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn btn-hover btn-secondary shadow-lg w-full">
                <BsDownload />
                <p className="ml-3">RESUME</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jharna-khatun2/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f33bea] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative flex items-center gap-3 text-secondary">
                <BsLinkedin className="" />
                <p className="uppercase text-sm ">Hire me</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
