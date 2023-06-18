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
          <div class="animation-hero">
            <div class="header-content">
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
              href="https://drive.google.com/file/d/1G4awyCsWOnt3BYBccuP3v-D7m0iTJwYp/view?usp=share_link"
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
            >
              <div className="btn btn-neutral shadow-lg w-full">
                <BsLinkedin />
                <p className="ml-3">HIRE ME</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
