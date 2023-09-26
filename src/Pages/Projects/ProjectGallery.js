import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryButton from "../../Componects/CategoryButton";
import { Button } from "../../Componects/Button";
import ProjectButtonLive from "../../Componects/ProjectButtonLive";
import project from "../data/portfolio.json";

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Project Card
  const filteredProjectsByCategory = selectedCategory
    ? project.filter((item) => item.category.includes(selectedCategory))
    : project;

  // Button Filtering
  const allCategories = project.reduce((acc, item) => {
    acc.push(...item.category);
    return acc;
  }, []);

  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <>
      <div className="bg-gray-300 px-8 md:px-20 py-10">
        {/* Filter Button Design */}
        <div className="w-full md:w-8/12 text-center mx-auto">
          <h1 className="text-4xl font-bold text-black">PROJECTS</h1>

          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {/* Category Buttons */}
            {uniqueCategories.map((category, i) => {
              const isActive = category === selectedCategory;
              return (
                <CategoryButton
                  key={i}
                  onClick={() => setSelectedCategory(category)}
                  active={isActive}
                >
                  {category}
                </CategoryButton>
              );
            })}

            {/* All Button */}
            <CategoryButton
              onClick={() => setSelectedCategory("")}
              active={!selectedCategory}
            >
              ALL
            </CategoryButton>
          </div>
        </div>

        {/* Project Card Design */}
        <div className="divider-project"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjectsByCategory.map((data) => {
            const { id, name, image, short_des, technology, live } = data;
            return (
              <div
                key={id}
                className="card md:card-side lg:card-side bg-[#3B065E] shadow-2xl"
              >
                <figure className="w-full h-auto md:w-full md:h-[350px] lg:w-1/2 lg:h-[388px]">
                  <img src={image} alt="Project" className="w-full h-auto" />
                </figure>
                <div className="card-body w-full lg:w-1/2">
                  <h2 className="card-title text-white">{name}</h2>
                  <p className="text-gray-400 text-sm">
                    {short_des.slice(0, 53) + "..."}
                  </p>
                  <div className="pb-3">
                    <h2 className="text-white pb-2">Technology :</h2>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(technology).map((tech, index) => (
                        <span
                          key={index}
                          className="transition text-gray-400 hover:text-gray-200 border border-double border-[#565b5c] hover:border-secondary px-2 py-[2px] rounded"
                        >
                          {tech}
                        </span>
                      ))}
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
      </div>
    </>
  );
}