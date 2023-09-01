import React from "react";
import useTitle from "../../Hook/useTitle";
import SkillButton from "../../Componects/SkillButton";
import { Link } from "react-router-dom";
import { Button } from "../../Componects/Button";

const About = () => {
  useTitle("About");
  return (
    <div className="bg-white">
      <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 md:gap-20 px-8 md:px-20 py-24 mx-auto">
        <div className="pb-12 md:pb-0">
          <p className="text-primary font-bold mb-2 border w-fit px-2 border-primary">
            who I am
          </p>
          <h1 className="text-2xl font-bold text-gray-600">ABOUT ME</h1>
          <div className="divider w-1/12 my-2"></div>
          <p className="mt-4 mb-7 text-lg text-justify text-gray-700">
            Hello! I am a Front End Web Developer where my expertise on HTML,
            CSS, Tailwind, Sass, Bootstrap, JavaScript, TypeScript, and React
            JS. Also I am comfortable with NextJS, Redux, Firebase, NodeJS,
            ExpressJS, MongoDB and more. I have 1.5 years experience in web
            development and completed over 45 projects.
            <br />
            <br />
            As a React Front End developer I design pixel perfect website to
            meet client project requirements, mobile-based features, reusable
            components, translate design and wireframes into high-quality
            efficient code.
            <br />
            <br />I aim to contribute to a dynamic team and drive digital
            success. My objective is to leverage my comprehensive knowledge of
            the Front-end and my problem-solving abilities to create seamless
            user experiences.
          </p>
          <div className="w-full md:w-5/12">
            <Link to="about">
              <Button variant="primary">KNOW MORE</Button>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-600">MY SKILLS</h1>
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
