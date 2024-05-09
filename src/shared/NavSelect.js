"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const NavSelect = ({ title, options, w }) => {
  const [isShow, setshow] = useState(false);
  return (
    <div 
    className=" flex flex-col h-full z-100"
        onMouseEnter={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
    >
    <div
      className={`w-${w} h-full flex flex-col justify-center items-center  py-3 hover:border-b-4 hover:border-blue-500`}
    >
      <button className=" flex justify-center items-center gap-2 text-xs font-bold text-white hover:text-blue-300">
        {title}
        {!isShow ? <IoIosArrowDown /> : <IoIosArrowUp />}{" "}
      </button>
    </div>
      <div className=" ">
        <div className={`${isShow ? "block" : "hidden"} absolute w-40`}> 
          <div className=" relative flex flex-col bg-white px-5 py-3 gap-3 justify-start shadow-xl">
            {options.map((option, ind) => (
              <button key={ind} className=" hover:text-[#098cd0] text-xs text-start">
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default NavSelect;
