import React from "react";

export default function ProjectButtonLive({ children }) {
  return (
    <div>
      <div className="relative px-2 py-2 text-white group text-center">
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#f57bef] group-hover:bg-[#f33bea] group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#f33bea] group-hover:bg-[#f57bef] group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#f55ced] -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#f3b3f0] -rotate-12"></span>
        <span className="relative">{children}</span>
      </div>
    </div>
  );
}
