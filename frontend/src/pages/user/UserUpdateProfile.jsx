import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import Input from "../../components/common/Input";
import StatusBadge from "../../components/common/StatusBadge";
import { IoIosCheckmark } from "react-icons/io";
import Button from "../../components/common/Button";
import Avatar from "../../components/common/Avatar";
import { useUser } from "../../hooks/useUser";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

const UserUpdateProfile = ({ user, isClose }) => {
  //   const { user } = useSelector((state) => state?.auth);

  const [profilePreview, setProfilePreview] = useState(
    user?.profileImage?.url || "",
  );
  const [updateProfile, setUpdateProfile] = useState({
    fullname: user?.fullname || "",
    phoneNumber: user?.phoneNumber || "",
    profileImage: null,
  });
  const { updateProfileMutation } = useUser();
  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const hasChanges =
      updateProfile.fullname !== user?.fullname ||
      updateProfile.phoneNumber !== user?.phoneNumber ||
      updateProfile.profileImage !== null;

    if (!hasChanges) {
      toast.info("No changes made");
      return;
    }

    try {
      const form = new FormData();

      if (updateProfile.profileImage) {
        form.append("profileImage", updateProfile.profileImage);
      }

      if (updateProfile.fullname) {
        form.append("fullname", updateProfile.fullname);
      }

      if (updateProfile.phoneNumber) {
        form.append("phoneNumber", updateProfile.phoneNumber);
      }

      await updateProfileMutation.mutateAsync(form, {
        onSuccess: () => {
          isClose();
        },
      });
    } catch (error) {
      console.log("Update profile error:", error);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] flex items-center justify-center"
      onClick={isClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full md:max-h-auto max-w-sm bg-white px-4 py-2 rounded-xl py-6"
      >
        <form onSubmit={handleSubmitProfile}>
          <div className="flex justify-center">
            <label
              htmlFor="profileImage"
              className="relative cursor-pointer w-[6rem] h-[6rem] md:w-[5rem] md:h-[5rem] group"
            >
              {/* Image */}
              <Avatar
                name={user?.fullname}
                image={profilePreview}
                className="text-blue-500 bg-blue-50 text-3xl"
              />
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  setUpdateProfile((prev) => ({
                    ...prev,
                    profileImage: file,
                  }));

                  setProfilePreview(URL.createObjectURL(file));
                }}
                id="profileImage"
                className="absolute hidden"
              />
              <span className="absolute bottom-0 right-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white shadow cursor-pointer group-hover:scale-105 transition">
                <MdOutlineFileUpload size={22} />
              </span>
            </label>
          </div>

          <div className="space-y-2 mt-8">
            <Input
              label="Full Name"
              value={updateProfile.fullname}
              onChange={(e) => {
                setUpdateProfile((prev) => ({
                  ...prev,
                  fullname: e.target.value,
                }));
              }}
              type="text"
              id="name"
              placeholder="Update your name..."
            />
            <Input
              label="Phone Number"
              value={updateProfile.phoneNumber}
              onChange={(e) => {
                setUpdateProfile((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }));
              }}
              type="text"
              id="phoneNumber"
              placeholder="Update your Phone number..."
            />
            <Input
              label="Email"
              type="email"
              value={user?.email}
              id="email"
              disabled
              className="cursor-not-allowed"
            />
          </div>
          <div className="flex justify-center  mb-3 mt-5 gap-4">
            <Button color="blue" fullWidth type="button" onClick={isClose}>
              Cancel
            </Button>
            <Button fullWidth>Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateProfile;
