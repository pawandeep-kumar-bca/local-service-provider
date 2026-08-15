import React from "react";
import {
  useRecommendedProviders,
  useNearbyProviders,
} from "../../hooks/useProvider";
import ProviderCard from "./ProviderCard";
import { useNavigate, useOutletContext } from "react-router-dom";
import ProviderSortBar from "./filterComponents/ProviderSortBar";
const ProviderList = () => {
  const navigate = useNavigate();
  const { filters, setFilters, nearbyFilters } = useOutletContext();
const hasLocation =
  Boolean(nearbyFilters?.lat) &&
  Boolean(nearbyFilters?.lng) &&
  Boolean(nearbyFilters?.radius);

  const recommendedQuery = useRecommendedProviders(filters);

  const nearbyQuery = useNearbyProviders(nearbyFilters);

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

        <button
          type="button"
          onClick={() => navigate("/user/all-providers")}
          className="text-primary text-sm transition-all duration-300 cursor-pointer  font-semibold hover:underline disabled:opacity-50"
        >
          View All
        </button>
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
