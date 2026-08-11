import React from "react";
import { useCategoriesTabs } from "../../../hooks/useCategories";
import { IoGrid } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const CategoryFilter = ({ filters, setFilters }) => {
  const { data } = useCategoriesTabs();
  const categories = data?.categories;

  return (
    <div className="relative">
      <select
        name="categories"
        id="category"
        value={filters.categoryId}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            categoryId: e.target.value,
          }))
        }
        className="w-full appearance-none outline-none border rounded-lg bg-white border-gray-300 text-grayness text-sm font-semibold py-2 pl-3 pr-8 cursor-pointer min-w-[130px]
        
        "
      >
        <option value="">All Categories</option>
        {categories?.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <MdArrowDropDown
        className="
                  pointer-events-none
                  absolute
                  top-1/2
                  right-2
                  -translate-y-1/2
                  text-xl
                  text-greyness
                "
      />
    </div>
  );
};

export default CategoryFilter;
