import React from "react";
import { useRecommendedProviders } from "../../hooks/useProvider";
// import { useOutletContext } from "react-router-dom";
import ProviderCard from "./ProviderCard";
import { Link, useOutletContext } from "react-router-dom";
import ProviderSortBar from "./filterComponents/ProviderSortBar";
const ProviderList = () => {
  const { filters, setFilters } = useOutletContext();
  console.log("ACTUAL FILTERS:", filters);
  const { data, isLoading } = useRecommendedProviders(filters);
console.log(data?.providers);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-6">
      <div className="flex justify-between items-center pb-5">
        <div>
          <h1 className="text-2xl font-bold">Find Best service Providers</h1>
          <p className="text-sm text-gray-500">
            Choose from top rated and Verified professionals near you.
          </p>
        </div>

        <Link to="all-providers" className="text-primary font-semibold">
          View All
        </Link>
      </div>
      <ProviderSortBar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {data?.providers?.map((provider) => (
          <ProviderCard key={provider._id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
