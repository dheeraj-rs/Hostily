import React from "react";
import icon from "../assets/logo.png";
import location from "../assets/location.png";
import {
  Call,
  Email,
  FacebookRounded,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

const Footer = () => {
  return (
    <div className="bg-[#0e1317] py-10">
      <div className="flex flex-col md:flex-row">

        {/* Left Section */}
        <div className="md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <div className="max-w-[150px] font-[400] mb-5">
            <a href="#">
              <img src={icon} alt="" />
            </a>
          </div>
          <p className="text-white max-w-[250px] mb-5">
            Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
          </p>
          <div className="flex gap-5">
            <ul className="flex flex-row gap-5">
              {/* ... Social media icons ... */}
              <li className="border border-gray-400 rounded-full p-2">
                <a href="#">
                  <i>
                    <FacebookRounded sx={{ color: "white" }} className="w-6 h-6" />
                  </i>
                </a>
              </li>
              <li className="border border-gray-400 rounded-full p-2">
                <a href="#">
                  <i>
                    <Twitter className="w-6 h-6 text-white" />
                  </i>
                </a>
              </li>
              <li className="border border-gray-400 rounded-full p-2">
                <a href="#">
                  <i>
                    <Instagram sx={{ color: "white" }} className="w-6 h-6" />
                  </i>
                </a>
              </li>
              <li className="border border-gray-400 rounded-full p-2">
                <a href="#">
                  <i>
                    <YouTube className="w-6 h-6" sx={{ color: "white" }} />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h5 className="text-[20px] leading-[30px] font-[500] text-white mb-5">
            Information
          </h5>
          <div className="flex flex-row gap-5 mb-5">
            <div>
              <i>
                <img src={location} className="w-6 h-6" alt="" />
              </i>
            </div>
            <div>
              <span className="text-white">
                <a href="">GXF4+8HQ Chippenham United Kingdom</a>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <div>
              <i>
                <Email className="text-[#b89146]" />
              </i>
            </div>
            <div>
              <span className="text-white">
                <a href="">help.info@gamil.com</a>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div>
              <i>
                <Call className="text-[#b89146]" />
              </i>
            </div>
            <div>
              <span className="text-white">
                <a href="">+123 (458) 585 568</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h5 className="text-[20px] leading-[30px] font-[500] text-white mb-5">
            Pages Link
          </h5>
          <div className="mt-5">
            <ul className="text-white">
              <li className="mb-3">
                <a href="">Room Cleaning</a>
              </li>
              <li className="mb-3">
                <a href="">Car Parking</a>
              </li>
              <li className="mb-3">
                <a href="">Swimming Pool</a>
              </li>
              <li className="mb-3">
                <a href="">Fitness Gym</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h5 className="text-[20px] leading-[30px] font-[500] text-white mb-5">
            Subscribe
          </h5>
          <div className="mt-5">
            <form action="" className="relative">
              <input
                className="h-14 w-full pl-6 outline-none"
                type="text"
                name="email"
                placeholder="Email Address"
              />
              <button className="absolute top-0 right-0 h-14 w-14 bg-[#b89146]">
                <i>
                  <PanToolAltIcon />
                </i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="mb-6 w-full border-t border-[#dbd5ca] mt-8" />

      <div className="md:w-full">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="w-full text-center py-3">
            <div className="text-center w-full">
              <p className="text-white">
                Copyright © 2022
                <a href="" className="text-[#b89146]">
                  ThemeOri
                </a>
                Website by
                <a href="" className="text-[#b89146]">
                  Hostily
                </a>
              </p>
            </div>
          </div>
          <div className="w-full text-center">
            <div>
              <ul className="text-white text-center flex justify-center">
                <li className="mr-3 pr-3 border-r">FAQ</li>
                <li className="mr-3 pr-3 border-r">Terms of Use</li>
                <li className="mr-3 pr-3">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
