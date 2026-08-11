import React from "react";

const RadiusFilter = ({ filters, setFilters }) => {
  return (
    <div>
      <label
        htmlFor="radius"
        className="block text-sm font-bold mb-3 text-brownness"
      >
        Enter a Radius
      </label>
      <input
        type="number"
        min="1"
        step="1"
        placeholder="e.g. 5"
        value={filters.radius}
        onChange={(e) => {
          setFilters((prev) => ({
            ...prev,
            radius: e.target.value,
          }));
        }}
        className="w-full appearance-none outline-none border rounded-lg bg-white border-gray-300 text-grayness text-sm font-semibold py-2 px-3"
      />
    </div>
  );
};

export default RadiusFilter;
