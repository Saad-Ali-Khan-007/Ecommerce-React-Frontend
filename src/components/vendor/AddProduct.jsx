import React from "react";

const AddProduct = () => {
  return (
    <div className="mt-16 m-auto max-lg:max-w-[60%] max-md:max-w-[60%] max-sm:max-w-[90%] max-w-[40%]">
      <div className="border rounded-xl p-6 flex flex-col justify-between gap-8">
        <h1 className="font-bold text-3xl">Add New Product</h1>
        <form method="POST" action="#">
          <div>
            <label>Product Name</label>
            <div>
              <input
                placeholder="Product Name"
                className="mt-3 w-full p-3 rounded-md bg-gray-100 focus:outline-gray-500"
                type="text"
              />
            </div>
          </div>
          <div className="mt-6">
            <label>Description</label>
            <div>
              <textarea
                placeholder="Description"
                className="mt-3 w-full p-3 rounded-md bg-gray-100 focus:outline-gray-500"
                type="text"
              />
            </div>
          </div>
          <div className="mt-6">
            <label>Price</label>
            <div>
              <input
                type="text"
                placeholder="Price"
                className="mt-3 w-full p-3 rounded-md bg-gray-100 focus:outline-gray-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <label>Category</label>
            <div>
              <select className="mt-3 w-full p-3 rounded-md bg-gray-100 focus:outline-gray-500">
                <option value="Select a category">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Clothes">Clothes</option>
                <option value="Grocery">Grocery</option>
                <option value="Household">Household</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label>Upload Images</label>
            <div>
              <input
                className="mt-3 w-full p-3 rounded-md bg-gray-100 focus:outline-gray-500"
                type="file"
                multiple
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-black text-white p-3 rounded-md mt-4 w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
