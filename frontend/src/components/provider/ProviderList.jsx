import React from "react";
import { useProviders } from "../../hooks/providerHooks";
import { useParams } from "react-router-dom";
import ProviderCard from "./ProviderCard";

const ProviderList = () => {
  const { category } = useParams();

  const { data, isLoading } = useProviders({
    category,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.providers?.map((provider) => (
          <ProviderCard
            key={provider._id}
            provider={provider}
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderList;