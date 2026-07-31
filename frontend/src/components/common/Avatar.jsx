import React from "react";

const Avatar = ({ name, image, className = "" }) => {
  const initials = (name || "")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return image ? (
    <img
      src={image}
      alt={name}
      className="w-full h-full rounded-full object-cover "
    />
  ) : (
    <div
      className={`w-full h-full rounded-full flex items-center justify-center  font-bold ${className}`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
