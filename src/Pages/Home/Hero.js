import React from "react";
import { BsDownload, BsLinkedin } from "react-icons/bs";
import useTitle from "../../Hook/useTitle";
import { motion } from "framer-motion";
import { Button } from "../../Componects/Button";

const Hero = () => {
  useTitle("Home");
  return (
    <div
      id="hero"
      className="bg-[url('/src/assets/11582461_21034578.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center py-10 lg:py-0 h-screen"
    >
      <div className="px-8 md:px-20">
        <div className="flex items-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl lg:mr-2 text-gray-400">
            I'M
          </h1>
          <div className="animation-hero w-full">
            <div className="header-content">
              <span data-hover="Front End Developer">JHARNA KHATUN</span>
              <div></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 ">
          <h3 className="text-secondary">
            STRATEGIC <span className="text-accent">|</span> INNOVATIVE{" "}
            <span className="text-accent">|</span> CREATIVE THINKER
          </h3>
          <div className="text-lg mb-7 lg:mb-10 text-gray-100 w-full lg:w-10/12">
            <motion.h3
              initial={{ y: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: "1" }}
              whileHover={{ opacity: 1 }}
            >
              I am a{" "}
              <span className="text-primary">Front End Web Developer</span>{" "}
              (REACT). I specialize in creating dynamic and user-friendly web
              applications & committed to delivering high-quality solutions that
              engage users and drive business success.
            </motion.h3>
          </div>
          {/* Buttons */}
          <div className="md:flex gap-3 w-full md:w-8/12">
            <Button
              variant="primary"
              as="a"
              href="https://www.linkedin.com/in/jharna-khatun2/"
              target="_blank"
            >
              <BsLinkedin />
              Hire Me
            </Button>
            <Button
              as="a"
              href="https://drive.google.com/file/d/1U_wTKECpMoJuNxpASoV7F6xY8tnN8fMz/view?usp=sharing"
              target="_blank"
              className="mt-3 md:mt-0"
            >
              <BsDownload />
              RESUME
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
