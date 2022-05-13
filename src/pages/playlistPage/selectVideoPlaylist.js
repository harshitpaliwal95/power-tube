import { Sidebar, Card } from "../../components";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../context";

export const SelectVideoPlaylist = () => {
  const { playlist } = usePlaylist();

  const { id } = useParams();
  const getVideos = playlist.find((item) => item._id === id);


  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {getVideos &&
              getVideos.videos.map((video) => (
                <Card key={video._id} video={video} />
              ))}
          </div>
        </main>
      </section>
    </div>
  );
};
