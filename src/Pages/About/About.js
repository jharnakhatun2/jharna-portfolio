import React from "react";
import useTitle from "../../Hook/useTitle";
import SkillButton from "../../Componects/SkillButton";
import MainButton from "../../Componects/MainButton";
import { Link } from "react-router-dom";

const About = () => {
  useTitle("About");
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 md:px-20 lg:px-20 py-20">
        <div className="pb-12">
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
          <Link to="/about">
          <MainButton >KNOW MORE</MainButton>
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-300">MY SKILLS</h1>
          <div className="divider w-1/12 my-2"></div>
          <div className="flex flex-wrap gap-3">
          <SkillButton>React.js</SkillButton>
          <SkillButton>Node.js</SkillButton>
          <SkillButton>Express.js</SkillButton>
          <SkillButton>Mongodb</SkillButton>
          <SkillButton>Next.js</SkillButton>
          <SkillButton>Typescript</SkillButton>
          <SkillButton>Redux</SkillButton>
          <SkillButton>Rest-API</SkillButton>
          <SkillButton>React-Hook</SkillButton>
          <SkillButton>React-Query</SkillButton>
          <SkillButton>React-Router</SkillButton>
          <SkillButton>Sass/Scss</SkillButton>
          <SkillButton>JavaScript</SkillButton>
          <SkillButton>Bootstrap</SkillButton>
          <SkillButton>Tailwind Css</SkillButton>
          <SkillButton>ES6</SkillButton>
          <SkillButton>npm</SkillButton>
          <SkillButton>HTML</SkillButton>
          <SkillButton>CSS</SkillButton>
          <SkillButton>GitHub</SkillButton>
          <SkillButton>Firebase</SkillButton>
          <SkillButton>Netlify</SkillButton>
          <SkillButton>Vercel</SkillButton>
          <SkillButton>Figma</SkillButton>
          <SkillButton>Photoshop</SkillButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
