import React from "react";

const SideBar = () => {
  return (
    <div className="w-60 h-screen overflow-y-auto p-2 text-sm">
      <div className="flex flex-col gap-1">
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 bg-gray-100 font-medium">
          <i className="bi bi-house-door-fill text-xl"></i>
          <span>Home</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-collection-play text-xl"></i>
          <span>Shorts</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-collection text-xl"></i>
          <span>Subscriptions</span>
        </button>
      </div>

      <hr className="my-3" />

      <div className="flex flex-col gap-1">
        <p className="font-medium">You</p>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-clock-history text-xl"></i>
          <span>History</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-list-ul text-xl"></i>
          <span>Playlists</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-play-btn text-xl"></i>
          <span>Your videos</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-clock text-xl"></i>
          <span>Watch later</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-hand-thumbs-up text-xl"></i>
          <span>Liked videos</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <i className="bi bi-download text-xl"></i>
          <span>Downloads</span>
        </button>
      </div>

      <hr className="my-3" />

      <div className="flex flex-col gap-1">
        <p className="px-2 py-1 font-medium">Subscriptions</p>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <img
            src="/shorts.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span>Hanan’s Family</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <img
            src="/shorts.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span>Youssef Benlemlh</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <img
            src="/shorts.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span>Set of Two</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <img
            src="/shorts.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span>Life of Aaron</span>
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
          <img
            src="/shorts.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span>VoxGuru</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
