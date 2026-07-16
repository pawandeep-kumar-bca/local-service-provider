import React from "react";

const UserTableHeader = () => {
  return (
    <div
      className="
        grid
        grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_0.7fr_0.4fr]
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
      <span className="text-black/80 text-lg">User</span>
      <span className="text-black/80 text-lg">Email</span>
      <span className="text-black/80 text-lg">Phone</span>
      <span className="text-black/80 text-lg">Status</span>
      <span className="text-black/80 text-lg">Joined Date</span>
      <span className="text-black/80 text-lg">Bookings</span>
      <span className="text-black/80 text-lg">Action</span>
    </div>
  );
};

export default UserTableHeader;