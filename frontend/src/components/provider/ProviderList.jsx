import React, { useEffect } from "react";
import { useProviders } from "../../hooks/useProvider";
import { useOutletContext } from "react-router-dom";
import ProviderCard from "./ProviderCard";
import { Link } from "react-router-dom";
const ProviderList = () => {
  
  const context = useOutletContext();

  
  const setTotalPages = context.setTotalPages;
  const { data, isLoading } = useProviders();


 

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
    <div className="max-w-7xl mx-auto md:px-4 md:py-6">
      <div className="flex justify-between items-center pb-5">
                <h1 className="text-2xl font-bold">Providers</h1>
                <Link to="all-providers" className="text-primary font-semibold">
                  View All
                </Link>
              </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
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
