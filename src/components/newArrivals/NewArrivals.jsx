import React from "react";
import tshirt from "../../assets/tshirt.png";
import { Link } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const NewArrivals = ({ product }) => {
  console.log("product", product);
  return (
    <div className="mt-16">
      <h1 className="text-center font-aclonica font-extrabold text-[2rem]">
        NEW ARRIVALS
      </h1>
      <div className="flex items-center mt-16 flex-wrap justify-between m-auto max-w-[90%]">
        {product?.map((item, index) => (
          <div
            key={index}
            className="flex max-sm:w-[30rem] w-[18rem] flex-col justify-center"
          >
            <Link to={`/product-detail/${item.slug}/`}>
              <div className="rounded-xl w-[295px] max-sm:w-[98%]  h-[298px] flex items-center justify-center bg-[#f0eeed]">
                <img src={item.image} alt="" />
              </div>
              <div className="flex justify-between gap-2">
                <div>
                  <p className="text-gray-500">{item.title}</p>

                  <Rater total={5} rating={item.average_rating} />
                </div>
                <div>
                  <p className="text-gray-500 text-lg font-bold">
                    {item.level}
                  </p>
                  <p className="text-gray-500 text-lg font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <button className="border font-semibold w-[10rem] p-3 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
