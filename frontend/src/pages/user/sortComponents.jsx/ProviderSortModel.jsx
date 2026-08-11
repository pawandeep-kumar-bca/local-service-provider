import React, { useState } from "react";
import ProviderSortByPrice from "./ProviderSortByPrice";
import ProviderSortByRating from "./ProviderSortByRating";
import ProviderSortByExperience from "./ProviderSortByExperience";
import ProviderSortByDistance from "./ProviderSortByDistance";
import Button from "../../../components/common/Button";
import { IoClose } from "react-icons/io5";
import { MdSort } from "react-icons/md";

const ProviderSortModel = ({ filters, setFilters, isClose }) => {
  const [tempSort, setTempSort] = useState(filters.sort || []);

  const handleApplySort = () => {
    setFilters((prev) => ({
      ...prev,
      sort: tempSort,
    }));

    isClose();
  };

  const handleResetSort = () => {
    setTempSort([]);
  };

  return (
    <div onClick={isClose} className="fixed inset-0 bg-transparent z-[9999]">
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          absolute
          right-0
          top-18
          w-full
          max-w-xs
          max-h-[calc(100vh-5rem)]
          overflow-y-auto
          scrollbar-hide
          bg-gray-50
          border
          border-gray-200
          rounded-xl
         
          shadow-lg
        "
      >
        {/* Header */}
        <div
          className="
          sticky
          top-0
          w-full
          flex
          items-center
          justify-between
          bg-gray-50
          px-4
          py-3
          rounded-t-xl
          z-[999]
          border-b
          border-gray-200
        "
        >
          <h1 className="text-lg font-bold text-brownness">Sort</h1>

          <button
            type="button"
            onClick={handleResetSort}
            className="
            text-sm
            py-1
            px-3
            border
            border-brown-300
            rounded-lg
            text-brownness
            font-bold
            cursor-pointer
          "
          >
            Reset
          </button>
        </div>

        {/* Sort Options */}
        <div className="flex flex-col w-full space-y-4 px-4 py-4">
          <div>
            <span className="block text-sm font-bold mb-3 text-brownness">
              Sort by Price
            </span>

            <ProviderSortByPrice
              filters={{
                ...filters,
                sort: tempSort,
              }}
              setFilters={(updater) => {
                setTempSort((prev) =>
                  typeof updater === "function"
                    ? updater({ ...filters, sort: prev }).sort
                    : updater.sort,
                );
              }}
            />
          </div>

          <div>
            <span className="block text-sm font-bold mb-3 text-brownness">
              Sort by Rating
            </span>

            <ProviderSortByRating
              filters={{
                ...filters,
                sort: tempSort,
              }}
              setFilters={(updater) => {
                setTempSort((prev) =>
                  typeof updater === "function"
                    ? updater({ ...filters, sort: prev }).sort
                    : updater.sort,
                );
              }}
            />
          </div>

          <div>
            <span className="block text-sm font-bold mb-3 text-brownness">
              Sort by Experience
            </span>

            <ProviderSortByExperience
              filters={{
                ...filters,
                sort: tempSort,
              }}
              setFilters={(updater) => {
                setTempSort((prev) =>
                  typeof updater === "function"
                    ? updater({ ...filters, sort: prev }).sort
                    : updater.sort,
                );
              }}
            />
          </div>

          <div>
            <span className="block text-sm font-bold mb-3 text-brownness">
              Sort by Distance
            </span>

            <ProviderSortByDistance
              filters={{
                ...filters,
                sort: tempSort,
              }}
              setFilters={(updater) => {
                setTempSort((prev) =>
                  typeof updater === "function"
                    ? updater({ ...filters, sort: prev }).sort
                    : updater.sort,
                );
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="
          sticky
          bottom-0
          flex
          gap-3
          mt-2
          px-4
          py-4
          bg-gray-50
          border-t
          border-gray-200
        "
        >
          <Button type="button" color="white" fullWidth onClick={isClose}>
            <IoClose size={20} className="text-brownness" />

            <span className="text-brownness font-bold">Cancel</span>
          </Button>

          <Button type="button" fullWidth onClick={handleApplySort}>
            <MdSort size={20} />
            Apply Sort
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderSortModel;
