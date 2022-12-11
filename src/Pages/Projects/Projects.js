import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projectsBackgroundImage w-full py-20" id="project">
      <div className="text-center">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <div className="divider w-1/3 mx-auto"><img  src="https://i.ibb.co/bJKzvQL/devider-removebg-preview.png" alt="divider"/></div>
        <p className="w-1/2 text-accent mx-auto text-lg mb-20">
          Here you will find some of the personal projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mx-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/xzcTpNG/1.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">SOUND'S MART</h2>
            <div className="text-accent">Sound's Mart is a full-stack project.In this project, I used React js, Node js , Express js, Mongodb, Google Firebase,Authentication, JWT token system, Stripe payment gateway.This site’s dashboard worked as user verified user access.</div>
            <div className="card-actions justify-end">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full text-center">
                <div className="bg-secondary px-5 py-2 shadow-xl rounded"><Link to="/project/:id">DETAILS</Link></div>
                <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href="https://sounds-mart.web.app/" target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/M5Lj3ZY/2.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">COURSE DEEP</h2>
            <p className="text-accent">Course Deep is a Learning Management System based project.I created some json data files, loaded API data and displayed data in dynamic routes. I Integrated firebase Authentication in my client site & created a private route for the checkout page.</p>
            <div className="card-actions justify-end">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full text-center">
            <div className="bg-secondary px-5 py-2 shadow-xl rounded"><Link to="/project/:id">DETAILS</Link></div>
                <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href="https://assignment-10-75df6.web.app/" target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/3YJ2bYz/3.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">BODY BURN CLUB</h2>
            <p className="text-accent">Body Burn Club is a single page application (SPA) based project. Here I Implemented state management system ( react hook ), and explore folder structure. I used ES6, dynamic route, different react features, Local Storage.</p>
            <div className="card-actions justify-end">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full text-center">
            <div className="bg-secondary px-5 py-2 shadow-xl rounded"><Link to="/project/:id">DETAILS</Link></div>
                <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href="https://body-burn-club.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="bg-nature">
            <img className="w-full" src="https://i.ibb.co/z7wpV79/4.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">SELECT TOP PLAYERS</h2>
            <p className="text-accent">Select Top Players is Document Object Model based Website. Here I implemented querySelector, querySelectorAll, getElementById, getElementsByClassName, addEventListener,Event bubble.</p>
            <div className="card-actions justify-end">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full text-center">
            <div className="bg-secondary px-5 py-2 shadow-xl rounded"><Link to="/project/:id">DETAILS</Link></div>
                <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href="https://choice-your-top-players.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
              </div>
            </div>
          </div>
        </div>     
      </div>      
    </div>
  );
};

export default Projects;
