import React, { useState } from "react";
import { useRecommendedProviders } from "../../hooks/useProvider";
import { useNavigate, useParams } from "react-router-dom";
import SelectProviders from "./SelectProviders";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../components/common/Button";
import ProviderCard from "./ProviderCard";
import ProviderSortBar from "./filterComponents/ProviderSortBar";
const SelectProvidersList = () => {
  const { categoryId } = useParams();
  const [filters, setFilters] = useState({
    categoryId,
    rating: "",
    experience: "",
    availability: "",
    trusted: "",
    minPrice: "",
    maxPrice: "",
    sort: [],
    page: 1,
    limit: 20,
  });
  
  const navigate = useNavigate();
  const { data } = useRecommendedProviders(filters);
  const providers = data?.providers || [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button color="white" type="button" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Back
        </Button>
      </div>
      <ProviderSortBar filters={filters} setFilters={setFilters} showCategory={false}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {providers.map((provider) => (
          
            <ProviderCard provider={provider} key={`${provider._id}`} />
            
          
        ))}
      </div>
    </div>
  );
};

export default SelectProvidersList;
