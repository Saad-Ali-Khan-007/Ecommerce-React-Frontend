import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
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

const ItemDetail = ({ product }) => {
  const [sliderData, setSliderData] = useState(imgs[0]);
  // const handleClick = (index) => {
  //   const slider = imgs[index];
  //   setSliderData(slider);
  // };

  return (
    <div className="mt-10 border-t-4 pt-8 m-auto max-w-[90%]">
      <div className="flex gap-6 max-lg:flex-wrap">
        <div className="flex gap-3 ">
          {/* <div className="flex flex-col gap-4">
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
          </div> */}
          <div>
            <img src={product.image} alt="" height="800" width="1000" />
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-between gap-4">
            <h1 className=" font-extrabold text-[2rem] ">{product.title}</h1>
            <div className="flex">
              <Rater total={5} rating={product.average_rating} />
            </div>
            <h2 className="text-[1.5rem] font-bold">{product.price}$</h2>
            <p className="border-b-2 pb-4">{product.description}</p>
            <p className="text-[1.5rem] font-bold">Seller</p>
            <p className="flex gap-4 border-b-2 pb-6">
              {product.seller.full_name}
            </p>
            <p className="text-[1.5rem] font-bold">Condition</p>

            <p className="flex gap-4 text-green-600 pb-6">{product.level}</p>

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
