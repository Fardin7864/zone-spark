import MainContainer from '@/components/containers/MainContainer';
import React from 'react';
import NavSelect from './NavSelect';
const home = ["Conpany Overview", "Message From Chirman", "Message From Managing Director", "Code of Ethics"]
const arrival = ["Product Category", "Zone Sparks Special", "Short Videos", "Video & Link"]
const supply = ["Supplier Registartion", "Buyer Registration", "Wholesale & Retail"]
const investor = ["Investors", "Fund Lenders"]
const vendor = ["Become a Seller", "Vendor Requirement", "Vendor Policy", "Vendor Payment Policy"]
const NavManue = () => {
    return (
        <MainContainer>
            <div className=' w-full h-12 gap-2 flex items-center bg-gradient-to-r from-[#090243] to-[#0987cb]'>
                <NavSelect title={"HOME"} options={home} w={"20"} />
                <NavSelect title={"NEW ARRIVALS"} options={arrival} w={"40"} />
                <NavSelect title={"SUPPLIERS & BUYERS"} options={supply} w={"40"} />
                <NavSelect title={"INVESTOR NETWORK"} options={investor} w={"40"} />
                <NavSelect title={"VENDOR NETWORK"} options={vendor} w={"40"} />
            </div>
        </MainContainer>
    );
};

export default NavManue;