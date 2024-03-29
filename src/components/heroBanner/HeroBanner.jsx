import React from "react";
import star from "../../assets/star.svg";
import herobanner from "../../assets/herobanner.png";

const HeroBanner = () => {
  return (
    <div className="flex m-auto max-md:flex-wrap   mt-24 max-w-[90%] items-center justify-between">
      <div className="m-auto flex flex-col max-lg:items-center lg:max-w-[100%]">
        <div className="flex flex-col max-lg:items-center justify-between">
          <h1 className="max-lg:text-center font-aclonica lg:text-[4rem] font-extrabold leading-[3.5rem] text-[2.65rem]">
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
        <div className="flex w-[75%] items-center gap-4 justify-center max-md:flex-wrap mt-6">
          <div className="flex flex-col items-center justify-center border-r-2 pr-3 max-md:border-r-0 mr-3">
            <h1 className="font-bold text-2xl">200+</h1>
            <p className=" text-gray-500">International Brands</p>
          </div>
          <div className="border-r-2 flex flex-col items-center justify-center max-md:border-r-0 pr-3 mr-3">
            <h1 className="font-bold text-2xl">2,000+</h1>
            <p className=" text-gray-500">High-Quality Products</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold flex flex-col items-center justify-center  text-2xl">
              30,000+
            </h1>
            <p className=" text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={star} className="w-10 max-lg:hidden" alt="" />
        <img
          className="w-[80%] max-md:w-[60%] max-xl:w-[90%]"
          src={herobanner}
          alt=""
        />
        <img src={star} className="max-lg:hidden" alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
