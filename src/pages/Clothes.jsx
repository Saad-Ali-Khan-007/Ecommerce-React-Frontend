import React from "react";
import { Outlet } from "react-router-dom";
import FilterSidebar from "../components/clothes/FilterSidebar";
const Clothes = () => {
  return (
    <div className="flex m-auto max-w-[90%] mt-10 border-t p-6">
      <FilterSidebar />
      <Outlet />
    </div>
  );
};

export default Clothes;
