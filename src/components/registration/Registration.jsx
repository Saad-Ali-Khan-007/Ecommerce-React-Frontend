import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const SIGNUP_URL = "api/seller/";

const Registration = () => {
  const navigate = useNavigate();
  const [sellerData, setSellerData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    status: "",
  });
  const handleChange = (e) => {
    setSellerData({
      ...sellerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const _formData = new FormData();
    _formData.append("name", sellerData.name);
    _formData.append("contact", sellerData.contact);
    _formData.append("email", sellerData.email);
    _formData.append("password", sellerData.password);
    try {
      const response = await axios.post(SIGNUP_URL, _formData);
      setSellerData({
        name: "",
        contact: "",
        email: "",
        password: "",
        status: "success",
      });
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.log("Registration Failed");
    }
  };

  return (
    <div className="flex flex-col items-center  justify-center gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16 mb-3">Create a new account</h1>
        <p className="text-gray-500 text-[18px]">
          To use SHOPCO. please enter your details
        </p>
      </div>

      <form
        method="POST"
        action="#"
        className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          onChange={handleChange}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />

        <button
          onClick={handleSubmit}
          className="bg-black text-white p-3 rounded-md mt-4 w-[100%]"
        >
          Register
        </button>
      </form>
      <div className="flex flex-col items-center mb-16">
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="text-gray-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
