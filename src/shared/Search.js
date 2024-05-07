"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchCompo = () => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    console.log("Search submitted:", searchValue);
    
  };

  return (
    <div className="lg:flex items-center w-[35%] hidden">
      <input
        onChange={onInputChange}
        value={searchValue}
        placeholder="Search Product"
        className="pl-4 text-xs py-[12px] rounded-l-md w-full border border-[#098cd0] focus:outline-none"
      />
      <div
        onClick={onSubmit}
        className="cursor-pointer py-[11px] rounded-r-md px-2 text-white bg-[#098cd0] border border-[#098cd0]"
      >
        <IoSearchOutline className="text-lg hover:text-blue-200" />
      </div>
    </div>
  );
};

export default SearchCompo;
