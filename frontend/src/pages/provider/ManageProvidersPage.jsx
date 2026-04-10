import React from "react";
import {
  IoEyeOutline,
  IoFilterOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import Button from "../../components/common/Button";
import { IoIosCall, IoIosStar } from "react-icons/io";
const ManageProvidersPage = () => {
  return (
    <div className="w-full flex gap-3">
      <div className="w-[40%] p-2">
        <h1 className="text-lg font-semibold py-3 text-muted">
          Providers Awaiting Approval
        </h1>
        <div className="flex items-center justify-between gap-2 border border-muted rounded-sm py-1 px-2 mb-4">
          <div className="flex gap-2">
            <IoSearchOutline className="text-2xl" />
            <input
              type="text"
              placeholder="Search providers"
              className="outline-0 text-lg"
            />
          </div>
          <IoFilterOutline className="text-2xl cursor-pointer" />
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] rounded-lg p-2">
          <div className="flex gap-2 cursor-pointer">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-12 rounded-full object-cover "
            />
            <div>
              <h2 className="text-lg font-semibold">Aman gupta</h2>
              <p className="text-sm text-muted">Joined Apr 12 ,2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[60%] p-4">
        <h1 className="text-lg font-semibold py-3 text-muted">
          Provider Details
        </h1>
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-2 rounded-lg">
          <div>
            <div className="flex gap-4 items-center pb-5">
             
                <img
                src="/assets/profile.png"
                alt="profile"
                className="w-22 h-22 rounded-full object-cover cursor-pointer"
              />
              
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-muted">Aman gupta</h2>
                <p className="text-sm text-muted font-medium">General Physician</p>
                <div className="mt-2 flex gap-3">
                  <Button color="blue">Document Verification</Button>
                  <Button color="pending">Pending</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 pl-4">
              <div className="flex items-center gap-1">
                <IoIosCall className="text-2xl text-muted"/>
                <h5>+91 4092543755</h5>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail className="text-xl text-muted"/>
                <h5>amaamm.guapta43@gmail.com</h5>
              </div>
              <div className="flex items-center gap-1">
                <IoIosStar className="text-xl text-muted"/>
                <h5>4.6</h5>
                <p>(54)</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-xl font-semibold py-3 text-muted">Documents for verification</h1>
            <div>
              <div className="flex items-center justify-between shadow-[0_0_15px_rgba(0,0,0,0.45)] px-2 rounded-lg mb-2">
               <div className="flex gap-2 items-center ">
                 <img
                  src="/assets/profile.png"
                  alt="profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-muted font-bold">Aadhar Card</h4>
                  <h5 className="text-xs"> Mar 12,2023</h5>
                </div>
               </div>
                <IoEyeOutline className="text-xl cursor-pointer"/>
              </div>
             
              <div className="flex gap-4 justify-end mt-5 mb-3">
                <Button color="danger">Reject</Button>
                <Button color="blue">Approve</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProvidersPage;
