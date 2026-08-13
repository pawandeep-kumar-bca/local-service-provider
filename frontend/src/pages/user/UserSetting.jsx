import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/common/Avatar";
import { MdGppBad, MdOutlineEdit, MdVerifiedUser } from "react-icons/md";
import UserUpdateProfile from "./UserUpdateProfile";

const UserSetting = () => {
  const { user } = useSelector((state) => state?.auth);
  const [openEdit, setOpenEdit] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="w-50 h-50 rounded-full shrink-0 object-cover group relative">
          <Avatar
            name={user?.fullname}
            image={user?.profileImage?.url}
            className="text-blue-500 bg-blue-50 text-3xl"
          />
          <button
            type="button"
            onClick={() => setOpenEdit(true)}
            className="
      absolute inset-0
      rounded-full
      bg-black/50
      cursor-pointer
      text-white
      flex flex-col
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
          >
            <MdOutlineEdit size={28} />
            <span className="text-sm mt-1">Edit</span>
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-end gap-2">
            <h1 className="text-3xl font-bold text-brownness">
              {user?.fullname}
            </h1>
            <MdOutlineEdit
              onClick={() => setOpenEdit(true)}
              size={30}
              className="text-gray-500 hover:scale-[1.01] hover:bg-gray-100 rounded-lg p-1 cursor-pointer"
            />
          </div>
          <div className="flex items-end gap-2">
            <span className="flex items-center gap-1">
              <h1 className="text-xl font-bold text-brownness">
                {user?.email}
              </h1>
              {user?.isVerified ? (
                <MdVerifiedUser className="md:mt-2 text-success text-lg" />
              ) : (
                <MdGppBad className="md:mt-2 text-danger text-lg" />
              )}
            </span>
          </div>
          <div className="flex items-end gap-2">
            <h1 className="text-xl font-bold text-brownness">
              {user?.phoneNumber}
            </h1>
            <MdOutlineEdit
              onClick={() => setOpenEdit(true)}
              size={30}
              className="text-gray-500 hover:scale-[1.01] hover:bg-gray-100 rounded-lg p-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {openEdit && (
        <UserUpdateProfile user={user} isClose={() => setOpenEdit(false)} />
      )}
    </>
  );
};

export default UserSetting;
