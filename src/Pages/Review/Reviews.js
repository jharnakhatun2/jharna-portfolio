import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="bg-gray-300 py-24">
      <div className="container mx-auto">
        <div className="block md:flex lg:flex items-center justify-center gap-24 ">
          <div className="w-full md:w-1/5 lg:w-1/5 ">
            <div className="w-full block lg:float-right ">
              <img
                src="https://i.ibb.co/rbZ198z/userre.jpg"
                alt=""
                className="h-auto border-2"
              />
              <div className="text-center">
                <h2 className="font-bold text-xl mt-2">
                  CLIENTS LOVE WHAT I DO
                </h2>
                <p className="py-3">
                  Feedback are invaluable sources of fuel the growth and
                  improvement of any creative developer
                </p>
                <Link
                  to="/about"
                  className="border border-white text-secondary transition-all hover:font-bold hover:border-secondary px-5 py-1 text-sm"
                >
                  READ MORE
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
