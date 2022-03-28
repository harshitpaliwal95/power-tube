import { Navbar, Sidebar } from "../../components";

export const WatchLater = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three"></div>
        </main>
      </section>
    </div>
  );
};