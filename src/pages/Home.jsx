import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Companies from "../components/companies/Companies";
import NewArrivals from "../components/newArrivals/NewArrivals";
import TopSelling from "../components/topSelling/TopSelling";
import BrowseByCatogories from "../components/browseByCatogories/BrowseByCatogories";
import Testemonials from "../components/testemonials/Testemonials";
import { useState, useEffect } from "react";

import useAxios from "../api/useAxios";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await useAxios().get(`/product/product-list/`);
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <HeroBanner />
      <Companies />
      <NewArrivals product={product} />
      <TopSelling />
      <BrowseByCatogories />
      <Testemonials />
    </div>
  );
};

export default Home;
