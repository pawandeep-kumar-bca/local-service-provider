import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProviderCard from "../../components/provider/ProviderCard";
import Button from "../../components/common/Button";
import { IoIosArrowBack } from "react-icons/io";
import FilterProviders from "./FilterProviders";
import ProviderList from "../../components/provider/ProviderList";
import Pagination from "../../components/common/Pagination";

const ViewAllProviders = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/user");
    }
  };
 const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    category: "all",

    search: "",

    city: "",

    minRating: "",

    minExperience: "",

    availability: "",

    sort: "latest",

    page: 1,

    limit: 9,
  });


  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-text font-semibold">All Providers</h1>
        <Button color="white" onClick={handleBack}>
          <IoIosArrowBack /> Go Back
        </Button>
      </div>

      <FilterProviders
        url="user/all-providers"
        filters={filters}
        setFilters={setFilters}
      />
      <div className="w-full h-[1px] bg-muted my-5"></div>
      <Outlet
        context={{
          filters,
          setFilters,
          totalPages,
          setTotalPages
        }}
      />

      <Pagination
  currentPage={filters.page}
  totalPages={totalPages}
  onPageChange={(page) =>
    setFilters((prev) => ({
      ...prev,
      page,
    }))
  }
/>
    </div>
  );
};

export default ViewAllProviders;
