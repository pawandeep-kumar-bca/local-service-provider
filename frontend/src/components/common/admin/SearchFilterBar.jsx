
import React from "react";
import { IoSearch } from "react-icons/io5";
import CustomDatePicker from "./CustomDatePicker";

const SearchFilterBar = ({
  placeholder,
  filters = [],
}) => {
  return (
    <div className="flex gap-3 mb-5">
      <div className="flex items-center gap-4 pl-4 pr-2 py-2 border border-slate-300 rounded-lg text-muted flex-1">
        <input
          type="search"
          placeholder={placeholder}
          className="outline-0 border-0 w-full"
        />

        <IoSearch size={18} />
      </div>

      <div className="flex gap-3 flex-2">
        {filters.map((filter, index) => (
          <div className="flex-1" key={index}>
            <select
              className="
                rounded-lg
                px-4
                w-full
                py-2
                outline-0
                border
                border-slate-300
                text-muted
              "
            >
              <option disabled selected>
                {filter.label}
              </option>

              {filter.options.map((item, idx) => (
                <option
                  key={idx}
                  value={item.toLowerCase()}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div>
          <CustomDatePicker />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;