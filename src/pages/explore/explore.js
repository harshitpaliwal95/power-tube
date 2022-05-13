import { useEffect } from "react";
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
    exploreState: { explore, category },
    exploreDispatch,
  } = useExplore();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        exploreDispatch({ type: "ALL_VIDEO", payload: response.data.videos });
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);


  const defaultState = [...explore];
  const categoryVideos = setCategory(defaultState, category);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="chip-container">
            {explore.length === 0 ? (
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
