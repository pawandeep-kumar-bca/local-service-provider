import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";
import { useCategoriesPopular } from "../../hooks/useCategories";

const PopularCategoriesSection = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useCategoriesPopular();

  const categories =
    data?.pages.flatMap((page) => page.categories) || [];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="md:text-2xl text-brownness text-xl font-bold">
          Popular Categories
        </h2>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-primary text-sm hidden transition-all duration-300 cursor-pointer md:block font-semibold hover:underline disabled:opacity-50"
          >
            {isFetchingNextPage ? "Loading..." : "See More"}
          </button>
        )}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex md:grid md:grid-cols-5 overflow-x-auto scrollbar-hide scroll-smooth gap-2 md:gap-4 mb-7 md:mb-0">
          {categories.map((category) => (
            <PopularCategoryCard
              key={category._id}
              category={category}
            />
          ))}

          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="text-primary text-sm transition-all duration-300 cursor-pointer  font-semibold hover:underline disabled:opacity-50 md:hidden block"
            >
              {isFetchingNextPage ? "Loading..." : "See More"}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default PopularCategoriesSection;