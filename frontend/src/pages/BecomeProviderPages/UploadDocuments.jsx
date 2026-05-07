import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillIdcard } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
const UploadDocuments = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg md:text-xl font-semibold text-text">Upload Required Documents</h1>
        <p className="text-sm font-medium text-text mb-5 mt-1">Please upload clear and valid documents</p>
      </div>
      <div>
        <div className="flex border mb-4 items-center justify-between rounded-md p-2">
          <div className="flex gap-3 items-center">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg shadow-sm">
              <FaUserCircle size={28}/>
            </div>
            <div className="flex-1">
              <h1>
                Profile Image <span className="text-danger">*</span>
              </h1>
              <p className="text-sm text-text font-extralight">
                Upload your profile photo
              </p>
            </div>
          </div>
          <label className="px-4 py-1 border-2 border text-primary shadow-[inset_0_0_3px_rgba(255,255,255,0.8)] rounded-md text-center cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
            <p className="text-lg font-medium">Upload</p>

            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="flex border mb-4 items-center justify-between rounded-md p-2">
          <div className="flex gap-3 items-center">
           <div className="p-3 bg-green-100 text-green-600 rounded-lg shadow-sm">
              <AiFillIdcard size={28}/>
            </div>
            <div className="flex-1">
              <h1>
                Aadhar Card <span className="text-danger">*</span>
              </h1>
              <p className="text-sm text-text font-extralight">
                Upload front side of your Aadhar card
              </p>
            </div>
          </div>
          <label className="px-4 py-1 border-2 border text-primary shadow-[inset_0_0_3px_rgba(255,255,255,0.8)] rounded-md text-center cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
            <p className="text-lg font-medium">Upload</p>

            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="flex border mb-4 items-center justify-between rounded-md p-2">
          <div className="flex gap-3 items-center">
            <div className="p-3 bg-yellow-100 text-yellow-600 shadow-sm rounded-lg">
              <PiCertificateFill size={28}/>
            </div>
            <div className="flex-1">
              <h1>
                Certificate <span className="text-danger">*</span>
              </h1>
              <p className="text-sm text-text font-extralight">
                Upload your experience or skill certificate
              </p>
            </div>
          </div>
          <label className="px-4 py-1 border-2 border text-primary shadow-[inset_0_0_3px_rgba(255,255,255,0.8)] rounded-md text-center cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
            <p className="text-lg font-medium">Upload</p>

            <input type="file" className="hidden" accept=".pdf,image/*" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
