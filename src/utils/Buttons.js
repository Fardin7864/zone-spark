"use client"
import React from 'react';
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Link from 'next/link';
import toast from 'react-hot-toast';

const Buttons = () => {

    const handleToast = () => { 
        toast.error("This feature is not active!")
       }


    return (
        <div className=" flex justify-between items-center gap-8 relative bottom-1">
            <button onClick={()=>handleToast()} className=" hover:text-blue-500 md:flex flex-col justify-center items-center  hidden">
              <sub className=" bg-[#098cd0] p-1 text-white rounded-full py-2 left-3 top-3">
                0
              </sub>
              <GoHeart className=" text-2xl " />
              <p className=" text-[10px] font-semibold">Wishlist</p>
            </button>

            <button onClick={()=>handleToast()} className=" hover:text-blue-500 flex flex-col justify-center items-center">
              <sup className=" bg-[#098cd0] p-1 text-white rounded-full py-2 left-3 top-3">
                0
              </sup>
              <BsCart3  className=" text-2xl " />
              <p  className=" text-[10px] font-semibold">Cart</p>
            </button>

            <Link href={"/login"} className=" hover:text-blue-500 hidden md:flex flex-col justify-center items-center relative top-[7px]">
              <GoPerson className=" text-2xl " />
              <p  className=" text-[10px] font-semibold">Login</p>
            </Link>
          </div>
    );
};

export default Buttons;