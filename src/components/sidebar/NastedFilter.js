"use client"

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowUp } from "react-icons/io";

const Options = ({ title, options, icon}) => { 
    const [isShow, setshow] = useState(false);
    console.log(options)
    return (
      <div 
      className=" flex text-black hover:text-white rounded-md"
          onMouseEnter={() => setshow(true)}
          onMouseLeave={() => setshow(false)}
      >
      <div
        className={`w-full h-full flex flex-col justify-start items-center  py-3 `}
      >
        <button className=" w-full flex justify-between items-center gap-2 text-sm pl-3 ">
         <span className=" flex gap-2 items-center">{icon}{title}</span> 
          {!isShow ? <IoIosArrowDropleft className=" -translate-x-3 duration-200 ease-in" /> : <IoIosArrowDropright className="duration-200 ease-in" />}{" "}
        </button>
      </div>
        <div className=" ">
          <div className={`${isShow ? "block" : "hidden"} absolute w-40`}> 
            <div className=" relative border-t top-2 flex flex-col bg-white justify-start shadow-xl rounded-md">
              {options?.map((option, ind) => (
                <button key={ind} className=" hover:bg-[#098cd0] text-xs text-black text-start hover:text-white pl-3 py-3 border-b rounded-md">
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      
      </div>
    );
  };

  export default Options;