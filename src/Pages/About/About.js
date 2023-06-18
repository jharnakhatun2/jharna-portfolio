import React from "react";
import useTitle from "../../Hook/useTitle";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  useTitle("About");
  return (
    <div className="py-10 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-8 lg:m-20">
        <div>
          <p className="text-[#357e8a] font-bold mb-1 border w-fit px-2 border-slate-600">who I am</p>
          <h1 className="text-2xl font-bold text-gray-300">ABOUT ME</h1>
          <div className="divider w-1/12 my-2"></div>
          <p className="mt-4 mb-7 text-lg text-justify text-gray-400">
            I'm a MERN Stack Web Developer building different types of core
            javaScript projects, React js web applications and full stack web
            applications. Check out some of my work in the Projects section.
            <br /><br />
            I also like to work with group works where I can share my knowledge
            to the stuff that I have learned over the years in Web Development
            so it can help other people of the Dev Community.Also I am a quick
            learner about any upcoming update technology.
            <br /><br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="btn btn-hover btn-secondary shadow-lg w-9/12 mx-auto lg:w-1/3">
            <a href="/contact" className="flex">CONTACT <span className="ml-3"><BsArrowRight/></span></a>{" "}
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-300">MY SKILLS</h1>
          <div className="divider w-1/12 my-2"></div>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            <div className="text-center p-3 border rounded text-accent">
              HTML
            </div>
            <div className="text-center p-3 border rounded text-accent">
              CSS
            </div>
            <div className="text-center p-3 border rounded text-accent">
              JavaScript
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Bootstrap
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Tailwind Css
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Daisy UI
            </div>
            <div className="text-center p-3 border rounded text-accent">
              ES6
            </div>
            <div className="text-center p-3 border rounded text-accent">
              npm
            </div>
            <div className="text-center p-3 border rounded text-accent">
              ES6
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Rest API
            </div>
            <div className="text-center p-3 border rounded text-accent">
              React js
            </div>
            <div className="text-center p-3 border rounded text-accent">
              React Hooq
            </div>
            <div className="text-center p-3 border rounded text-accent">
              React Query
            </div>
            <div className="text-center p-3 border rounded text-accent">
              React Router
            </div>
            <div className="text-center p-3 border rounded text-accent">
              React Query
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Node js
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Express js
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Mongodb
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Git
            </div>
            <div className="text-center p-3 border rounded text-accent">
              GitHub
            </div>
            <div className="text-center p-3 border rounded text-accent">
              VS Code
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Firebase
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Netlify
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Vercel
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Figma
            </div>
            <div className="text-center p-3 border rounded text-accent">
              Photoshop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
