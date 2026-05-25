import React from "react";
import { IoClose } from "react-icons/io5";
import StatusBudge from "../../../components/common/StatusBadge";
import { FaStar } from "react-icons/fa6";
const ReviewProvider = ({ close }) => {
    const reviewData = [
    {
      star: "5 Star",
      width: "87%",
      total: "76 (56%)",
    },
    {
      star: "4 Star",
      width: "57%",
      total: "32 (24%)",
    },
    {
      star: "3 Star",
      width: "40%",
      total: "14 (11%)",
    },
    {
      star: "2 Star",
      width: "7%",
      total: "6 (5%)",
    },
    {
      star: "1 Star",
      width: "2%",
      total: "2 (1%)",
    },
  ];
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
      onClick={close}
    >
      <div
        className="w-full max-w-3xl p-3 bg-white rounded-r-sm shadow-[0_0_20px_rgba(0,0,0,0.10)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Reviews and Ratings</h1>
          <button
            onClick={close}
            className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <div className="border border-muted rounded-lg">
          <div className="flex gap-3 mt-4 items-center p-3">
            <img
              src="https://randomuser.me/api/portraits/women/34.jpg"
              alt="profile image"
              className="w-18 h-18 rounded-full object-cover"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h4 className="text-lg font-semibold">Aman Kumar </h4>
                <span className="bg-gray-100 rounded-lg py-1 text-xs px-3 text-gray-500">
                  #PRO3434
                </span>
              </div>
              <div className="flex gap-2 items-center mt-1">
                <StatusBudge category="cleaning" className="font-normal" />
                <p className="text-sm text-muted">aman@example.com</p>
              </div>
              <p className="text-sm text-muted mt-1">+91 98543 24321</p>
            </div>
          </div>
          

           <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-y border-gray-300">
          {/* Left Rating Box */}
          <div className="border-r border-gray-200 p-6 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">4.3</h1>

            <div className="flex gap-1 text-yellow-500 text-xl my-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-sm text-muted">
              Based on 128 Reviews
            </p>
          </div>

          {/* Progress Bars */}
          <div className="p-6 flex flex-col gap-3">
            {reviewData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 w-full"
              >
                {/* Label */}
                <p className="text-sm text-muted w-10 shrink-0 whitespace-nowrap">
                  {item.star}
                </p>

                {/* Progress */}
                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-yellow-500 transition-all duration-500"
                    style={{ width: item.width }}
                  />
                </div>

                {/* Count */}
                <p className="text-sm text-muted w-10 shrink-0 text-right whitespace-nowrap">
                  {item.total}
                </p>
              </div>
            ))}
          </div>
        </div>
      
        </div>

        
      </div>
    </div>
  );
};

export default ReviewProvider;
