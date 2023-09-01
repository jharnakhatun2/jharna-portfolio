import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { Button } from "../../Componects/Button";

export default function Reviews() {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-slate-300 px-8 md:px-0 py-24">
      <div className="text-center mb-10 lg:mb-16">
        <h1 className="text-4xl font-bold">OUR TESTIMONIALS</h1>
        <div className="divider w-[5%] my-2 mx-auto"></div>
      </div>
      <div className="">
        <div className="block md:flex lg:flex items-center justify-center gap-24 ">
          <div className="w-full md:w-1/5 lg:w-1/5 ">
            <div className="w-full block lg:float-right ">
              <img
                src="https://i.ibb.co/rbZ198z/userre.jpg"
                alt=""
                className="h-auto border-2"
              />
              <div>
                <h2 className="font-bold text-xl mt-2 text-secondary">
                  CLIENTS LOVE WHAT I DO
                </h2>
                <p className="py-3 text-gray-800">
                  Feedback are invaluable sources of fuel the growth and
                  improvement of any creative developer
                </p>
                <Link to="/about" className="">
                  <Button variant="primary">READ MORE</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-3/5 mt-16 md:mt-0 bg-white p-10 lg:p-20">
            <div className="bg-[url('https://i.ibb.co/dkJz6J4/26445197-15643-removebg-preview.png')] bg-no-repeat bg-cover bg-center shadow-2xl p-10">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
