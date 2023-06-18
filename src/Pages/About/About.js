import React from "react";
import useTitle from "../../Hook/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="my-20">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <div className="divider w-2/12 mx-auto">
          <p className="">JS</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-8 lg:m-20">
        <div>
          <h1 className="text-2xl font-bold">GET TO KNOW ME :</h1>
          <p className="my-7 text-lg text-justify text-slate-600">
            I'm a MERN Stack Web Developer building different types of core
            javaScript projects, React js web applications and full stack web
            applications. Check out some of my work in the Projects section.
            <br />
            I also like to work with group works where I can share my knowledge
            to the stuff that I have learned over the years in Web Development
            so it can help other people of the Dev Community.Also I am a quick
            learner about any upcoming update technology.
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button className="btn btn-secondary shadow-lg w-full lg:w-1/3">
            <a href="#contact">CONTACT</a>{" "}
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-7">MY SKILLS :</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
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
