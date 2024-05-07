"use client";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
import { IoSearchOutline } from "react-icons/io5";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 12,
      color: "#098cd0",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchCompo = () => (
  <Space direction="vertical" className=" w-[35%]">
    {/* <Search
      placeholder="Search product"
      allowClear
      enterButton={<IoSearchOutline />}
      size="large"
      onSearch={onSearch}
    /> */}
    <div className=" flex items-center  relative top-[2px]">
    <input
    placeholder="Search Prooduct"
    className=" pl-4 text-xs py-3 rounded-l-md w-full border border-[#098cd0] focus:outline-none"
    />
    <div className=" py-[11px] rounded-r-md px-2 text-white bg-[#098cd0] border border-[#098cd0]"><IoSearchOutline className=" text-lg" /></div>

    </div>
  </Space>
);
export default SearchCompo;
