import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex flex-col items-center  justify-center gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16 mb-3">Create a new account</h1>
        <p className="text-gray-500 text-[18px]">
          To use snapgram please enter your details
        </p>
      </div>

      <form className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
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
          Register
        </button>
        {/* </Link> */}
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
