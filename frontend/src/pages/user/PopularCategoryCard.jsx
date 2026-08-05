import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCategoryCard = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(`/user/category/cleaning/select-provider`)}
      className="border border-gray-300 rounded-lg p-2 flex gap-2 items-center cursor-pointer hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      style={{
        backgroundColor: "white",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHRyhC91TKl3jk4oRlKoyv0Ue2amVebyNSYLZ_GD9Eg&s=10"
        alt="plumbing"
        className="w-12 h-12 object-contain"
      />
      <div>
        <span className="text-lg font-bold">Cleaning</span>
        <p className="text-sm text-gray-500 font-semibold mt-[0.5]">
          120 Providers
        </p>
      </div>
    </button>
  );
};

export default PopularCategoryCard;
