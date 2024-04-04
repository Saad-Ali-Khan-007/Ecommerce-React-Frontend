import React from "react";
import technology from "../../assets/technology.png";
import clothes from "../../assets/clothes.png";
import grocery from "../../assets/grocery.png";
import crockery from "../../assets/crockery.png";
import { Link } from "react-router-dom";

const BrowseByCatogories = () => {
  return (
    <div className="m-auto flex flex-col max-md:flex-wrap max-w-[90%] pb-10 rounded-3xl  bg-[#f0eeed] mt-16">
      <h1 className="text-center font-extrabold text-[2rem] pt-10">
        BROWSE BY CATOGORIES
      </h1>
      <div className="flex flex-col max-md:flex-wrap  mt-10 m-auto max-w-[90%]">
        <div className="flex justify-between max-md:flex-wrap items-center">
          <div className="flex w-[80rem] h-[20rem] max-md:w-[100%] justify-evenly items-center rounded-3xl bg-white">
            <div>
              <p className="pl-2 max-sm:text-[1.5rem] text-gray-500 font-aclonica font-extrabold text-[2rem]">
                Technology
              </p>
            </div>
            <div>
              <img
                className="w-[30.875rem] max-md:w-[20rem]"
                src={technology}
                alt=""
              />
            </div>
          </div>
          <Link
            to="/clothes/casual"
            className="flex ml-4 w-[140rem] mt-4 max-md:w-[100%] max-md:ml-0 h-[20rem]  items-center justify-evenly rounded-3xl bg-white"
          >
            <div>
              <p className="text-gray-500 pl-2 max-sm:text-[1.5rem] font-aclonica font-extrabold text-[2rem]">
                Clothes
              </p>
            </div>

            <div>
              <img className="w-[20.875rem]" src={clothes} alt="" />
            </div>
          </Link>
        </div>
        <div className="flex justify-between max-md:w-[100%] max-md:flex-wrap items-center mt-4">
          <div className="flex w-[140rem] h-[20rem] items-center justify-evenly rounded-3xl bg-white">
            <div className="flex ">
              <p className="text-gray-500 pl-2 max-sm:text-[1.5rem] font-aclonica font-extrabold text-[2rem]">
                Grocery
              </p>
            </div>
            <div className="">
              <img className="w-[20.875rem]" src={grocery} alt="" />
            </div>
          </div>
          <div className="flex ml-4 w-[80rem] mt-4 h-[20rem] max-md:w-[100%] max-md:items-center max-md:ml-0 justify-evenly items-center rounded-3xl bg-white">
            <div>
              <p className="text-gray-500 max-sm:text-[1.5rem] font-aclonica pl-4 font-extrabold text-[2rem]">
                Crockery
              </p>
            </div>
            <div>
              <img className="w-[30.875rem]" src={crockery} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCatogories;
