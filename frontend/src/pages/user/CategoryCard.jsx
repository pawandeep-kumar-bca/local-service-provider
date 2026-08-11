import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { FaStar } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { HiOutlineUsers } from "react-icons/hi2";
const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div
      key={category._id}
      className="group rounded-xl px-5 py-4 flex flex-col items-center justify-center relative backdrop-blur-sm
            border border border-gray-300 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] hover:scale-[1.02] duration-300 ease-in-out transition-all"
    >
      <div className="flex items-center w-full mb-2">
        {category.discount?.isActive && (
          <span className="text-yellow-500 bg-yellow-100 border border-yellow-200 rounded-full px-3 py-1 text-sm font-semibold">
            {category.discount?.value}
            {category.discount?.discountType === "percentage"
              ? "% OFF"
              : " Flat OFF"}
          </span>
        )}

        <div className="ml-auto">
          <StatusBadge badge={category.status} />
        </div>
      </div>

      <div
        className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: category.backgroundColor }}
      >
        <img
          src={category.icon?.url}
          alt={category.name}
          width={35}
          height={35}
        />
      </div>
      <div className="my-2 text-center">
        <h1 className="text-xl font-bold ">{category.name}</h1>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {category.description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FaStar className="text-yellow-500" size={18} />
        <h2 className="text-lg font-bold">{category.average_rating}</h2>
        <p className="text-sm text-muted">({category.total_reviews} reviews)</p>
      </div>
      <div className="flex gap-3 items-center mt-1">
        <div className="flex gap-1 items-center">
          <FcClock size={16} />
          <p className="text-sm text-gray-500 ">
            {category.avgResponseTime
              ? `${Math.round(category.avgResponseTime)} min`
              : "N/A"}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <HiOutlineUsers size={16} className="text-gray-500" />
          <p className="text-sm text-gray-500 ">{category.providers} Nearby</p>
        </div>
      </div>
      <div className="flex gap-2 items-center mt-2 mb-3">
        <span className="text-xs uppercase tracking-wide text-gray-500">
          Starting at
        </span>
        <span className="flex items-center font-bold text-lg text-success">
          ₹ {category.startingPrice}
        </span>
      </div>

      <Button
        color="success"
        fullWidth
        type="button"
        className="mt-auto"
        onClick={() => navigate(`/user/category/${category._id}/select-provider`)}
      >
        Book Now
      </Button>
    </div>
  );
};

export default CategoryCard;
