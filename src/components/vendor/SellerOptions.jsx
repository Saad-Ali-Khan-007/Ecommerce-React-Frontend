import React from "react";
import add from "../../assets/add.png";
import product from "../../assets/products.png";
import edit from "../../assets/edit.png";
import { Link } from "react-router-dom";
const cardData = [
  {
    id: 1,
    img: add,
    text: "Add Product",
    to: "/seller/add-product",
  },
  {
    id: 2,
    img: product,
    text: "All Product",
  },
  {
    id: 3,
    img: edit,
    text: "Edit Product",
  },
];

const SellerOptions = () => {
  return (
    <div className="mt-16 m-auto max-w-[90%]">
      <div className="flex justify-around items-center flex-wrap">
        {cardData.map((data) => (
          <Link key={data.id} to={data.to}>
            <div
              className="flex mb-4 flex-col gap-2 items-center justify-between bg-gray-100 p-10"
              key={data.id}
            >
              <div>
                <img src={data.img} width={200} alt="" />
              </div>
              <div>
                <p className="text-lg">{data.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SellerOptions;
