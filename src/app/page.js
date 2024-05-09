import MainContainer from "@/components/containers/MainContainer";
import Sidebar from "@/components/sidebar/SidebarFilter";

export default function Home() {
  return (
    <MainContainer>
      <div className=" px-5">
        <div className=" w-[230px]">
        <Sidebar />
        </div>
      </div>
    </MainContainer>
  );
}
