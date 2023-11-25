import React from "react";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const Blogs = () => {
  return (
      <div className="container mx-auto p-3 mb-32">
        <div className="mb-12 text-center">
          <span className="text-[#b89146] font-semibold">Our Blog</span>
          <h2 className="mt-1 text-3xl font-semibold leading-10">
            Read Our Blog and News
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8  relative group">
            <div className=" overflow-hidden">
              <a href="blog-details.html">
                <img
                  src={blog1}
                  alt="blog-1"
                  className="hover:transform hover:scale-110 transition-transform duration-500"
                />
              </a>
            </div>
            <div className="absolute bottom-0 mx-5 bg-[#FFFFFF]  text-[#333334] border flex flex-col transform translate-y-1/2 -mb-1/2 group-hover:shadow-lg transition-shadow">
              <div className="px-5 py-8 flex items-center gap-2">
                <div className="min-w-[70px] border-b">
                  <h3 className="text-2xl font-semibold leading-9 ">27</h3>
                  <span>July 2022</span>
                </div>
                <div className="">
                  <h5>
                    <a
                      href="blog-details.html"
                      className="no-underline text-[22px] hover:text-[#b89146] "
                    >
                      The ultimate guide to finding the best hotels in your
                      area.
                    </a>
                  </h5>
                </div>
              </div>
              <div className="text-end pr-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="blog-details.html" className="simple-btn-2">
                  Read More<i className="fal "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8  relative group">
            <div className=" overflow-hidden">
              <a href="blog-details.html">
                <img
                  src={blog2}
                  alt="blog-2"
                  className="hover:transform hover:scale-110 transition-transform duration-500"
                />
              </a>
            </div>
            <div className="absolute bottom-0 mx-5 bg-[#FFFFFF]  text-[#333334] border flex flex-col transform translate-y-1/2 -mb-1/2 group-hover:shadow-lg transition-shadow">
              <div className="px-5 py-8 flex items-center gap-2">
                <div className="min-w-[70px] border-b">
                  <h3 className="text-2xl font-semibold leading-9 ">27</h3>
                  <span>July 2022</span>
                </div>
                <div className="">
                  <h5>
                    <a
                      href="blog-details.html"
                      className="no-underline text-[22px] hover:text-[#b89146] "
                    >
                      Book a room Today most Affordable Rates.
                    </a>
                  </h5>
                </div>
              </div>
              <div className="text-end pr-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="blog-details.html" className="simple-btn-2">
                  Read More<i className="fal "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8  relative group">
            <div className=" overflow-hidden">
              <a href="blog-details.html">
                <img
                  src={blog3}
                  alt="blog-3"
                  className="hover:transform hover:scale-110 transition-transform duration-500"
                />
              </a>
            </div>
            <div className="absolute bottom-0 mx-5 bg-[#FFFFFF]  text-[#333334] border flex flex-col transform translate-y-1/2 -mb-1/2 group-hover:shadow-lg transition-shadow">
              <div className="px-5 py-8 flex items-center gap-2">
                <div className="min-w-[70px] border-b">
                  <h3 className="text-2xl font-semibold leading-9 ">27</h3>
                  <span>July 2022</span>
                </div>
                <div className="">
                  <h5>
                    <a
                      href="blog-details.html"
                      className="no-underline text-[22px] hover:text-[#b89146] "
                    >
                      Hotel Booking is the best choice for hotel booking.
                    </a>
                  </h5>
                </div>
              </div>
              <div className="text-end pr-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="blog-details.html" className="simple-btn-2">
                  Read More<i className="fal "></i>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
  );
};

export default Blogs;