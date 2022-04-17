import React from "react";
import DegenTown from "../DegenTown/DegenTown";
import Founders from "../Founders/Founders";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Heroes from "../Heroes/Heroes";
import Roadmap from "../Roadmap/Roadmap";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DegenTown />
      <Roadmap />
      <Heroes />
      <Founders />
    </div>
  );
};

export default Home;
