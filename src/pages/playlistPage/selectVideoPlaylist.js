import { Navbar, Sidebar, Card } from "../../components";
import { usePlaylist } from "../../context";
import { useParams } from "react-router-dom";

export const SelectVideoPlaylist = () => {
  const { playlist } = usePlaylist();

  const { id } = useParams();
  console.log(id);
  console.log(playlist);
  const playlistToRender = playlist.find((obj) => obj._id === id);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {id &&
              playlistToRender.videos.map((video) => (
                <Card key={video._id} video={video} />
              ))}
          </div>
        </main>
      </section>
    </div>
  );
};
