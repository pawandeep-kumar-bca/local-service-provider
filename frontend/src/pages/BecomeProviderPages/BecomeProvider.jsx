import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdChevronLeft ,MdChevronRight} from "react-icons/md";
import Button from '../../components/common/Button'
const BecomeProvider = () => {
  return (
    <div>
      <div>
        <h1>Become a Provider</h1>
        <p>Fill your professional details to create your provider profile.</p>
      </div>
      <div className="flex w-full items-start">
        <NavLink
          to="basic-info"
          className="flex flex-col items-center w-[50px] shrink-0"
        >
          <h3 className="w-8 h-8 rounded-full border flex items-center justify-center">
            1
          </h3>

          <p className="text-xs mt-1 whitespace-nowrap">Basic Info</p>
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4 "></div>

        <NavLink to="upload-documents" className="flex w-[50px] flex-col items-center shrink-0">
          <h3 className="w-8 h-8 rounded-full border flex items-center justify-center">
            2
          </h3>

          <p className="text-xs mt-1 whitespace-nowrap">Documents</p>
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4"></div>

        <NavLink to="review" className="flex w-[50px] flex-col items-center shrink-0">
          <h3 className="w-8 h-8 rounded-full border flex items-center justify-center">
            3
          </h3>

          <p className="text-xs mt-1 whitespace-nowrap">Review</p>
        </NavLink>

        <div className="flex-1 h-[1px] bg-muted mt-4"></div>

        <NavLink to="submit" className="flex flex-col items-center w-[50px] shrink-0">
          <h3 className="w-8 h-8 rounded-full border flex items-center justify-center">
            4
          </h3>

          <p className="text-xs mt-1 whitespace-nowrap">Submit</p>
        </NavLink>
      </div>

      <div className="p-2 ">
        <Outlet />
      </div>
      
         <div className="flex justify-between items-center">
          <Button color="white"><MdChevronLeft size={25}/> Back</Button>
          <Button>Next<MdChevronRight  size={25}/></Button>
         </div>
    </div>
  );
};

export default BecomeProvider;
