import React from "react";

const TrustedFilter = ({ filters, setFilters }) => {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="trusted"
          value=""
          checked={filters.trusted === ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              trusted: e.target.value,
            }))
          }
        />

        <span className="text-sm font-semibold text-grayness">All</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="trusted"
          value="true"
          checked={filters.trusted === "true"}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              trusted: e.target.value,
            }))
          }
        />

        <span className="text-sm font-semibold text-grayness">
          Trusted Pro Only
        </span>
      </label>
    </div>
  );
};

export default TrustedFilter;
