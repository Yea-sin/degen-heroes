import React from "react";
import DegenTown from "../DegenTown/DegenTown";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Roadmap from "../Roadmap/Roadmap";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DegenTown />
      <Roadmap />
    </div>
  );
};

export default Home;
