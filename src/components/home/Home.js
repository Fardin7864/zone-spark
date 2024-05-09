import React from "react";
import MainContainer from "../containers/MainContainer";
import Sidebar from "../sidebar/SidebarFilter";
import Image from "next/image";
import Carousel from "./Carousel";

const HomeComponent = () => {
    // const [links, setLinks] = useState();


  return (
    <MainContainer>
      <div className=" pl-5 flex gap-3">
        <div className=" w-[277px] z-10">
          <Sidebar />
        </div>
        <div className="overflow-hidden w-full">
          <Carousel/>
        </div>
      </div>
    </MainContainer>
  );
};

export default HomeComponent;
