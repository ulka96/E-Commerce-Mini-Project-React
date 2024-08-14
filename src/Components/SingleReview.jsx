import React from "react";

// React icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const SingleReview = () => {
  return (
    <div className="flex flex-row pt-[38px] pb-[27px] pl-2">
      <div className="bg-[#F0F1FF] w-12 h-12 text-center flex items-center justify-center text-[#4078FF] text-[14px] font-normal rounded-full">
        ED
      </div>

      <div className="ml-6">
        <h1 className="text-[14px] text-[#0E1422] font-medium">Emily Davis</h1>
        <p className="text-[12px] text-[#5C5F6A] font-medium tracking-wider uppercase mt-[6px] mb-4">
          1 Week ago
        </p>
        <p className="text-[14px] text-[#5C5F6A] font-normal">
          This company always goes above and beyond to satisfy their customers.
        </p>
      </div>

      <div className="flex gap-1 ml-auto ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
    </div>
  );
};

export default SingleReview;
