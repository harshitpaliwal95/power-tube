import { Card, EmptyComp, Navbar, Sidebar } from "../../components";
import { useGlobal } from "../../context/globalContext";

export const LikedVideo = () => {
  const {
    globalState: { likeVideo },
  } = useGlobal();

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {likeVideo.length === 0 && <EmptyComp />}
          <div className="grid-three">
            {likeVideo.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};
