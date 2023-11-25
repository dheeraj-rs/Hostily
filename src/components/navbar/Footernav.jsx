import React from 'react'

function Footernav() {
  return (
    <div className=" absolute  bottom-0 z-20 w-full px-3 flex justify-center text-white">
    <div className="container w-full flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-6  bg-black">
      <div className=" w-full flex gap-10 flex-col md:flex-row lg:border-r lg:items-center lg:justify-center border-[#999999]">
        <div className="flex w-full flex-col  lg:items-center lg:justify-center md:border-r ">
          <a className="text-[#999999]">
            Check In
          </a>
          <input type="date" className="text-[#B89146] lg:text-center bg-transparent " />
        </div>
        <div className="flex w-full flex-col lg:items-center lg:justify-center lg:border-r">
          <a className="text-[#999999]">
            Check Out
          </a>
          <input type="date" className="text-[#B89146] lg:text-center bg-transparent" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
        <div className="flex w-full flex-col lg:items-center lg:justify-center lg:text-center">
          <a className="text-[#999999]">
            Room
          </a>
          <select className="text-[#B89146] bg-transparent lg:text-center lg:px-10">
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="4">4 Rooms</option>
          </select>
        </div>
        <div className="mt-4 md:mt-0  lg:pl-10 w-full">
          <button className="w-full md:w-auto px-6 bg-[#B89146] py-5">
            CHECK_NOW
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footernav