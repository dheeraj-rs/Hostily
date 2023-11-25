import React from "react";

function Header() {
  return (
    <div className="absolute w-full top-64 left-1/2 transform -translate-x-1/2 z-10 text-center text-white ">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-[75%]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold p-7 lg:-ml-96">
            The Best Hotel
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold lg:-mr-32">
            Deals in the World
          </h1>
        </div>
        <div className="w-full lg:-mb-10  lg:pr-20 lg:w-[25%] pt-10 lg:pt-0  flex lg:items-end lg:justify-end justify-center">
          <div className="border-2 border-[#808080a4] w-24 h-24  rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
