import React from "react";
import MainContainer from "../containers/MainContainer";
import Sidebar from "../sidebar/SidebarFilter";
import Image from "next/image";
import Carousel from "./Carousel";
import AllProducts from "./AllProducts";

const HomeComponent = () => {
    // const [links, setLinks] = useState();


  return (
    <MainContainer>
      <div className=" xl:pl-5 px-3 xl:px-0 gap-3">
        <div className=" flex">
          <div className=" w-[277px] z-10 hidden xl:block">
          <Sidebar />
        </div>
        <div className="overflow-hidden w-full">
          <Carousel/>
        </div>  
        </div>
        
        <AllProducts/>
      </div>
    </MainContainer>
  );
};

export default HomeComponent;
