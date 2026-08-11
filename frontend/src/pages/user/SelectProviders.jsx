import React from "react";
import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Avatar from "../../components/common/Avatar";
import { useNavigate } from "react-router-dom";

const SelectProviders = ({ provider }) => {
 
  
  const navigate = useNavigate();
  return (
    <div className="md:px-4 md:py-3 px-2 py-3 grid grid-cols-3  items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-14 h-14 min-w-14 rounded-full">
            <Avatar
              image={provider?.profileImage}
              name={provider?.providerName}
             className="bg-slate-200 text-slate-700 text-xl"
            />
          </div>
          {/* Online Dot */}
          <div className="absolute bottom-1 bg-white flex items-center justify-center right-0 w-4 h-4 rounded-full">
            <div
              className={` w-3 h-3 rounded-full  shadow-sm ${provider?.availability ? "bg-green-500" : "bg-white border-3  border-green-500"}
  `}
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">{provider?.providerName}</h1>
          <div className="flex items-center gap-1">
            <FaStar className="text-orange-500" size={16} />
            <h2 className="text-sm font-bold">{provider?.rating.toFixed(1)}</h2>
            <p className="text-xs font-semibold text-gray-500">
              ({provider?.totalReview} reviews)
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold text-center">
        {provider?.experience} years experience
      </p>

      <div className="flex items-center justify-end md:gap-5 gap-2 flex-col md:flex-row ">
        <div className="flex items-center">
          <MdOutlineCurrencyRupee size={20} />
          <h1 className="text-xl font-bold">{provider?.pricing}</h1>
        </div>
        <Button
          type="button"
          onClick={() => navigate(`/user/provider-details/${provider._id}`)}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default SelectProviders;
