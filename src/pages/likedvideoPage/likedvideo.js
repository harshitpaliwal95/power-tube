import { Card, PagePlaceHolder, Sidebar } from "../../components";
import { useVideoGlobal } from "../../context/globalContext";

export const LikedVideo = () => {
  const {
    state: { likeVideo },
  } = useVideoGlobal();

  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {likeVideo.length === 0 && (
            <>
              <p className="main-heading">No Liked Videos</p>
              <i className="bi bi-x-lg empty-icon"></i>
            </>
          )}
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
