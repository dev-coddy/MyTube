import { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";

import VideoCard from "./VideoCard";
import ShimmerVedioContainer from "./ShimmerVedioContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sidebarSlice";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  const closeHamburger = () => {
    dispatch(closeSideBar());
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (videos.length == 0) return <ShimmerVedioContainer />;

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {videos.map((video) => (
        <Link
          onClick={closeHamburger}
          to={"/watch?v=" + video.id}
          className="no-underline text-inherit"
        >
          <VideoCard props={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
