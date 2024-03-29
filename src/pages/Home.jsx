import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Companies from "../components/companies/Companies";
import NewArrivals from "../components/newArrivals/NewArrivals";
import TopSelling from "../components/topSelling/TopSelling";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <NewArrivals />
      <TopSelling />
    </div>
  );
};

export default Home;
