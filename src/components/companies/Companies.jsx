import React from "react";
import company1 from "../../assets/company1.svg";
import company2 from "../../assets/company2.svg";
import company3 from "../../assets/company3.svg";
import company4 from "../../assets/company4.svg";
import company5 from "../../assets/company5.svg";

const Companies = () => {
  return (
    <div className="flex flex-wrap items-center mt-2 justify-evenly p-6 bg-black">
      <img src={company1} className="mb-4" alt="" />
      <img src={company2} className="mb-4" alt="" />
      <img src={company3} className="mb-4" alt="" />
      <img src={company4} className="mb-4" alt="" />
      <img src={company5} className="mb-4" alt="" />
    </div>
  );
};

export default Companies;
