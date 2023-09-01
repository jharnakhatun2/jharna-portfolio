import { useEffect, useState } from "react";
import SkillButton from "../../Componects/SkillButton";
import ProjectButtonLive from "../../Componects/ProjectButtonLive";
import { Button } from "../../Componects/Button";
import { Link } from "react-router-dom";
import CategoryButton from "../../Componects/CategoryButton";

export default function ProjectGallery() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const categoryFilterItems = (cateItems) => {
    setActiveCategory(cateItems);
    if (cateItems === "All") {
      setFilteredItems(items);
    } else {
      const updateItems = items.filter((currentItem) => {
        return currentItem.category === cateItems;
      });
      setFilteredItems(updateItems);
    }
  };

  const technologyStyle = [
    "transition text-gray-400 hover:text-gray-200 border border-double border-[#565b5c] hover:border-secondary px-2 py-[2px] rounded",
  ];

  return (
    <div className="bg-gray-300 px-8 md:px-20 py-20">
      <div className="w-full md:w-8/12 text-center mx-auto">
        <h1 className="text-2xl font-bold text-black">MY PROJECTS</h1>

        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <CategoryButton
            onClick={() => categoryFilterItems("react")}
            active={activeCategory === "react"}
          >
            React.js
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("next")}
            active={activeCategory === "next"}
          >
            Next.js
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("javascript")}
            active={activeCategory === "javascript"}
          >
            JavaScript
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("next")}
            active={activeCategory === "next"}
          >
            Typescript
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("mern")}
            active={activeCategory === "mern"}
          >
            MERN Projects
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("redux")}
            active={activeCategory === "redux"}
          >
            Redux
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("tailwind")}
            active={activeCategory === "tailwind"}
          >
            Tailwind Css
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("bootstrap")}
            active={activeCategory === "bootstrap"}
          >
            Bootstrap
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("scss")}
            active={activeCategory === "scss"}
          >
            Sass/Scss
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("html-css")}
            active={activeCategory === "html-css"}
          >
            HTML | CSS
          </CategoryButton>
          <CategoryButton
            onClick={() => categoryFilterItems("All")}
            active={activeCategory === "All"}
          >
            ALL
          </CategoryButton>
        </div>
      </div>
      <div className="divider-project"></div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredItems?.map((data) => {
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
                    <span className={technologyStyle}>{technology.three}</span>
                    <span className={technologyStyle}>{technology.four}</span>
                    <span className={technologyStyle}>{technology.five}</span>
                    <span className={technologyStyle}>{technology.six}</span>
                    <span className={technologyStyle}>{technology.seven}</span>
                    <span className={technologyStyle}>{technology.eight}</span>
                    <span className={technologyStyle}>{technology?.nine}</span>
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
                      <a href={live} target="_blank" rel="noopener noreferrer">
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
  );
}
