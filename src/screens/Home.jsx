import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/Header";

const YourComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerScroll = 400;
      setIsScrolled(scrollPosition > triggerScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg_image w-screen h-screen relative">
      <div className="absolute w-full h-full z-10 bg-gradient-to-b from-[#000000] to-[#00000017]"></div>
      <div
        className={`w-full transition-all duration-300 z-50 ${
          isScrolled ? "shadow-md fixed top-0 animated" : ""
        }`}
      >
        <Navbar />
      </div>
      <Header />
    </div>
  );
};

export default YourComponent;
