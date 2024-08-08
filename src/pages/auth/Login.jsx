import React from "react";
import { useState, useEffect } from "react";
import { login } from "../../api/auth";
import apiInstance from "../../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await login(email, password);
    if (error) {
      alert(error);
      setIsLoading(false);
    } else {
      navigate("/");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-16 mb-3">Login your account</h1>
          <p className="text-gray-500 text-[18px]">
            To use SHOPCO. please enter your details
          </p>
        </div>

        <form
          noValidate=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
        >
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
          <div className="flex flex-col items-end">
            <p>
              <Link to="/forgot-password/" className="text-gray-500">
                Forgot Password?
              </Link>
            </p>
          </div>

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
              Signin
            </button>
          )}
        </form>

        <div className="flex flex-col items-center mb-16">
          <p>
            Don't have an account ?{" "}
            <Link to="/register/" className="text-gray-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
