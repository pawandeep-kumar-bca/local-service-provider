import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";
import { Link } from "react-router-dom";
const PopularCategoriesSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Popular Categories</h1>
        <Link to="all-providers" className="text-primary font-semibold">
          View All
        </Link>
      </div>
      <div className="grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5">
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
        <PopularCategoryCard />
      </div>
    </div>
  );
};

export default PopularCategoriesSection;
