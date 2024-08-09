import React from "react";
import Star1 from "../../assets/Star1.svg";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ItemReview = ({ product }) => {
  return (
    <div className="m-auto max-w-[90%] mt-16">
      <div className="flex justify-between mb-4">
        <h4>
          All Reviews <span>{product.reviews.length}</span>
        </h4>
        <button>Write a Review</button>
      </div>
      <div className="flex flex-wrap justify-between">
        {product.reviews.map((review, index) => (
          <div
            key={index}
            className="flex max-md:w-[50%] max-sm:w-[100%] w-[32%] mb-4 border-2 p-6 rounded-xl flex-col"
          >
            <p className="font-bold mb-2">{review.profile.full_name}</p>
            <div className="flex mb-2">
              <Rater total={5} rating={review.rating} />
            </div>
            <p className="text-gray-500">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="border font-semibold w-[10rem] p-3 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default ItemReview;
