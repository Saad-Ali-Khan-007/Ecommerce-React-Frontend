import React from "react";
import tshirt from "../../assets/tshirt.png";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center font-aclonica font-extrabold text-[2rem]">
        NEW ARRIVALS
      </h1>
      <div className="flex items-center   mt-16 flex-wrap justify-between m-auto max-w-[90%]">
        <div className="flex max-sm:w-[30rem] flex-col justify-center">
          <Link to="/product-detail/1">
            <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
              <img src={tshirt} alt="" />
            </div>
            <div>
              <p className="text-gray-500">T-shirt with Tape Details</p>
              <p className="text-gray-500">Rating 4.5/5</p>
              <p className="text-gray-500 text-lg font-bold">$120</p>
            </div>
          </Link>
        </div>
        <div className="flex max-sm:w-[30rem] flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex max-sm:w-[30rem] flex-col justify-center">
          <div className="rounded-xl flex items-center justify-center bg-[#f0eeed]">
            <img src={tshirt} alt="" />
          </div>
          <div>
            <p className="text-gray-500">T-shirt with Tape Details</p>
            <p className="text-gray-500">Rating 4.5/5</p>
            <p className="text-gray-500 text-lg font-bold">$120</p>
          </div>
        </div>
        <div className="flex max-sm:w-[30rem] flex-col justify-center">
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

export default NewArrivals;
