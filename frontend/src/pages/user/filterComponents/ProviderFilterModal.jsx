import React, { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import RatingFilter from "./RatingFilter";
import ExperienceFilter from "./ExperienceFilter";
import TrustedFilter from "./TrustedFilter";

import Button from "../../../components/common/Button";

import { MdFilterListAlt } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const ProviderFilterModal = ({ filters, setFilters, isClose ,showCategory}) => {
  const [tempFilters, setTempFilters] = useState(filters);

  const resetFilters = () => {
    setTempFilters({
      categoryId: "",
      rating: "",
      experience: "",
      availability: "",
      trusted: "",
      minPrice: "",
      maxPrice: "",
      sort: [],
    });
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);

    isClose();
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
        {/* HEADER */}

        <div className="sticky top-0 w-full  flex justify-between bg-gray-50 px-4 py-3 rounded-t-xl z-[999]">
          <h1 className="text-lg font-bold text-brownness">Filters</h1>

          <button
            type="button"
            onClick={resetFilters}
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

        {/* FILTERS */}

        <div className=" px-4 pb-7 w-full">
          <div className="space-y-5">
            {/* CATEGORY */}

           {showCategory && <div className="w-full">
              <span className="block text-sm font-bold mb-3 text-brownness">
                Category
              </span>

              <CategoryFilter
                filters={tempFilters}
                setFilters={setTempFilters}
              />
            </div>}

            {/* PRICE */}

            <div>
              <span className="block text-sm font-bold mb-3 text-brownness">
                Price Range
              </span>

              <PriceFilter filters={tempFilters} setFilters={setTempFilters} />
            </div>

            {/* AVAILABILITY */}

            <div>
              <span className="block text-sm font-bold mb-3 text-brownness">
                Availability
              </span>

              <AvailabilityFilter
                filters={tempFilters}
                setFilters={setTempFilters}
              />
            </div>

            {/* RATING */}

            <div>
              <span className="block text-sm font-bold mb-3 text-brownness">
                Rating
              </span>

              <RatingFilter filters={tempFilters} setFilters={setTempFilters} />
            </div>

            {/* EXPERIENCE */}

            <div>
              <span className="block text-sm font-bold mb-3 text-brownness">
                Experience
              </span>

              <ExperienceFilter
                filters={tempFilters}
                setFilters={setTempFilters}
              />
            </div>

            {/* TRUSTED */}

            <div>
              <span className="block text-sm font-bold mb-3 text-brownness">
                Trusted
              </span>

              <TrustedFilter
                filters={tempFilters}
                setFilters={setTempFilters}
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div className="flex gap-3 mt-6">
            <Button type="button" color="white" fullWidth onClick={isClose}>
              <IoClose size={20} className="text-brownness" />

              <span className="text-brownness font-bold">Cancel</span>
            </Button>

            <Button type="button" fullWidth onClick={handleApplyFilters}>
              <MdFilterListAlt size={20} />
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderFilterModal;
