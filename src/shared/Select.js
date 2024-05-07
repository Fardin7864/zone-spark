"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SelectCur = () => {
  const [isCurShow, setCurShow] = useState(false);
  const [currency, setCurrency] = useState("BDT");
  const [isLangShow, setLangShow] = useState(false);
  const [language, setLanguage] = useState("English");
  return (
    <>
      <div className=" xl:flex justify-center items-center gap-2 hidden ">
        <div
        onMouseEnter={() => setCurShow(true)}
        onMouseLeave={() => setCurShow(false)}
        className=" h-full flex flex-col justify-center items-center"
        >
          <button
            className=" flex justify-center items-center gap-2 text-xs font-bold text-[#098cd0] hover:text-gray-700"
            
          >
            {currency}
            {!isCurShow ? <IoIosArrowDown /> : <IoIosArrowUp />}{" "}
          </button>
          <div className=" relative -left-7">
            <div className={`${isCurShow ? "block" : "hidden"} absolute top-4`}>
              <div className=" relative flex flex-col bg-white px-5 py-1 gap-3">
                <button onClick={() => setCurrency("BDT")} className=" hover:text-[#098cd0] font-bold text-xs">BDT</button>
                <button onClick={() => setCurrency("USD")} className=" hover:text-[#098cd0] font-bold text-xs">USD</button>
              </div>
            </div>
          </div>
        </div>
        <div 
            onMouseEnter={() => setLangShow(true)}
            onMouseLeave={() => setLangShow(false)}
            className="h-full flex justify-center items-center flex-col"
        >
          <button
            className=" flex justify-center items-center gap-2 text-xs font-bold text-[#098cd0] hover:text-gray-700"
            
          >
            {language} {!isLangShow ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div className=" relative -left-9">
            <div
              className={`${isLangShow ? "block" : "hidden"} absolute top-4`}
            >
              <div className=" relative flex flex-col bg-white px-5 gap-3 py-1">
                <button onClick={() => setLanguage("English")} className=" hover:text-[#098cd0] font-bold text-xs">English</button>
                <button onClick={() => setLanguage("বাংলা")} className=" hover:text-[#098cd0] font-bold text-xs">বাংলা</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCur;
