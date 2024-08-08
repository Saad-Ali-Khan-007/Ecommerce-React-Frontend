import React from "react";
import { useState, useEffect } from "react";
import apiInstance from "../../api/axios";
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  const otp = searchParam.get("otp");
  const uuidb64 = searchParam.get("uuidb64");
  const refresh_token = searchParam.get("refresh_token");
  console.log(otp);
  console.log(uuidb64);
  console.log(refresh_token);

  const handleCreatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (confirmPassword !== password) {
      alert("Password does not match");
      setIsLoading(false);
      return;
    } else {
      const formData = new FormData();
      formData.append("otp", otp);
      formData.append("uuidb64", uuidb64);
      formData.append("password", password);
      formData.append("refresh_token", refresh_token);

      try {
        apiInstance.post(`user/password-change/`, formData).then((res) => {
          console.log(res.data);
          setIsLoading(false);
          navigate("/login/");
          alert(res.data.message);
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-16 mb-3">New Password</h1>
          <p className="text-gray-500 text-[18px]">Please Enter Password</p>
        </div>

        <form
          noValidate=""
          onSubmit={handleCreatePassword}
          className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
        >
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
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              Reset Password
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

export default ForgotPassword;
