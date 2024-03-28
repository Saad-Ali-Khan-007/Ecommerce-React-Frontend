import React from "react";
import star from "../../assets/star.svg";
import herobanner from "../../assets/herobanner.png";

const HeroBanner = () => {
  return (
    <div className="flex m-auto mt-24 max-w-[90%] items-center justify-between">
      <div className="max-lg:w-[90%]">
        <div className="flex flex-col justify-between">
          <h1 className="font-aclonica max-lg-[1024]:text-[2.65rem] font-extrabold leading-[3.5rem] text-[4rem]">
            FIND PRODUCTS THAT MATCHES YOUR STYLE
          </h1>
          <p className="mt-6 mb-6 text-gray-500  w-[80%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mb-6 flex items-start bg-black w-40 justify-center text-white rounded-full p-2">
            Shop Now
          </button>
        </div>
        <div className="flex w-[80%] justify-between mt-6">
          <div className="border-r-2 pr-6">
            <h1 className="font-bold text-2xl">200+</h1>
            <p className=" text-gray-500">International Brands</p>
          </div>
          <div className="border-r-2 pr-6">
            <h1 className="font-bold text-2xl">2,000+</h1>
            <p className=" text-gray-500">High-Quality Products</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">30,000+</h1>
            <p className=" text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="ml-48 flex">
        <img src={star} className="w-10" alt="" />
        <img className="w-[80%]" src={herobanner} alt="" />
        <img src={star} className="w-20" alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
