import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../api/axios";
import { setSeller } from "../../reduxFeatures/Seller";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const SIGNUP_URL = "api/seller";

const Profile = () => {
  const dispatch = useDispatch();
  const seller = useSelector((state) => state.seller);
  const [sellerData, setSellerData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    prev_img: "",
    img: "",
  });
  const handleChange = (e) => {
    setSellerData({
      ...sellerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setSellerData({
      ...sellerData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const _formData = new FormData();
    _formData.append("name", sellerData.name);
    _formData.append("contact", sellerData.contact);
    _formData.append("email", sellerData.email);
    _formData.append("password", sellerData.password);
    if (sellerData.img !== "") {
      _formData.append("img", sellerData.img, sellerData.img.name);
    }
    try {
      const response = await axios.put(
        `${SIGNUP_URL}/${seller.id}`,
        _formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("seller", JSON.stringify(response.data));
      dispatch(setSeller(response.data));

      if ((response.status = 200)) {
        Swal.fire({
          title: "Data has been updated",
          icon: "success",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(`${SIGNUP_URL}/${seller.id}`);
      setSellerData({
        name: response.data.name,
        contact: response.data.contact,
        email: response.data.email,
        password: response.data.password,
        prev_img: response.data.img,
        img: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center  justify-center gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16 mb-3">Profile Settings</h1>
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
          value={sellerData.name}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          onChange={handleChange}
          value={sellerData.contact}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={sellerData.email}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={sellerData.password}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Image</label>
        <input
          type="file"
          name="img"
          onChange={handleFileChange}
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <div>
          {sellerData.prev_img && (
            <img width="100%" height="100%" src={sellerData.prev_img} />
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white p-3 rounded-md mt-4 w-[100%]"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
