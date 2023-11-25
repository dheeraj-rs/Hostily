import React from "react";
import cleaning from "../assets/cleaning.png";
import wifi from "../assets/wifi.png";
import location from "../assets/location.png";

const Facility = () => {
  return (
    <div className="flex flex-col pt-20 lg:flex-row justify-evenly items-center">
      <div className="p-5 gap-5 flex flex-col lg:flex-row justify-center items-center text-center ">
        <div className="bg-gray-100 rounded-full w-20 h-20  flex justify-center items-center mb-4 md:mb-0">
          <img src={cleaning} alt="" />
        </div>

        <div className="lg:text-start text-center">
          <h1 className="text-lg md:text-xl font-semibold">Room Cleaning</h1>
          <p className="text-sm font-thin">
            Proin massa augue, lacinia at blandit ac,
            <br /> fringilla scelerisque tortor
          </p>
        </div>
      </div>

      <div className=" p-5 gap-5 flex flex-col lg:flex-row justify-center items-center text-center ">
        <div className="bg-gray-100 rounded-full w-20 h-20  flex justify-center items-center mb-4 md:mb-0">
        <img src={wifi} alt="" />
        </div>

        <div className="lg:text-start text-center">
          <h1 className="text-lg md:text-xl font-semibold">Room Wifi</h1>
          <p className="text-sm font-thin">
            Proin massa augue, lacinia at blandit ac,
            <br /> fringilla scelerisque tortor
          </p>
        </div>
      </div>
      <div className=" p-5 gap-5 flex flex-col lg:flex-row justify-center items-center text-center ">
        <div className="bg-gray-100 rounded-full w-20 h-20  flex justify-center items-center mb-4 md:mb-0">
        <img src={location} alt="" />
        </div>

        <div className="lg:text-start text-center">
          <h1 className="text-lg md:text-xl font-semibold">Pickup & Drop</h1>
          <p className="text-sm font-thin">
            Proin massa augue, lacinia at blandit ac,
            <br /> fringilla scelerisque tortor
          </p>
        </div>
      </div>

    </div>
  );
};

export default Facility;
