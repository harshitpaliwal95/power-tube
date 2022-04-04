import { Card, EmptyComp, Navbar, Sidebar } from "../../components";
import { useGlobal } from "../../context/globalContext";

export const WatchLater = () => {
  const {
    globalState: { watchLater },
  } = useGlobal();
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          {watchLater.length === 0 && <EmptyComp />}
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
