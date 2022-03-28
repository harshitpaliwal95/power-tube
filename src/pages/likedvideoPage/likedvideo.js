import { Navbar, Sidebar, Card } from "../../components";

export const LikedVideo = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            <Card />
          </div>
        </main>
      </section>
    </div>
  );
};
