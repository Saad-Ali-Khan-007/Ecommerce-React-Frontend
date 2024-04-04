import React from "react";
import tshirt from "../../assets/tshirt.png";

const FilteredClothes = () => {
  return (
    <div>
      <h1 className="text-center  font-extrabold text-[2rem]">TOP SELLING</h1>
      <div className="flex items-center mt-4 flex-wrap justify-between max-md:ml-20 max-sm:ml-4 m-auto  max-w-[90%]">
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <button className="border font-semibold w-[10rem] p-3 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default FilteredClothes;
