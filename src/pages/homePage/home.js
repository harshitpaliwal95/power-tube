import React from "react";
import { Navbar, Sidebar, Card } from "../../components";

import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Sidebar />
        <main className="main-product">
          <div className="grid-three">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </section>
    </div>
  );
};
