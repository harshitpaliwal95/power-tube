import { Navbar, Sidebar, Card } from "../../components";

export const Explore = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            <Card />
            <Card />
          </div>
        </main>
      </section>
    </div>
  );
};
