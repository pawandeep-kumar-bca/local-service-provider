import React from "react";
import { useRecommendedProviders,useNearbyProviders } from "../../hooks/useProvider";
import ProviderCard from "./ProviderCard";
import { Link, useOutletContext } from "react-router-dom";
import ProviderSortBar from "./filterComponents/ProviderSortBar";
const ProviderList = () => {
  console.log("PROVIDER LIST RENDER");
  const { filters, setFilters } = useOutletContext();
  const hasLocation = filters.lat !== "" && filters.lng !== "" && filters.radius !=='';

  const recommendedQuery = useRecommendedProviders(filters);

  const nearbyQuery = useNearbyProviders(filters);

  const data = hasLocation ? nearbyQuery.data : recommendedQuery.data;
const isLoading = hasLocation
  ? nearbyQuery.isLoading
  : recommendedQuery.isLoading;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-6">
      <div className="flex justify-between items-center pb-5">
        <h1 className="md:text-2xl text-brownness text-xl font-bold">
          Find Best Service Providers
        </h1>

        <Link to="all-providers" className="text-primary text-sm transition-all duration-300 cursor-pointer  font-semibold hover:underline disabled:opacity-50">
          View All
        </Link>
      </div>
      <ProviderSortBar
        filters={filters}
        setFilters={setFilters}
        showDistance={hasLocation}
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
