import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="m-auto max-w-[90%] flex flex-wrap justify-around items-center mt-4">
        <div>
          <p className="max-sm:text-[24px] text-[32px] font-aclonica font-bold">
            SHOP.CO
          </p>
        </div>
        <div>
          <ul className="flex max-lg:hidden  font-alonica font-[18px] gap-[1.5rem]">
            <li>
              <select name="shop" id="shop">
                <option className=" bg-gray-100" value="Shop">
                  Shop
                </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Senior">Senior</option>
              </select>
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>

        <div>
          <input
            className="w-[16rem] max-sm:hidden lg:w-[20rem] xl:w-[36.25rem] h-[3rem] p-4 border rounded-full bg-gray-100 focus:outline-gray-300 "
            type="search"
            placeholder="Search for products..."
          />
        </div>
        <div>
          <button className="lg:hidden" onClick={toggleNavbar}>
            {isOpen ? "X" : <IoMdMenu />}
          </button>
        </div>
        <div className="flex gap-4">
          <Link to="/cart">
            <img src={logo} alt="cart" />
          </Link>
          <Link to="/register">
            <img src={profile} alt="profile" />
          </Link>
        </div>
      </div>
      {isOpen && (
        <div>
          <ul className="flex bg-gray-100  flex-col  items-center justify-center  font-alonica font-[18px] gap-[1.5rem]">
            <li className="hover:bg-gray-300 w-full text-center p-1">Shop</li>
            <li className="hover:bg-gray-300 w-full text-center p-1">
              On Sale
            </li>
            <li className="hover:bg-gray-300 w-full text-center p-1">
              New Arrivals
            </li>
            <li className="hover:bg-gray-300 w-full text-center p-1">Brands</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
