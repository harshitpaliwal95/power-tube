import { Navbar, Sidebar } from "../../components";
import { NewPlaylist } from "./components/newPlatlist";

export const Playlist = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            <NewPlaylist />
          </div>
        </main>
      </section>
    </div>
  );
};
