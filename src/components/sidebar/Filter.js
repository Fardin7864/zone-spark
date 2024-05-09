"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiLoincloth } from "react-icons/gi";
import Options from "./NastedFilter";


const SidebarFilter = ({ title, options, w , icon, nestedOptions}) => {
  console.log(options)
  const [isShow, setshow] = useState(false);
  return (
    <div 
    className=" flex h-full hover:bg-[#098cd0] hover:text-white text-black border-b z-20"
        onMouseEnter={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
    >
    <div
      className={`w-full h-full flex flex-col justify-start items-center  py-2  hover:bg-[#098cd0] hover:text-white`}
    >
      <button className=" w-full flex justify-between items-center gap-2 text-sm pl-2">
       <span className=" flex gap-2 items-center">{icon}{title}</span> 
        {!isShow ? <IoIosArrowDown className=" -translate-x-3 duration-200 ease-in" /> : <IoIosArrowUp className="duration-200 ease-in" />}{" "}
      </button>
    </div>
      <div className=" ">
        <div className={`${isShow ? "block" : "hidden"} absolute w-40`}> 
          <div className=" relative top-2 flex flex-col bg-white justify-start shadow-xl border-b">
            {options?.map((option, ind) => (
              <div key={ind} className="  text-xs text-start border-b hover:bg-[#098cd0] hover:text-white rounded-md ">
                {/* {option} */}
                <Options title={option?.option} options={option?.nastedOptions}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default SidebarFilter;


 
