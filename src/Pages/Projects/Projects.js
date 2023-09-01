import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import ProjectButtonLive from "../../Componects/ProjectButtonLive";
import { Button } from "../../Componects/Button";

const Projects = () => {
  const [singleProject, setSingleProject] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setSingleProject(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const technologyStyle = [
    "transition text-gray-400 hover:text-gray-200 border border-double border-[#565b5c] hover:border-secondary px-2 py-[2px] rounded",
  ];

  useTitle("Portfolio");
  return (
    <div className="projectsBackgroundImage  w-full px-8 md:px-20 py-24 mx-auto">
      <div className="">
        <div className="text-center">
          <h1 className="text-4xl font-bold">PROJECTS</h1>
          <div className="divider w-[5%] my-2 mx-auto"></div>
          <p className="w-full lg:w-[40%] md:px-20 lg:px-8 text-accent mx-auto text-lg mb-10 lg:mb-16">
            Some of my personal projects that I created with each project
            containing its own case study
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          {singleProject.map((data) => {
            const { id, name, image, short_des, technology, live } = data;
            return (
              <div
                key={id}
                className="card md:card-side lg:card-side bg-[#3B065E] shadow-2xl"
              >
                <figure className=" w-full h-auto md:w-full md:h-[350px] lg:w-1/2 lg:h-[388px]">
                  <img src={image} alt="Album" className="w-full h-auto" />
                </figure>
                <div className="card-body w-full lg:w-1/2">
                  <h2 className="card-title text-white">{name}</h2>
                  <p className="text-gray-400 text-sm">
                    {short_des.slice(0, 53) + "..."}
                  </p>
                  <div className="pb-3">
                    <h2 className="text-white pb-2">Technology :</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className={technologyStyle}>{technology.one}</span>
                      <span className={technologyStyle}>{technology.two}</span>
                      <span className={technologyStyle}>
                        {technology.three}
                      </span>
                      <span className={technologyStyle}>{technology.four}</span>
                      <span className={technologyStyle}>{technology.five}</span>
                      <span className={technologyStyle}>{technology.six}</span>
                      <span className={technologyStyle}>
                        {technology.seven}
                      </span>
                      <span className={technologyStyle}>
                        {technology.eight}
                      </span>
                      <span className={technologyStyle}>
                        {technology?.nine}
                      </span>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-full text-center">
                      <div>
                        <Link to={`/project/${id}`}>
                          <Button variant="details">DETAILS</Button>
                        </Link>
                      </div>
                      <div>
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ProjectButtonLive>LIVE SITE</ProjectButtonLive>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-3/12 mx-auto pt-16">
          <Link to="project">
            <Button variant="primary">VIEW MORE &rarr;</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
