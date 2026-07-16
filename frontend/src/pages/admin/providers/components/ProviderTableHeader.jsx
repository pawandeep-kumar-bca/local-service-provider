import React from "react";

const ProviderTableHeader = () => {
  return (
    <div
      className="
        grid gap-1
        grid-cols-[1.6fr_1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_.4fr]
        items-center
        bg-gray-50
        rounded-xl
        px-4
        py-4
        text-sm
        font-semibold
        text-gray-700
      "
    >
      <span className="pl-9">Provider</span>
      <span>Service Category</span>
      <span className="text-center">Email</span>
      <span>Phone</span>
      <span>Status</span>
      <span className="text-center">Verification</span>
      <span className="text-center">Job Completed</span>
      <span className="text-center">Joined Date</span>
      <span>Action</span>
    </div>
  );
};

export default ProviderTableHeader;