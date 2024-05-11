import Image from "next/image";
import SearchCompo from "./Search"; 
import "@/styles/Navbar.css";
import SelectCur from "./Select";
import MainContainer from "@/components/containers/MainContainer";
import BecomeSellerBtn from "./Buttons";
import Hamburger from "@/lib/Hamburger";
import Link from "next/link";
 import Buttons from "@/utils/Buttons";
const Navbar = () => {


 
  return (
    <MainContainer color={"#e5f0ff"}>
    <div className=" bg-[#e5f0ff] flex justify-between items-center px-5 py-[2px] z-10">
      <div className=" flex gap-4 justify-center items-center">
        <Hamburger color={"black"} isShow={true} tailClass={"top-[13px]"}/>
        <Link href={"/"}>
        <Image
          src={"https://zonesparks.com/assets/icon_logo-B9EY-gHI.svg"}
          width={200}
          height={50}
          alt="Logo"
          
        />
        </Link>
        <BecomeSellerBtn/>
      </div>
      <>
        <SearchCompo />
        <section className=" flex gap-5">
          <SelectCur />
          <div className="h-[20px] w-[1px] bg-gray-800 my-auto  hidden md:block"></div>
          <Buttons/>
        </section>
      </>
    </div>
    </MainContainer>
  );
};

export default Navbar;
