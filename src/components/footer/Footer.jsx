import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import visa from "../../assets/visa.svg";
import paypal from "../../assets/paypal.svg";
import credit from "../../assets/credit.svg";
import applepay from "../../assets/applepay.svg";
import gpay from "../../assets/gpay.svg";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="bg-black p-10 rounded-2xl max-sm:flex-wrap flex m-auto justify-between items-center max-w-[90%]">
        <div>
          <h1 className="flex flex-wrap text-white font-extrabold text-[2rem]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>
        <div className="flex flex-col">
          <input
            className="w-[19rem] max-sm:mt-2 max-sm:w-[12rem]  lg:w-[15rem] xl:w-[20.25rem] h-[3rem] p-3 border rounded-full bg-gray-100 focus:outline-gray-300 "
            type="search"
            placeholder="Enter Your Email..."
          />
          <button className=" mt-4 p-3 max-lg:p-[0.65rem] border rounded-full bg-gray-100 focus:outline-gray-300">
            Subscribe To Newsletter
          </button>
        </div>
      </div>
      <div className="bg-[#f0eeed]">
        <div className="m-auto  max-w-[90%] pt-20">
          <div className="flex justify-between gap-2rem max-md:flex-wrap items-center text-gray-500 pb-8">
            <div className="flex flex-col gap-4  max-md:w-[13rem] w-[20rem] mr-7">
              <h1 className="font-extrabold text-black text-3xl font-aclonica">
                SHOP.CO
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur inventore sunt vero dolorem.
              </p>
              <div className="flex gap-2">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
            <div className="flex max-sm:mt-4 max-sm:flex-wrap justify-between w-full">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-black font-aclonica">COMPANY</h4>
                <p>About</p>
                <p>Features</p>
                <p>Work</p>
                <p>Career</p>
              </div>
              <div className="flex max-lg:ml-8 flex-col gap-3">
                <h4 className="font-bold text-black font-aclonica">HELP</h4>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms And Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <div className="flex max-sm:mt-2 flex-col gap-3">
                <h4 className="font-bold text-black font-aclonica">FAQ</h4>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
              <div className="flex max-sm:mt-2 flex-col gap-3">
                <h4 className="font-bold text-black font-aclonica">
                  RESOURCES
                </h4>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  justify-between items-center border-t-2 pt-4 pb-10">
            <p className="text-gray-500  text-[0.8rem]">
              SHOP.CO @ 2024. All Rights Reserved
            </p>
            <div className="flex max-sm:flex-wrap gap-3 ">
              <img src={visa} alt="" />
              <img src={paypal} alt="" />
              <img src={credit} alt="" />
              <img src={applepay} alt="" />
              <img src={gpay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
