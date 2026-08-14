import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../components/common/Button";
import { IoIosArrowBack } from "react-icons/io";
import Pagination from "../../components/common/Pagination";

const ViewAllProviders = () => {
  const savedLocation = JSON.parse(localStorage.getItem("location") || "null");
  const [filters, setFilters] = useState({
    categoryId: "",
    rating: "",
    experience: "",
    availability: "",
    trusted: "",
    minPrice: "",
    maxPrice: "",
    sort: [],
    // location
    lat: savedLocation?.latitude || "",
    lng: savedLocation?.longitude || "",
    radius: 200,
  });

  return (
    <div className="mt-4">
      <Outlet
        context={{
          filters,
          setFilters,
        }}
      />
    </div>
  );
};

export default ViewAllProviders;
