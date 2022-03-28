import { Navbar, Sidebar } from "../../components";
import { NewPlatlist } from "./components/newPlatlist";

export const Playlist = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            <NewPlatlist />
          </div>
        </main>
      </section>
    </div>
  );
};
