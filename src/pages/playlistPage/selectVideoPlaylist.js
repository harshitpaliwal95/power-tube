import { Navbar, Sidebar, Card } from "../../components";
import { usePlaylist } from "../../context";

export const SelectVideoPlaylist = () => {
  const { playlist } = usePlaylist();

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            {playlist.videos.map((video) => (
              <Card key={video._id} video={video} playlist={true} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};
