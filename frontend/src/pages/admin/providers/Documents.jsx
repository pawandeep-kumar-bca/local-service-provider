import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import { ImFilePdf } from "react-icons/im";
import { IoIosEye } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import StatusBadge from "../../../components/common/StatusBadge";

const documents = [
  {
    id: 1,
    title: "Identity Proof",
    subtitle: "Aadhaar Card",
    file: "aadhaar_card.pdf",
    uploadedDate: "May 10, 2024",
    status: "verified",
  },
];

const Documents = () => {
  return (
    <div>
      {/* top section */}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-text">
            Provider Documents
          </h1>

          <p className="text-sm text-muted mt-1">
            Review and verify provider documents.
          </p>
        </div>

      <div>
          <select
          name="document"
          id="document"
          className="
            border border-gray-300
            px-3 py-2
            rounded-xl
            font-medium
            text-gray-700
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="">All Documents</option>

          <option value="aadhaar">Aadhaar Card</option>

          <option value="pan">PAN Card</option>

          <option value="passport">Passport</option>

          <option value="electricity_bill">Electricity Bill</option>

          <option value="business_license">Business License</option>
        </select>
      </div>
      </div>

      {/* document cards */}

      <div className="space-y-4 mt-5">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="
              border border-gray-200
              rounded-2xl
              overflow-hidden
              hover:border-blue-200
              hover:shadow-sm
              transition-all duration-300
            "
          >
            {/* top */}

            <div className="flex justify-between items-center p-4">
              {/* left */}

              <div className="flex gap-4">
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-blue-50
                    flex items-center justify-center
                    text-blue-500
                  "
                >
                  <FaAddressCard size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-muted">{doc.subtitle}</p>
                </div>
              </div>

              {/* center */}

              <div className="hidden md:block">
                <p className="text-sm text-muted">Uploaded on</p>

                <p className="text-sm font-semibold text-text mt-1">
                  {doc.uploadedDate}
                </p>
              </div>

              <div>
                <StatusBadge badge={doc.status} showIcon />
              </div>
              {/* right */}

              <div className="flex items-center gap-3">
                <button
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-gray-200
                    flex items-center justify-center
                    text-muted
                    hover:bg-gray-50
                    hover:border-gray-300
                    transition-all
                  "
                >
                  <BsThreeDotsVertical size={18} />
                </button>
              </div>
            </div>

            {/* bottom */}

            <div
              className="
                border-t border-gray-200
                px-4 py-3
                flex justify-between items-center
              "
            >
              <div className="flex items-center gap-2">
                <ImFilePdf className="text-red-500" size={18} />

                <p className="text-sm text-muted">{doc.file}</p>
              </div>

              <button
                className="
                  flex items-center gap-1
                  text-blue-600
                  font-medium
                  hover:text-blue-700
                  transition-all cursor-pointer
                "
              >
                <IoIosEye size={18} />

                <span className="text-sm">View</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
