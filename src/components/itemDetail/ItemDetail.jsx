import React, { useState } from "react";

import Star1 from "../../assets/Star1.svg";
import Ellipse from "../../assets/Ellipse.svg";
const imgs = [
  {
    id: 0,
    value:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  },
  {
    id: 1,
    value:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  },
  {
    id: 2,
    value:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  },
  {
    id: 3,
    value:
      "https://t4.ftcdn.net/jpg/06/68/30/09/360_F_668300949_oDIKoExgMgVETBk9MuJicJ0MTrMHhTDW.jpg",
  },
];

const ItemDetail = () => {
  const [sliderData, setSliderData] = useState(imgs[0]);
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="mt-10 border-t-4 pt-8 m-auto max-w-[90%]">
      <div className="flex gap-6 max-lg:flex-wrap">
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-4">
            {imgs.map((data, i) => (
              <img
                className={sliderData.id == i ? "border-2 border-black" : ""}
                key={data.id}
                src={data.value}
                onClick={() => handleClick(i)}
                alt=""
                height="230"
                width="200"
              />
            ))}
          </div>
          <div>
            <img src={sliderData.value} alt="" height="800" width="1000" />
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-between gap-4">
            <h1 className=" font-extrabold text-[2rem] ">
              ONE LIFE GRAPHIC TSHIRT
            </h1>
            <p className="flex">
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
            </p>
            <h2 className="text-[1.5rem] font-bold">260$</h2>
            <p className="border-b-2 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              amet ut nemo velit cumque quam necessitatibus! Quibusdam, sint
              voluptas asperiores eos tenetur quas reprehenderit dolores vero
              placeat? Numquam, debitis maxime.
            </p>
            <p>Select Colors</p>
            <p className="flex gap-4 border-b-2 pb-6">
              <img src={Ellipse} alt="" />
              <img src={Ellipse} alt="" />
              <img src={Ellipse} alt="" />
            </p>
            <p>Choose Size</p>
            <div className="flex gap-4">
              <button className="bg-gray-200 max-sm:p-1 max-sm:pl-2 max-sm:pr-2 max-md:p-2 max-md:pl-4 max-md:pr-4 p-3 pl-6 pr-6 rounded-full">
                Small
              </button>
              <button className="bg-gray-200 max-sm:p-1 max-sm:pl-2 max-sm:pr-2 max-md:p-2 max-md:pl-4 max-md:pr-4 p-3 pl-6 pr-6 rounded-full">
                Medium
              </button>
              <button className="bg-gray-200 max-sm:p-1 max-sm:pl-2 max-sm:pr-2 max-md:p-2 max-md:pl-4 max-md:pr-4 p-3 pl-6 pr-6 rounded-full">
                Large
              </button>
              <button className="bg-gray-200 max-sm:p-1 max-sm:pl-3 max-sm:pr-3 max-md:p-2 max-md:pl-4 max-md:pr-4 p-3 pl-6 pr-6 rounded-full">
                X-Large
              </button>
            </div>
            <button className="bg-black w-[55%] text-white p-3 pl-6 pr-6 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
