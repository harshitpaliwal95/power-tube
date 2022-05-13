import { Card, PagePlaceHolder, Sidebar } from "../../components";
import { useVideoGlobal } from "../../context/globalContext";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useVideoGlobal();

  return (
    <div>
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {watchLater.length === 0 && <PagePlaceHolder />}
          <div className="grid-three">
            {watchLater.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};
