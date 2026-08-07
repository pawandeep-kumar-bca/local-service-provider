import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";
import { useCategoriesPopular } from "../../hooks/useCategories";

const PopularCategoriesSection = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useCategoriesPopular();

  const categories = data?.pages.flatMap((page) => page.categories) || [];

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Popular Categories</h1>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-primary font-semibold hover:underline disabled:opacity-50"
          >
            {isFetchingNextPage ? "Loading..." : "See More"}
          </button>
        )}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-5 overflow-hidden gap-4">
          {categories.map((category) => (
            <PopularCategoryCard key={category._id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularCategoriesSection;
