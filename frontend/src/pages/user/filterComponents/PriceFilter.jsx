import React from "react";

const MIN = 0;
const MAX = 2000;
const STEP = 10;

const PriceFilter = ({ filters, setFilters }) => {
  const minPrice = filters.minPrice === "" ? MIN : Number(filters.minPrice);

  const maxPrice = filters.maxPrice === "" ? MAX : Number(filters.maxPrice);

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;

  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  const handleMinChange = (e) => {
    const value = Number(e.target.value);

    if (value >= maxPrice) return;

    setFilters((prev) => ({
      ...prev,
      minPrice: value,
    }));
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);

    if (value <= minPrice) return;

    setFilters((prev) => ({
      ...prev,
      maxPrice: value,
    }));
  };

  const handleMinInputChange = (e) => {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) return;

    if (value >= maxPrice) {
      setFilters((prev) => ({
        ...prev,
        minPrice: Math.max(MIN, maxPrice - STEP),
      }));

      return;
    }

    setFilters((prev) => ({
      ...prev,
      minPrice: Math.max(MIN, Math.min(value, MAX)),
    }));
  };

  const handleMaxInputChange = (e) => {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) return;

    if (value <= minPrice) {
      setFilters((prev) => ({
        ...prev,
        maxPrice: Math.min(MAX, minPrice + STEP),
      }));

      return;
    }

    setFilters((prev) => ({
      ...prev,
      maxPrice: Math.min(MAX, Math.max(value, MIN)),
    }));
  };

  return (
    <div className="w-full">
      {/* PRICE DISPLAY */}

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-grayness">Price Range</span>

        <span className="text-sm font-bold text-green-600">
          ₹{minPrice} - ₹{maxPrice}
        </span>
      </div>

      {/* SLIDER */}

      <div className="relative w-full h-5">
        {/* Background */}

        <div
          className="
            absolute
            top-1/2
            left-0
            w-full
            h-1
            bg-gray-200
            rounded-full
            -translate-y-1/2
          "
        />

        {/* Active range */}

        <div
          className="
            absolute
            top-1/2
            h-1
            bg-green-500
            rounded-full
            -translate-y-1/2
          "
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* MIN SLIDER */}

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={minPrice}
          onChange={handleMinChange}
          className="price-range absolute inset-0 w-full"
        />

        {/* MAX SLIDER */}

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={maxPrice}
          onChange={handleMaxChange}
          className="price-range absolute inset-0 w-full"
        />
      </div>

      {/* LABELS */}

      <div className="flex justify-between mt-2">
        <span className="text-xs font-medium text-grayness">₹{MIN}</span>

        <span className="text-xs font-medium text-grayness">₹{MAX}+</span>
      </div>

      {/* INPUTS */}

      <div className="flex items-center gap-2 mt-4">
        {/* MIN */}

        <div
          className="
            flex-1
            flex
            items-center
            gap-1
            bg-white
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            focus-within:border-green-500
          "
        >
          <span className="text-sm font-semibold text-grayness">₹</span>

          <input
            type="number"
            min={MIN}
            max={MAX}
            value={minPrice}
            onChange={handleMinInputChange}
            className="
              w-full
              outline-none
              bg-transparent
              text-sm
              font-semibold
              text-brownness
            "
          />
        </div>

        <span className="text-xs font-semibold text-grayness">to</span>

        {/* MAX */}

        <div
          className="
            flex-1
            flex
            items-center
            gap-1
            bg-white
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            focus-within:border-green-500
          "
        >
          <span className="text-sm font-semibold text-grayness">₹</span>

          <input
            type="number"
            min={MIN}
            max={MAX}
            value={maxPrice}
            onChange={handleMaxInputChange}
            className="
              w-full
              outline-none
              bg-transparent
              text-sm
              font-semibold
              text-brownness
            "
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
