import React from "react";


import { useOutletContext } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const context = useOutletContext();
  const filters = context.filters;
  const { data } = useCategories(filters);
  const categories = data?.categories || [];

  return (
    <>
    
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {categories.map((category) => {
            return (
             <CategoryCard category={category} key={category._id}/>
            );
          })}
        </div>
     
    </>
  );
};

export default CategoryList;
