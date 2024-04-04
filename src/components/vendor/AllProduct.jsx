import React from "react";

const AllProduct = () => {
  return (
    <div className="mt-10 m-auto max-w-[90%]">
      <h1 className="p-5 text-3xl font-aclonica font-extrabold">All Product</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Bought By
              </th>
              <th scope="col" className="px-6 py-4">
                View
              </th>
              <th scope="col" className="px-6 py-4">
                Rating
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                Samsung
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">44</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="mb-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out">
                  View Product
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">4.5/5</td>

              <td className="whitespace-nowrap px-6 py-4">
                <button className="mb-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out">
                  Delete Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
