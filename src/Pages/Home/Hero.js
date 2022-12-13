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
      <div className=" w-full lg:w-1/2 mx-auto text-center px-2">
        <h1 className=" text-4xl lg:text-5xl font-bold">
          HEY, I'M JHARNA KHATUN
        </h1>
        <h3 className="text-xl my-7 lg:my-10 text-slate-600 mx-2 lg:mx-0">
          I am a full-stack web developer.I am seeking a web challenging
          position in a reputed organization where I can expand my web
          developing knowledge
        </h3>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 w-9/12 mx-auto">
          <a
            href="https://drive.google.com/file/d/1G4awyCsWOnt3BYBccuP3v-D7m0iTJwYp/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn btn-secondary shadow-lg w-full">
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
  );
};

export default Hero;
