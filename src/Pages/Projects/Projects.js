import React from "react";

const Projects = () => {
  return (
    <div className="projectsBackgroundImage w-full py-20" id="project">
      <div className="text-center">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <div className="divider w-1/3 mx-auto">JK</div>
        <p className="w-1/2 mx-auto text-lg mb-20">
          Here you will find some of the personal projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mx-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/xJPw7Pr/1.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">SOUND'S MART</h2>
            <div className="">Sound's Mart is a full-stack project.In this project, I used React js, Node js , Express js, Mongodb, Google Firebase,Authentication, JWT token system, Stripe payment gateway.This site’s dashboard worked as user verified user access.</div>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary w-full shadow-xl"><a href="https://sounds-mart.web.app/" target="_blank" rel="noopener noreferrer">GO LIVE SITE</a></button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/1LTThR3/2.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">COURSE DEEP</h2>
            <p>Course Deep is a Learning Management System based project.I created some json data files, loaded API data and displayed data in dynamic routes. I Integrated firebase Authentication in my client site & created a private route for the checkout page.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary w-full shadow-xl"><a href="https://assignment-10-75df6.web.app/" target="_blank" rel="noopener noreferrer">GO LIVE SITE</a></button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/1vKRQx2/3.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">BODY BURN CLUB</h2>
            <p>Body Burn Club is a single page application (SPA) based project. Here I Implemented state management system ( react hook ), and explore folder structure. I used ES6, dynamic route, different react features, Local Storage.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary w-full shadow-xl"><a href="https://body-burn-club.netlify.app/" target="_blank" rel="noopener noreferrer">GO LIVE SITE</a></button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="bg-nature">
            <img className="w-full" src="https://i.ibb.co/c8snTTJ/4.png" alt="Album" />
          </figure>
          <div className="card-body w-full lg:w-1/2">
            <h2 className="card-title">SELECT TOP PLAYERS</h2>
            <p>Select Top Players is Document Object Model based Website. I created this site with HTML, CSS and JavaScript.Here I implemented querySelector, querySelectorAll, getElementById, getElementsByClassName, addEventListener,Event bubble.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary w-full shadow-xl"><a href="https://choice-your-top-players.netlify.app/" target="_blank" rel="noopener noreferrer">GO LIVE SITE</a></button>
            </div>
          </div>
        </div>
       
      </div>
      <div className="w-full flex justify-around">
        <button className="btn btn-primary shadow-xl w-2/12 mt-10"><a href="/">SHOW MORE</a></button>
        </div>
    </div>
  );
};

export default Projects;



