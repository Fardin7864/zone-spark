"use client"
import React from 'react';
import SidebarFilter from './Filter';
import { GiLoincloth, GiLargeDress } from "react-icons/gi";
import { PiDress } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
import { PiHandHeart } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiRocket } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIceCreamOutline } from "react-icons/io5";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { PiGuitarThin } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { IoFlowerOutline } from "react-icons/io5";
import { PiPottedPlant } from "react-icons/pi";
import { PiHeartbeatBold } from "react-icons/pi";




const mans = [{option:"Test1",nastedOptions: ["Test1", "Test 2"]}, {option:"Test2",nastedOptions: ["Test1", "Test 2","Test1", "Test 2"]}, {option:"Test3",nastedOptions: ["Test1","Test1", "Test 2"]}]

const Sidebar = () => {
    return (
        <div className=' border'>
            <SidebarFilter title={"Man's Fashion"} options={mans} icon={<GiLoincloth className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Women's Fashion"} options={mans} icon={<PiDress className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Mom & Baby"} options={mans} icon={<LuBaby className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Health & Beauty"} options={mans} icon={<PiHandHeart className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Electronic Devices"} options={mans} icon={<CgSmartHomeRefrigerator className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Gadgets"} options={mans} icon={<PiRocket className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Home Appliances"} options={mans} icon={<HiOutlineComputerDesktop className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Sports & Outdoor"} options={mans} icon={<IoIceCreamOutline className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Musical Instruments"} options={mans} icon={<MdOutlineSportsVolleyball className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Books Library"} options={mans} icon={<PiGuitarThin className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Fabrics & Home Textile"} options={mans} icon={<LiaBookSolid className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Handicraft"} options={mans} icon={<IoFlowerOutline className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Medical Eqipments"} options={mans} icon={<PiPottedPlant className=' text-blue-600 text-xl' />}/>
            <SidebarFilter title={"Zone Sparks Special"} options={mans} icon={<PiHeartbeatBold className=' text-blue-600 text-xl' />}/>
        </div>
    );
};

export default Sidebar;