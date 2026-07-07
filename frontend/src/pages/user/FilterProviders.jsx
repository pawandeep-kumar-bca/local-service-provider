import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../hooks/categoryHooks";

const FilterProviders = ({ url, setFilters }) => {
  const { data, isLoading } = useCategories();

  const categories = data?.categories || [];

  const base =
    "whitespace-nowrap flex gap-2 items-center border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold";

  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";

  const handleCategory = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category: categoryId,
      page: 1,
    }));
  };

  if (isLoading) return null;

  return (
    <div className="mb-5 sticky top-20 bg-white z-40 pb-5 md:pb-1 pt-3 md:pt-1 px-2 relative">

      <div className="w-9 h-9 bg-gray-50 shadow flex justify-center items-center rounded-full absolute -left-3 top-5">
        <MdKeyboardArrowLeft />
      </div>

      <ul className="mt-3 flex gap-4 overflow-x-auto scrollbar-hide">

        <NavLink
          
          to={`/${url}`}
          end
          onClick={() => handleCategory("all")}
          className={({ isActive }) =>
            `${base} ${isActive ? active : notActive}`
          }
        >
          🏠 All
        </NavLink>

        {categories.map((category) => (
          <NavLink
            key={category._id}
            to={`/${url}/${category.name.replace(/\s+/g, "-")}`}
            onClick={() => handleCategory(category._id)}
            className={({ isActive }) =>
              `${base} ${isActive ? active : notActive}`
            }
          >
            {category.icon && (
              <img
                src={category.icon}
                alt={category.name}
                className="w-5 h-5"
              />
            )}

            {!category.icon && "📌"}

            {category.name}
          </NavLink>
        ))}
      </ul>

      <div className="w-9 h-9 bg-gray-50 shadow flex justify-center items-center rounded-full absolute -right-3 top-5">
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default FilterProviders;