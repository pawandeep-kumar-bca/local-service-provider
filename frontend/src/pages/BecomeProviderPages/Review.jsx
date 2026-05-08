import React from "react";
import { AiFillIdcard } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import StatusBudge from "../../components/common/StatusBadge";
const Review = () => {
  return (
    <div className="my-4">
      <h1 className="text-xl font-semibold">Review Your Details</h1>
      <p className="text-sm font-medium mb-5">
        Please review your information before submitting.
      </p>

      <div className="md:flex md:w-full md:gap-5 ">
        <div className="md:border md:p-3 md:rounded-md md:shadow-[inset_0_0_3px_rgba(255,255,255,0.9)] flex-1">
          <div className="flex justify-between items-center md:my-1">
            <h1 className="text-lg font-semibold">Basic Information</h1>
            <Link
              to="/user/become-provider/basic-info"
              className="text-primary  font-semibold hover:underline"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <div className="flex justify-between items-center">
              <h3>Provider Name</h3>
              <p>Pawandeep kumar</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Provider Number</h3>
              <p>+91 9843234433</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Experience</h3>
              <p>5 Years</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Price (Per Hour)</h3>
              <p className="flex items-center">
                <MdOutlineCurrencyRupee />
                300
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3>City</h3>
              <p>Patna , Bihar</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Service Category</h3>
              <p>Plumbing</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Location</h3>
              <p>Patna Bihar</p>
            </div>
          </div>
        </div>
        <div className="md:border md:p-3 md:rounded-md md:shadow-[inset_0_0_3px_rgba(255,255,255,0.9)] flex-1">
          <div className="flex justify-between items-center md:my-1 ">
            <h1 className="text-lg font-semibold ">Documents</h1>
            <Link
              to="/user/become-provider/documents"
              className="font-semibold text-primary hover:underline"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shadow-sm">
                  <FaUserCircle size={24} />
                </div>
                <h3>Profile Image</h3>
              </div>
              <StatusBudge badge="uploaded" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg shadow-sm">
                  <AiFillIdcard size={24} />
                </div>
                <h3>Aadhar Card</h3>
              </div>
              <StatusBudge badge="pending" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-yellow-100 text-yellow-600 shadow-sm rounded-lg">
                  <PiCertificateFill size={24} />
                </div>
                <h3>Certificate</h3>
              </div>

              <StatusBudge badge="uploaded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
