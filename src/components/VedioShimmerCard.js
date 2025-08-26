import React from "react";

const VedioShimmerCard = () => {
  return (
    <div className="max-w-[300px] shadow-sm p-2 rounded-lg border-gray-50 border animate-pulse">
      <div className="w-full h-[170px] bg-gray-300 rounded-xl"></div>

      <div className="flex mt-2 items-start gap-3">
        <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default VedioShimmerCard;
