import React from "react";
import VedioShimmerCard from "./VedioShimmerCard";

const ShimmerVedioContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
      <VedioShimmerCard />
    </div>
  );
};

export default ShimmerVedioContainer;
