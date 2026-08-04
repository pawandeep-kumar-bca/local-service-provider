import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import FilterCategories from "./FilterCategories";

const OurServices = () => {
  // const { category } = useParams();

  const { category } = useParams();

  const [filters, setFilters] = useState({
    category: category || "all",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Our Services</h1>

      <FilterCategories
        url="user/our-services"
        filters={filters}
        setFilters={setFilters}
      />
      <div>
        <Outlet context={{ filters, setFilters }} />
      </div>
    </div>
  );
};

export default OurServices;
