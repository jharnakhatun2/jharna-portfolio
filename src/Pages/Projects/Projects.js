import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Projects = () => {
  const [singleProject, setSingleProject] = useState([]);

  useEffect(()=>{
    fetch('portfolio.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSingleProject(data);
    })
    .catch(error => console.log(error))
  },[]);
  
  
  return (
    <div className="projectsBackgroundImage w-full py-20" id="project">
      <div className="text-center">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <div className="divider w-1/3 mx-auto"><img  src="https://i.ibb.co/bJKzvQL/devider-removebg-preview.png" alt="divider"/></div>
        <p className="w-full lg:w-1/2 px-8 text-accent mx-auto text-lg mb-20">
          Here you will find some of the personal projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mx-8 lg:mx-20">
        {
          singleProject.map(data => {
            console.log(data);
            const {id,name,image,short_des,live} = data;
            
            return <div key={id} className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={image} alt="Album" />
                </figure>
                <div className="card-body w-full lg:w-1/2">
                  <h2 className="card-title">{name}</h2>
                  <div className="text-accent">{short_des}</div>
                  <div className="card-actions justify-end">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full text-center">
                      <div className="bg-secondary px-5 py-2 shadow-xl rounded"><Link to={`/project/${id}`}>DETAILS</Link></div>
                      <div className="bg-neutral text-secondary px-5 py-2 shadow-xl rounded"><a href={live} target="_blank" rel="noopener noreferrer">LIVE SITE</a></div>
                    </div>
                  </div>
                </div>
              </div> 
              
          })
        }
        

      </div>      
    </div>
  );
};

export default Projects;
