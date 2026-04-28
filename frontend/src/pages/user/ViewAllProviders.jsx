import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProviderCard from "../../components/provider/ProviderCard";
import Button from "../../components/common/Button";
import { IoIosArrowBack } from "react-icons/io";
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
      <div className="w-full h-[1px] bg-muted my-5"></div>
      <div className="grid grid-col-1 gap-2 md:grid-cols-3">
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </div>
      <div className="my-3 flex justify-center">
        <Button color="blue">View More</Button>
      </div>
    </div>
  );
};

export default ViewAllProviders;
