
import Image from "next/image";
import SearchCompo from "./Search";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import "@/styles/Navbar.css";
import SelectCur from "./Select";
import MainContainer from "@/components/containers/MainContainer";
import BecomeSellerBtn from "./Buttons";
import Hamburger from "@/lib/Hamburger";
import Link from "next/link";
const Navbar = () => {

 
  return (
    <MainContainer color={"#e5f0ff"}>
    <div className=" bg-[#e5f0ff] flex justify-between items-center px-5 py-[2px] z-10">
      <div className=" flex gap-4 justify-center items-center">
        <Hamburger color={"black"} isShow={true} tailClass={"top-[13px]"}/>
        <Image
          src={"https://zonesparks.com/assets/icon_logo-B9EY-gHI.svg"}
          width={200}
          height={50}
          alt="Logo"
        />
        <BecomeSellerBtn/>
      </div>
      <>
        <SearchCompo />
        <section className=" flex gap-5">
          <SelectCur />
          <div className="h-[20px] w-[1px] bg-gray-800 my-auto  hidden md:block"></div>
          <div className=" flex justify-between items-center gap-8 relative bottom-1">
            <button className=" hover:text-blue-500 md:flex flex-col justify-center items-center  hidden">
              <sub className=" bg-[#098cd0] p-1 text-white rounded-full py-2 left-3 top-3">
                0
              </sub>
              <GoHeart className=" text-2xl " />
              <p className=" text-[10px] font-semibold">Wishlist</p>
            </button>

            <button className=" hover:text-blue-500 flex flex-col justify-center items-center">
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
        </section>
      </>
    </div>
    </MainContainer>
  );
};

export default Navbar;
