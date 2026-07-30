import React from "react";

const UserInfo = ({ image, name, id }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex items-center gap-3">
      {image ? (
        <div
          className="
          w-12 h-12 min-w-12
          rounded-full
          ring-2 ring-primary/10
        "
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ) : (
        <div className="w-12 h-12 min-w-12 flex items-center justify-center text-lg font-bold bg-gray-200 rounded-full">
          {initials}
        </div>
      )}

      <div>
        <h1 className="text-base font-bold text-black/90">{name}</h1>

        <p className="text-xs font-semibold mt-1 text-blue-500">#{id}</p>
      </div>
    </div>
  );
};

export default UserInfo;
