import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center  justify-center gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16 mb-3">Login your account</h1>
        <p className="text-gray-500 text-[18px]">
          To use SHOPCO. please enter your details
        </p>
      </div>

      <form
        method="POST"
        action="#"
        className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        {/* <Link to="/home"> */}
        <button className="bg-black text-white p-3 rounded-md mt-4 w-[100%]">
          Signin
        </button>
        {/* </Link> */}
      </form>
      <div className="flex flex-col items-center mb-16">
        <p>
          Don't have an account ?{" "}
          <Link to="/register" className="text-gray-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
