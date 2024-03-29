import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Companies from "../components/companies/Companies";
import NewArrivals from "../components/newArrivals/NewArrivals";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <NewArrivals />
    </div>
  );
};

export default Home;
