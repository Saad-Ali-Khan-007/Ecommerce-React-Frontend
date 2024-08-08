import React from "react";
import { useState, useEffect } from "react";
import apiInstance from "../../api/axios";
import { register } from "../../api/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await register(fullName, email, password, password2);
    if (error) {
      alert(error);
      setIsLoading(false);
    } else {
      navigate("/");
      alert("Registration Successful You have now been logged in");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-16 mb-3">
            Create a new account
          </h1>
          <p className="text-gray-500 text-[18px]">
            To use SHOPCO. please enter your details
          </p>
        </div>

        <form
          noValidate=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
        >
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            onChange={(e) => setFullName(e.target.value)}
            className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
            className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
          />

          {isLoading === true && (
            <button
              type="submit"
              disabled
              className="bg-black text-white p-3 rounded-md mt-4 w-[100%]"
            >
              <div className="flex gap-2 items-center justify-center m-[10px]">
                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                Processing...
              </div>
            </button>
          )}
          {isLoading === false && (
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-md mt-4 w-[100%]"
            >
              Register
            </button>
          )}
        </form>
        <div className="flex flex-col items-center mb-16">
          <p>
            Already have an account ?{" "}
            <Link to="/login/" className="text-gray-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
