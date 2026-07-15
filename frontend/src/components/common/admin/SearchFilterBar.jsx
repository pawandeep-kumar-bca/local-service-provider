import React from "react";
import { IoSearch } from "react-icons/io5";
import CustomDatePicker from "../CustomDatePicker";

const SearchFilterBar = ({
  placeholder,
  filters,
  setFilters,
  options = [],
}) => {
  return (
    <div className="flex gap-3 mb-5">
      <div className="flex items-center gap-4 pl-4 pr-2 py-2 border border-slate-300 rounded-lg text-muted flex-1">
        <input
          type="search"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
          placeholder={placeholder}
          className="outline-0 border-0 w-full"
        />

        <IoSearch size={18} />
      </div>

      <div className="flex gap-3 flex-2">
        {options.map((option, index) => (
          <div className="flex-1" key={index}>
            <select
              value={option.value}
              onChange={(e) => option.onChange(e.target.value)}
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
              <option value=''>
                {option.label}
              </option>

              {option.options.map((item, idx) => (
                <option key={idx} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div>
          <CustomDatePicker   filters={filters} setFilters={setFilters}/>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
