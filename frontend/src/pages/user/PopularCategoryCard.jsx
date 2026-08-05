import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>
        navigate(`/user/category/${category?.categorySlug}/select-provider`)
      }
      className="w-full min-h-24  border border-gray-200 rounded-2xl bg-gray-50 p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 cursor-pointer"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: category?.bgColor }}
      >
        <img
          src={category?.categoryIcon}
          alt={category?.categoryName}
          className="w-9 h-9 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold">{category?.categoryName}</h3>

        <p className="text-sm text-gray-500">
          {category?.providers}{" "}
          {category.providers.length === 1 ? "Provider" : "Providers"}
        </p>
      </div>
    </button>
  );
};

export default PopularCategoryCard;
