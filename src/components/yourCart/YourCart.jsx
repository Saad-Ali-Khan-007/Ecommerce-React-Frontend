import React from "react";
import { FcFullTrash } from "react-icons/fc";
import CartShirt from "../../assets/cart_shirt.svg";

const YourCart = () => {
  return (
    <div className="mt-10 border-t-4 pt-8 m-auto max-w-[90%]">
      <h1 className="font-extrabold text-center mb-10 text-[2rem]">
        YOUR CART
      </h1>
      <div className="flex justify-around flex-wrap max-md:items-center max-md:justify-center ">
        <div className="flex border-2 justify-between rounded-2xl max-md:mb-4 p-4">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex border-b-2 justify-between pb-4 gap-2">
              <div>
                <img src={CartShirt} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h4>Gradient Graphic Tshirt</h4>
                  <p>
                    Size: <span>Large</span>
                  </p>
                  <p>
                    Color: <span>White</span>
                  </p>
                  <p>$145</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <FcFullTrash />
                  <div className="flex gap-3 bg-gray-100 p-2 pl-4 pr-4 rounded-full">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border-b-2 pb-4 gap-2">
              <div>
                <img src={CartShirt} alt="" />
              </div>
              <div className="flex justify-between ">
                <div className="flex flex-col gap-2">
                  <h4>Gradient Graphic Tshirt</h4>
                  <p>
                    Size: <span>Large</span>
                  </p>
                  <p>
                    Color: <span>White</span>
                  </p>
                  <p>$145</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <FcFullTrash />
                  <div className="flex gap-3 bg-gray-100 p-2 pl-4 pr-4 rounded-full">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <img src={CartShirt} alt="" />
              </div>
              <div className="flex justify-between ">
                <div className="flex flex-col gap-2">
                  <h4>Gradient Graphic Tshirt</h4>
                  <p>
                    Size: <span>Large</span>
                  </p>
                  <p>
                    Color: <span>White</span>
                  </p>
                  <p>$145</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <FcFullTrash />
                  <div className="flex gap-3 bg-gray-100 p-2 pl-4 pr-4 rounded-full">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4  max-sm:p-6 rounded-2xl border-2 p-8 flex-col justify-between">
            <h1>Order Summary</h1>

            <div className="flex max-md:gap-60 max-sm:gap-40 gap-80 justify-between">
              <p>Subtotal</p>
              <p>$565</p>
            </div>
            <div className="flex  border-b-2 pb-4 justify-between">
              <p>Delievery Fee</p>
              <p>$15</p>
            </div>
            <div className="flex  justify-between">
              <p>Total</p>
              <p>$580</p>
            </div>
            <button className="bg-black w-[55%] max-sm:p-2 text-white p-[0.6rem] pl-6 pr-6 rounded-full">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
