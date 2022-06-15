import { useParams } from "react-router-dom";
import { Sidebar, ActionButton } from "../../components";
import "./singleVideoPage.css";
import { useExplore } from "../../context";
import { useEffect } from "react";
import { HistoryApi } from "../../service";
import { findItem } from "../../utils/findItem";

export const SingleVideoPage = () => {
  const { id } = useParams();

  const {
    exploreState: { explore },
  } = useExplore();

  const video = findItem(explore, id);

  const { addToHistory } = HistoryApi();

  useEffect(() => {
    addToHistory(video);
  }, [video]);

  return (
    <main className="main-box">
      <Sidebar />
      <div className="main-product single-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="heading-lg title-video">{video.title}</p>
        <div className="card-icon-btn-right single-video-btn">
          <ActionButton playlistId={false} videoId={video._id} video={video} />
        </div>
      </div>
    </main>
  );
};
