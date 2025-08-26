const VideoCard = ({ props }) => {
  const { channelTitle, description, title, publishedAt } =
    props?.snippet || {};
  const { url } = props?.snippet?.thumbnails?.medium || {};
  const { viewCount } = props?.statistics || {};

  return (
    <div className="max-w-[300px] shadow-sm p-2 rounded-lg border-gray-50 border">
      <div className="relative">
        <img src={url} alt="Video Thumbnail" className="rounded-xl w-full" />
        <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
          3:15
        </span>
      </div>

      <div className="flex mt-2 items-start text-left gap-3">
        <button className="bg-gray-100 p-2 w-10 h-10 flex items-center justify-center rounded-full">
          <i className="bi bi-person text-2xl"></i>
        </button>
        <div className="flex flex-col">
          <p className="text-base mb-1 font-semibold">{title}</p>
          <p className="text-sm text-gray-600 mb-0">{channelTitle}</p>
          <p className="text-sm text-gray-500 mt-0">
            {viewCount} views • 2 hours ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
