import React, { useState } from "react";

import Star1 from "../../assets/Star1.svg";
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
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="flex justify-between mt-10 m-auto max-w-[90%]">
      <div>
        <img src={sliderData.value} alt="" height="300" width="500" />
        {imgs.map((data, i) => (
          <img
            className={sliderData.id == i ? "border" : ""}
            key={data.id}
            src={data.value}
            onClick={() => handleClick(i)}
            alt=""
            height={70}
            width={100}
          />
        ))}
      </div>
      <div>
        <div>
          <h1>ONE LIFE GRAPHIC TSHIRT</h1>
          <p className="flex mb-2">
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
            <img src={Star1} alt="" />
          </p>
          <h2>260$</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
            amet ut nemo velit cumque quam necessitatibus! Quibusdam, sint
            voluptas asperiores eos tenetur quas reprehenderit dolores vero
            placeat? Numquam, debitis maxime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
