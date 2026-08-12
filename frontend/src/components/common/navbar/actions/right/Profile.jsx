import React from "react";
import Avatar from "../../../Avatar";
import { useSelector } from "react-redux";

const Profile = ({ className = "" }) => {
  const user =useSelector((state)=>state.auth.user) 
  
  return (
    <div className={`w-12 h-12 shrink-0 ${className}`}>
      <Avatar
        className="text-black bg-gray-200 font-bold text-xl cursor-pointer"
        name={user?.fullname}
        image={user?.profileImage?.url}
      />
    </div>
  );
};

export default Profile;
