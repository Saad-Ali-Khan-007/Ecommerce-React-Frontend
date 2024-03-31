import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star1 from "../../assets/Star1.svg";

const Testemonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-16 m-auto max-w-[90%] max-sm:max-w-[85%] mb-8">
      <h1 className="pl-2 max-sm:text-[1.5rem] mb-8  font-aclonica font-extrabold text-[2rem]">
        Our Happy Customers
      </h1>

      <Slider {...settings} className="flex justify-center items-center">
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
        <div className="flex w-1/3 border-2 p-6 rounded-xl flex-col">
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <p className="font-bold mb-2">John Doe</p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            nulla quis laborum rerum neque obcaecati modi recusandae quos
            cupiditate ex quia facilis ipsum eligendi, explicabo autem eaque
            magni vero soluta?
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testemonials;
