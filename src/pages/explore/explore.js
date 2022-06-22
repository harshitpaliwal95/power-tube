import { useEffect, useState } from "react";
import {
  Navbar,
  Sidebar,
  Card,
  Chips,
  chipsData,
  Loader,
} from "../../components";
import axios from "axios";
import { useExplore } from "../../context/exploreContext";
import { setCategory } from "../../utils/setCategory";

export const Explore = () => {
  const {
    exploreState: { category },
    exploreDispatch,
  } = useExplore();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        exploreDispatch({ type: "ALL_VIDEO", payload: response.data.videos });
        setTimeout(() => {
          setVideo(() => response.data.videos);
        }, 1200);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  const defaultState = [...video];
  const categoryVideos = setCategory(defaultState, category);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="chip-container">
            {video.length === 0 ? (
              <Loader />
            ) : (
              chipsData.map((item) => <Chips key={item.chipName} data={item} />)
            )}
          </div>

          <div className="grid-three">
            {categoryVideos.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};
