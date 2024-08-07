import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { logout } from "../../api/auth";

const Navbar = () => {
  const Menu = [
    { name: "Register", href: "/register/" },
    { name: "Profile", href: "/seller-profile" },
    { name: "Login", href: "/login/" },
    { name: "Logout", href: "/login/" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout();
    alert("You have been logged out");
    setDropdown(!dropdown);
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/seller">
              <li>Seller</li>
            </Link>
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
        <div className="relative">
          <div className="flex gap-4">
            <Link to="/cart">
              <img src={logo} alt="cart" />
            </Link>

            <img
              onClick={() => setDropdown(!dropdown)}
              src={profile}
              alt="profile"
            />
          </div>
          {dropdown && (
            <div className="bg-white p-4 w-40 shadow-lg absolute -left-14 top-10">
              <ul>
                {Menu.map((menu) => (
                  <Link to={menu.href} key={menu.name}>
                    {menu.name == "Logout" ? (
                      <li
                        onClick={handleLogout}
                        className="p-2 text-md cursor-pointer rounded hover:bg-blue-100"
                        id={menu}
                      >
                        {menu.name}
                      </li>
                    ) : (
                      <li
                        onClick={() => setDropdown(!dropdown)}
                        className="p-2 text-md cursor-pointer rounded hover:bg-blue-100"
                        id={menu}
                      >
                        {menu.name}
                      </li>
                    )}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <ul className="flex bg-gray-100  flex-col  items-center justify-center  font-alonica font-[18px] gap-[1.5rem]">
            <Link onClick={toggleNavbar} to="/">
              <li>Home</li>
            </Link>
            <Link onClick={toggleNavbar} to="/seller">
              <li>Seller</li>
            </Link>
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
