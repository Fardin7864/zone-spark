import MainContainer from "@/components/containers/MainContainer";
import React from "react";
import NavSelect from "./NavSelect";
import Hamburger from "@/lib/Hamburger";
import { MdOutlineFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const home = [
  "Conpany Overview",
  "Message From Chirman",
  "Message From Managing Director",
  "Code of Ethics",
];
const arrival = [
  "Product Category",
  "Zone Sparks Special",
  "Short Videos",
  "Video & Link",
];
const supply = [
  "Supplier Registartion",
  "Buyer Registration",
  "Wholesale & Retail",
];
const investor = ["Investors", "Fund Lenders"];
const vendor = [
  "Become a Seller",
  "Vendor Requirement",
  "Vendor Policy",
  "Vendor Payment Policy",
];
const NavManue = () => {
  return (
    <div className=" hidden md:block">
      <div className=" bg-gradient-to-r from-[#090243] to-[#0987cb] overflow-hidden">
        <div className=" flex justify-between px-5">
          <div className=" w-full h-[49px] gap-2 flex items-center ">
            <div className=" w-[230px] flex gap-3 bg-[#098cd0] h-full justify-center items-center px-3 text-white text-sm font-semibold">
              <Hamburger
                tailClass="top-[8px] h-[25px]"
                color={"white"}
                isShow={true}
              />{" "}
              BROWSE CATEGORIES
            </div>
            <NavSelect title={"HOME"} options={home} w={"20"} />
            <NavSelect title={"NEW ARRIVALS"} options={arrival} w={"40"} />
            <NavSelect title={"SUPPLIERS & BUYERS"} options={supply} w={"40"} />
            <NavSelect title={"INVESTOR NETWORK"} options={investor} w={"40"} />
            <NavSelect title={"VENDOR NETWORK"} options={vendor} w={"40"} />
          </div>
          <div className="xl:flex items-center gap-3 hidden ">
            <div className="h-[20px] w-[1px] bg-slate-200 my-auto  hidden md:block"></div>
            <div className=" flex gap-5 text-white">
           <button> <MdOutlineFacebook/></button>
           <button><FaYoutube /></button>
           <button><FaLinkedin /></button>
           <button><FaTwitter /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavManue;
