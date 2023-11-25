import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Featuecard({ subTitle, title, description,image,key,index }) {

    const isOdd = index % 2 === 0;

  return (
    <div className={`container m-auto h-auto   lg:flex ${index == isOdd ? 'flex-row':'flex-row-reverse'}  relative justify-end `} key={key}>
      <div  className={` w-full lg:w-[70%] lg:py-28  text-left font-lato font flex flex-wrap  shadow-lg bg-[#d4d4d43e]
    
      ${index == isOdd ? 'justify-end':'justify-start'}
      `} >
        <img
          src={image}
          alt=""
          className={`w-full h-[50%] lg:object-cover lg:w-[50%] lg:h-[80%] lg:absolute z-30  lg:bottom-1/2  lg:${index == isOdd ? 'left-0':' right-0'}  lg:transform  lg:translate-y-1/2 `}
        />
        <div className=" w-full lg:w-[70%] p-7  flex flex-col justify-center h-[50%">
          <p className="text-yellow-600 text-lg">{subTitle}</p>
          <h1 className="font-bold text-base  lg:text-5xl  lg:font-medium lg:pb-6">
            {title}
          </h1>
          <p className="text-sm pt-2 w-[80%]">{description}</p>
          <div className="w-max px-5 py-4 border-yellow-600 border-solid border-[1px] mt-9 text-yellow-600 flex gap-6 lg:w-[200px] lg:h-[60px] lg:pt-4">
            <p className="font-medium text-lg pl-8 w-max"> ReadMore </p>
            <ArrowForwardIcon  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuecard;
