import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Companies from "../components/companies/Companies";
import NewArrivals from "../components/newArrivals/NewArrivals";
import TopSelling from "../components/topSelling/TopSelling";
import BrowseByCatogories from "../components/browseByCatogories/BrowseByCatogories";
import Testemonials from "../components/testemonials/Testemonials";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <NewArrivals />
      <TopSelling />
      <BrowseByCatogories />
      <Testemonials />
    </div>
  );
};

export default Home;
