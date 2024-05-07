import Image from "next/image";
import SearchCompo from "./Search";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import "@/styles/Navbar.css";
import SelectCur from "./Select";

const Navbar = () => {
  return (
    <div className=" bg-[#e5f0ff] flex justify-between items-center border">
      <div className=" border flex gap-4 items-center">
        <Image
          src={"https://zonesparks.com/assets/icon_logo-B9EY-gHI.svg"}
          width={200}
          height={50}
          alt="Logo"
        />
        <button className=" text-xs font-semibold pl-4">Become a Seller</button>
      </div>
      <>
        <SearchCompo />
        <section className=" flex gap-5">
          <SelectCur />
          <div className="h-[20px] w-[1px] bg-gray-800 border-black my-auto"></div>
          <div className=" flex justify-between items-center gap-8 relative bottom-1">
            <div className=" flex flex-col justify-center items-center">
              <sub className=" bg-[#098cd0] p-1 text-white rounded-full py-2 left-3 top-3">
                0
              </sub>
              <GoHeart className=" text-2xl " />
              <p className=" text-[10px] font-semibold">Wishlist</p>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <sup className=" bg-[#098cd0] p-1 text-white rounded-full py-2 left-3 top-3">
                0
              </sup>
              <BsCart3  className=" text-2xl " />
              <p  className=" text-[10px] font-semibold">Cart</p>
            </div>

            <button className=" flex flex-col justify-center items-center relative top-[7px]">
              <GoPerson className=" text-2xl " />
              <p  className=" text-[10px] font-semibold">Login</p>
            </button>
          </div>
        </section>
      </>
    </div>
  );
};

export default Navbar;
