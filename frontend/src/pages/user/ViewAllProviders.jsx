import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProviderCard from "../../components/provider/ProviderCard";
import Button from "../../components/common/Button";
import { IoIosArrowBack } from "react-icons/io";
import FilterProviders from "./FilterProviders";
const ViewAllProviders = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/user");
    }
  };
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-text font-semibold">All Providers</h1>
        <Button color="white" onClick={handleBack}>
          <IoIosArrowBack /> Go Back
        </Button>
      </div>
      <FilterProviders url="user/all-providers"/>
      <div className="w-full h-[1px] bg-muted my-5"></div>
      <ProviderCard />
      
      
      <div className="my-3 flex justify-center">
        <Button color="blue">View More</Button>
      </div>
    </div>
  );
};

export default ViewAllProviders;
