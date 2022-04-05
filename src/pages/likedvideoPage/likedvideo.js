import { Card, PagePlaceHolder, Navbar, Sidebar } from "../../components";
import { useVideoGlobal } from "../../context/globalContext";

export const LikedVideo = () => {
  const {
    globalState: { likeVideo },
  } = useVideoGlobal();

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {likeVideo.length === 0 && <PagePlaceHolder />}
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
