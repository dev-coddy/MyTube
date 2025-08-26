import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.sidebar.isOpen);

  return (
    <div className="flex gap-1 w-full">
      {isSidebarOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
