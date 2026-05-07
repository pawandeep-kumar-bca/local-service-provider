import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../../components/common/Button";

const BecomeProvider = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold  mb-2">Become a Provider</h1>
        <p className="text-lg font-extralight ">
          Fill your professional details to create your provider profile.
        </p>
      </div>
      <div className="flex w-full mb-4 mt-5 items-start md:w-[55%] mx-auto">
        <NavLink to="basic-info">
          {({ isActive }) => (
            <div className="flex flex-col items-center">
              <h3
                className={`w-8 h-8 rounded-full border flex items-center justify-center
        ${isActive ? "bg-primary text-white border-primary" : ""}
        `}
              >
                1
              </h3>

              <p
                className={`text-xs mt-1 whitespace-nowrap ${isActive ? "text-primary" : ""}`}
              >
                Basic Info
              </p>
            </div>
          )}
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4 "></div>

        <NavLink to="upload-documents">
          {({ isActive }) => (
            <div className="flex flex-col items-center">
              <h3
                className={`w-8 h-8 rounded-full border flex items-center justify-center
        ${isActive ? "bg-primary text-white border-primary" : ""}
        `}
              >
                2
              </h3>

              <p
                className={`text-xs mt-1 whitespace-nowrap ${isActive ? "text-primary" : ""}`}
              >
                Documents
              </p>
            </div>
          )}
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4"></div>

        <NavLink to="review">
          {({ isActive }) => (
            <div className="flex flex-col items-center">
              <h3
                className={`w-8 h-8 rounded-full border flex items-center justify-center
        ${isActive ? "bg-primary text-white border-primary" : ""}
        `}
              >
                3
              </h3>

              <p
                className={`text-xs mt-1 whitespace-nowrap ${isActive ? "text-primary" : ""}`}
              >
                Review
              </p>
            </div>
          )}
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4"></div>

        <NavLink to="submit">
          {({ isActive }) => (
            <div className="flex flex-col items-center">
              <h3
                className={`w-8 h-8 rounded-full border flex items-center justify-center
        ${isActive ? "bg-primary text-white border-primary" : ""}
        `}
              >
                4
              </h3>

              <p
                className={`text-xs mt-1 whitespace-nowrap ${isActive ? "text-primary" : ""}`}
              >
                Submit
              </p>
            </div>
          )}
        </NavLink>
      </div>

      <div className="p-2 md:w-[80%] mx-auto">
        <Outlet />
      </div>

      <div className="flex justify-between items-center md:w-[80%] mx-auto">
        <Button color="white">
          <MdChevronLeft size={25} /> Back
        </Button>
        <Button>
          Next
          <MdChevronRight size={25} />
        </Button>
      </div>
    </div>
  );
};

export default BecomeProvider;
