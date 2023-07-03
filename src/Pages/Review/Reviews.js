import React from "react";
import Slider from "./Slider";

export default function Reviews() {
  return (
    <div className="bg-gray-300 py-24">
      <div className="container block md:flex lg:flex items-center justify-center gap-5 mx-auto px-0 md:px-10 lg:px-0">
        <div className="w-full md:w-2/5 lg:w-2/5 ">
          <div className="w-full lg:w-1/2 block lg:float-right ">
            <img
              src="https://i.ibb.co/rbZ198z/userre.jpg"
              alt=""
              className="h-auto border-2"
            />
            <div className="text-center">
              <h2 className="font-bold text-xl mt-2">CLIENTS LOVE WHAT I DO</h2>
              <p className="py-3">
                Feedback are invaluable sources of fuel the growth and
                improvement of any creative developer
              </p>
              <button className="border transition hover:font-semibold border-gray-400 hover:border-[#f33bea] px-5 py-1 text-sm">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 lg:w-3/5 pt-10 md:pt-0 lg-pt-0">
          <div className="bg-[url('https://i.ibb.co/dkJz6J4/26445197-15643-removebg-preview.png')] bg-no-repeat bg-cover bg-center p-10 lg:p-28">
            <Slider/>
          </div>
        </div>
      </div>
    </div>
  );
}
