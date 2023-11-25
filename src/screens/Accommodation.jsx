import React from "react";
import HotelOne from '../assets/hotel-1.jpg'
import HotelTwo from '../assets/hotel-2.jpg'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Accommodations = () => {
  return (
    <div className="py-24  flex justify-center items-center">
      <div className="container flex items-center justify-center  flex-col w-full lg:flex-row ">
        <div className="mb-[30px] w-full  flex items-center  lg:w-1/2 pr-[.75rem] pl-[.75rem] ">
          <div className="block h-full lg:pt-8 ">
            <p className="  relative font-[600] text-[#b89146] mb-[7px] ">
              Accommodation
            </p>
            <h2 className="mb-[15px] w-[95%]  lg:w-full font-light lg:leading-[60px] text-3xl lg:text-5xl">
              Welcome to Our Hotels And Resorts
            </h2>
            <p className="mb-[55px] font-thin lg:w-[86%] ">
              Savvy travelers are looking for more than just the next
              destination on the map. They are looking for a memorable
              experience and to make new friends along the way.
            </p>
            <button className="bg-[#b89146] text-white items-center text-[16px] px-[40px] py-[16px]">
              READ MORE
              <a className="ml-[14px]" href="">
                <ArrowForwardIcon className="text-[18px] leading-[28px]" />
              </a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="block pr-[.75rem] pl-[.75rem] ">
            <div className="relative mt-[90px]">
              <img
                src={HotelOne}
                alt=""
                className="max-w-full h-auto flex items-center "
              />
              <div className="md:max-w-[400px] max-w-[270px] absolute top-0 right-0 ">
                <img src={HotelTwo} alt="" className=" mt-[-90px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;