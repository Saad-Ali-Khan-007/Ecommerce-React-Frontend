import React from "react";
import filter from "../../assets/filter.svg";

const FilterSidebar = () => {
  return (
    <div className="max-sm:hidden">
      <div className="border-2 rounded-lg p-6">
        <div className="flex justify-between pb-4 mr-2 border-b-2 mb-4 gap-24 items-center">
          <h1 className="font-bold text-xl">Filters</h1>
          <img src={filter} alt="" />
        </div>
        <div className="flex flex-col gap-4 border-b-2 p-4 mb-4 items-center">
          <p>T-shirts</p>
          <p>Shorts</p>
          <p>Shirts</p>
          <p>Hoddie</p>
          <p>Jeans</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-xl mb-2">Dress Style</h1>
          <p>Casual</p>
          <p>Formal</p>
          <p>Party</p>
          <p>Gym</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
