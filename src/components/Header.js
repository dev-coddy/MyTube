import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full mt-2">
      <div className="div flex gap-4 ml-2">
        <i className="bi bi-list text-3xl"></i>
        <div id="mytube-logo" className="flex items-center">
          <i className="bi bi-youtube text-4xl"></i>
          <h3 className="">YouTube</h3>
        </div>
      </div>
      <div className="div flex items-center gap-3">
        <div className="p-2  flex items-center border w-full max-w-[600px] rounded-full ml-20">
          <input type="text" className="flex-grow outline-none px-4 " />
          <button className="px-2 border-l">
            <i className="bi bi-search  ml-3 text-xl"></i>
          </button>
        </div>
        <button className="bg-gray-100 rounded-full p-2">
          <i className="bi bi-mic-fill text-xl"></i>
        </button>
      </div>
      <div className="flex gap-2 mr-5">
        <button className="bg-gray-100 rounded-3xl p-2 px-3 hover:bg-slate-200">
          <span className="mr-1">
            <i className="bi bi-plus-lg"></i>
          </span>
          Create
        </button>
        <button className="bg-gray-100 p-3 w-10 h-10 flex items-center justify-center rounded-full">
          <i className="bi bi-bell-fill"></i>
        </button>
        <button className="w-10 h-10">
          <i className="bi bi-person-circle text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
