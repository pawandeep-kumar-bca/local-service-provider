import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import FilterProviders from "./FilterProviders";
import FilterCategories from "./FilterCategories";


const OurServices = () => {
  const [filters, setFilters] = useState({category:'all'});

  
  return (
    <div>
      <h1 className="text-2xl font-bold">Our Services</h1>
     
      <FilterCategories
        url="user/our-services"
        filters={filters}
        setFilters={setFilters}
      />
      <div>
        <Outlet context={{filters,setFilters}} />
      </div>
    </div>
  );
};

export default OurServices;
