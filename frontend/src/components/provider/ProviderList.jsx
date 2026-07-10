import React, { useEffect } from "react";
import { useProviders } from "../../hooks/useProvider";
import { useOutletContext } from "react-router-dom";
import ProviderCard from "./ProviderCard";

const ProviderList = () => {
  // const { filters ,setTotalPages} = useOutletContext();
  const context = useOutletContext();

  const filters = context.filters;
  const setTotalPages = context.setTotalPages;
  const { data, isLoading } = useProviders(filters);

 

  useEffect(() => {
  if (data && typeof setTotalPages === "function") {
    setTotalPages(data.totalPages);
  }
}, [data, setTotalPages]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {data?.providers?.map((provider) => (
          <ProviderCard
            key={provider._id}
            provider={provider}
            selectedCategory={filters.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
