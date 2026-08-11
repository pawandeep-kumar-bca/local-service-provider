import React from "react";
import { useRecommendedProviders } from "../../hooks/useProvider";
import ProviderCard from "./ProviderCard";
import { Link, useOutletContext } from "react-router-dom";
import ProviderSortBar from "./filterComponents/ProviderSortBar";
const ProviderList = () => {
  const { filters, setFilters } = useOutletContext();

  const { data, isLoading } = useRecommendedProviders(filters);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-6">
      <div className="flex justify-between items-start pb-5">
        <h1 className="md:text-2xl text-xl font-bold">
          Find Best service Providers
        </h1>

        <Link to="all-providers" className="text-primary font-semibold">
          View All
        </Link>
      </div>
      <ProviderSortBar
        filters={filters}
        setFilters={setFilters}
        showCategory={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {data?.providers?.map((provider) => (
          <ProviderCard key={provider._id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
