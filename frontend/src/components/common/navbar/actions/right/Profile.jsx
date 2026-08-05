import React from "react";
import Avatar from "../../../Avatar";

const Profile = ({ className = "" }) => {
  return (
    <div className={`w-12          h-12 shrink-0 ${className}`}>
      <Avatar
        className="text-black bg-gray-200 font-bold text-xl cursor-pointer"
        name="PawanDeep Kumar"
        image=""
      />
    </div>
  );
};

export default Profile;
