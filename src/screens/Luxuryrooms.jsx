import React, { useEffect, useState } from "react";
import feature1 from "../assets/feature-1.jpg";
import feature2 from "../assets/feature-2.jpg";
import feature3 from "../assets/feature-3.jpg";
import feature4 from "../assets/feature-4.jpg";

const roomItems = [
  {
    id: 1,
    w: "25",
    h: "602px",
    category: "suite",
    price: "$134",
    title: "Small Suite",
    image: feature1,
    img: "img1",
  },
  {
    id: 2,
    w: "45",
    h: "302px",
    category: "suite",
    price: "$199",
    title: "Deluxe Room",
    image: feature2,
    img: "img2",
  },
  {
    id: 3,
    w: "25",
    h: "602px",
    category: "family",
    price: "$319",
    title: "Family Room",
    image: feature3,
    img: "img3",
  },
  {
    id: 4,
    w: "48",
    h: "302px",
    category: "luxury",
    price: "$169",
    title: "Single Room",
    image: feature4,
    img: "img4",
  },
  {
    id: 5,
    w: "48",
    h: "602px",
    category: "luxury",
    price: "$169",
    title: "luxury Room",
    image: feature1,
    img: "img1",
  },
];

function Luxuryrooms() {
  const [activeCategory, setActiveCategory] = useState("*");

  const [widowsize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowsize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  const filteredRoomItems =
    activeCategory === "*"
      ? roomItems
      : roomItems.filter((item) => item.category === activeCategory);

  return (
    <section className="w-screen py-20 flex flex-col justify-center items-center bg-[#d4d4d43e] ">
      <div className="container flex flex-wrap justify-between items-center">
        <div className=" text-center lg:text-start w-full lg:w-max  ">
          <span className="text-lg py-10  text-[#B89140]">
            Deluxe and Luxury
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold ">
            Our Luxury Rooms
          </h2>
        </div>

        <div className="my-8 w-full lg:w-max">
          <ul className="flex justify-center lg:justify-between flex-wrap w-full gap-5">
            <li
              onClick={() => handleFilter("*")}
              className={`p-2 md:p-4 shadow-md ${
                activeCategory === "*"
                  ? "bg-[#B89140] text-white"
                  : "bg-gray-300"
              }`}
            >
              All Rooms
            </li>
            <li
              onClick={() => handleFilter("luxury")}
              className={`p-2 md:p-4 shadow-md ${
                activeCategory === "luxury"
                  ? "bg-[#B89140] text-white"
                  : "bg-gray-300"
              }`}
            >
              Luxury
            </li>
            <li
              onClick={() => handleFilter("single")}
              className={`p-2 md:p-4 shadow-md ${
                activeCategory === "single"
                  ? "bg-[#B89140] text-white"
                  : "bg-gray-300"
              }`}
            >
              Single
            </li>
            <li
              onClick={() => handleFilter("suite")}
              className={`p-2 md:p-4 shadow-md ${
                activeCategory === "suite"
                  ? "bg-[#B89140] text-white"
                  : "bg-gray-300"
              }`}
            >
              Small Suite
            </li>
            <li
              onClick={() => handleFilter("family")}
              className={`p-2 md:p-4 shadow-md ${
                activeCategory === "family"
                  ? "bg-[#B89140] text-white"
                  : "bg-gray-300"
              }`}
            >
              Family
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-2  md:px-0 w-full  flex flex-wrap gap-5">
        {filteredRoomItems.map((item) => (
          <div
            key={item.id}
            style={{
              width: widowsize.width < 1024 ? "100%" : `${item.w}% `,
              height: widowsize.width < 1024 ? `${item.h}` : "320px",
            }}
            className={`relative bg-yellow-300 w-full mx-auto  bg_${item.img} flex flex-col justify-end  items-start shadow-md`}
          >
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#000000db] to-[#00000017] " />
            <div className="text-center p-4 text-white z-10">
              <h6 className="text-sm md:text-base">
                <a href="#">
                  <span className="text-[#B89140]">{item.price}</span> / Night
                </a>
              </h6>
              <a
                className="simple-btn text-sm md:text-base"
                href="contact.html"
              >
                <i className="far fa-chevron-right"></i>Booking Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Luxuryrooms;
