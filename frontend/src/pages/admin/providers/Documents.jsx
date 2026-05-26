import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import { ImFilePdf } from "react-icons/im";
import { IoIosEye } from "react-icons/io";
import StatusBadge from "../../../components/common/StatusBadge";
import { BsThreeDotsVertical } from "react-icons/bs";

const Documents = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold">Provider Document</h1>
          <p className="text-sm text-muted">
            Review and verify documents submitted by the provider.
          </p>
        </div>
        <div>
          
          <select
            name="document"
            id="document"
            className="
      w-full
      border border-gray-300
      px-2 py-1.5
      rounded-lg font-medium
      text-gray-700
      bg-white
      focus:outline-none
      focus:ring
      focus:ring-blue-500
    "
          >
            <option value="">All Document</option>

            <option value="aadhaar">Aadhaar Card</option>

            <option value="pan">PAN Card</option>

            <option value="driving_license">Driving License</option>

            <option value="passport">Passport</option>

            <option value="voter_id">Voter ID</option>

            <option value="electricity_bill">Electricity Bill</option>

            <option value="bank_statement">Bank Statement</option>

            <option value="business_license">Business License</option>

            <option value="police_verification">Police Verification</option>

            <option value="insurance_certificate">Insurance Certificate</option>
          </select>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg mt-3">

        <div className="flex justify-between items-center p-3">
          <div className="flex gap-3">
            <div className="text-blue-500 bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
              <FaAddressCard size={20}/>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Identity Proof</h3>
              <p className="text-sm text-muted">
                Aadhar card
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted">Uploaded on</p>
            <p className="text-sm font-semibold mt-1">May 10 ,2024</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <StatusBadge badge="verified" showIcon/>
            <button className="p-2 rounded-lg text-muted border-gray-300 cursor-pointer border transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
              <BsThreeDotsVertical size={18}/>
            </button>
          </div>
        </div>
          <div className="border-t border-gray-300 py-3 px-3 flex justify-between">
            <div className="flex gap-2 items-center">
              <ImFilePdf className=" text-red-500" size={18}/>
              <p className="text-sm text-muted">Aadhar_card.pdf</p>
            </div>
            <button className="text-blue-500 flex gap-1 items-center font-semibold cursor-pointer"><IoIosEye size={18}/>
            <p className="text-sm">View </p></button>
          </div>
      </div>
    </div>
  );
};

export default Documents;
