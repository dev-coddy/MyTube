import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isOpen);

  return (
    <div className="flex gap-1">
      {isSidebarOpen && <SideBar />}
      <MainContainer />
    </div>
  );
};

export default Body;
