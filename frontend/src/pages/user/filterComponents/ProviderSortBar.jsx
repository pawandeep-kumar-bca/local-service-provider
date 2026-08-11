import { MdFilterListAlt } from "react-icons/md";
import ProviderSortModel from "../sortComponents.jsx/ProviderSortModel";
import { useState } from "react";
import ProviderSortByPrice from "../sortComponents.jsx/ProviderSortByPrice";
import ProviderFilterModal from "./ProviderFilterModal";
import ProviderSortByRating from "../sortComponents.jsx/ProviderSortByRating";
import ProviderSortByExperience from "../sortComponents.jsx/ProviderSortByExperience";
import ProviderSortByDistance from "../sortComponents.jsx/ProviderSortByDistance";
import { CgSortZa } from "react-icons/cg";
const ProviderSortBar = ({ filters, setFilters }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [openSorts, setOpenSorts] = useState(false);

  return (
    <>
      <div className="w-full">
        {/* SORT OPTIONS */}
        <div
          className="
          mt-3
          mb-3
          flex justify-between items-center
          md:mt-0
          md:pb-0
        "
        >
          {/* Desktop Sort Label */}
          <div
            className="hidden md:flex flex
          items-center
          gap-2
          pb-1"
          >
            <h1
              className="
            hidden
            md:block
            shrink-0
            text-sm
            py-2
            px-3
            bg-gray-50
            border
            border-gray-200
            rounded-lg
            text-brownness
            font-semibold
          "
            >
              Sort By
            </h1>

            {/* Price */}
            <div className="shrink-0">
              <ProviderSortByPrice filters={filters} setFilters={setFilters} />
            </div>

            {/* Rating */}
            <div className="shrink-0">
              <ProviderSortByRating filters={filters} setFilters={setFilters} />
            </div>

            {/* Experience */}
            <div className="shrink-0">
              <ProviderSortByExperience
                filters={filters}
                setFilters={setFilters}
              />
            </div>

            {/* Distance */}
            <div className="shrink-0">
              <ProviderSortByDistance
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </div>
          {/* Desktop Filters */}
          <button
            type="button"
            onClick={() => setOpenSorts(true)}
            className="
            flex
              md:hidden
              shrink-0
              
              
              text-brownness
              
              items-center
              justify-center
              gap-1
              cursor-pointer
            "
          >
            <CgSortZa size={28} />
            <span className="font-semibold">Sorts</span>
          </button>
          <button
            type="button"
            onClick={() => setOpenFilters(true)}
            className="
            flex
              shrink-0
             text-brownness
              pr-1
              items-center
              justify-center
              gap-1
              cursor-pointer
            "
          >
            <MdFilterListAlt size={22} />
            <span className="font-semibold">Filters</span>
          </button>
        </div>
      </div>

      {/* FILTER MODAL */}
      {openFilters && (
        <ProviderFilterModal
          filters={filters}
          setFilters={setFilters}
          isClose={() => setOpenFilters(false)}
        />
      )}

      {/* SORT MODAL */}
      {openSorts && (
        <ProviderSortModel
          filters={filters}
          setFilters={setFilters}
          isClose={() => setOpenSorts(false)}
        />
      )}
    </>
  );
};

export default ProviderSortBar;
