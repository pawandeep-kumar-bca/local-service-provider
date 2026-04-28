import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import Input from "../../components/common/Input";
import StatusBadge from "../../components/common/StatusBadge";
import { IoIosCheckmark } from "react-icons/io";
import Button from "../../components/common/Button";

const UserSetting = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-medium text-text">Personal Information</h1>
        <p className="text-muted text-sm font-medium">
          Update your personal details
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <div className="relative w-[5rem] h-[5rem]">
          {/* Image */}
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />

          {/* Upload Icon */}
          <MdOutlineFileUpload className="absolute bottom-2 right-3 bg-primary text-white rounded-full text-lg p-1 cursor-pointer" size={24}/>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col md:flex-row md:gap-4">
          <Input label="Full Name" type="text" id="name" placeholder="Update your name..."/>
          <Input
            label="Email"
            type="email"
            value="pawandeepkumar7777@gmail.com"
            id="email"
            readOnly
          />
        </div>
        <div className="flex gap-4 mt-5">
          <Input label="Role" type="text" value="user" id="role" readOnly />
          <div className="w-[100%]">
            <h3 className="mb-3  text-text font-semibold text-lg  md:text-sm">Account Status</h3>
            <StatusBadge>
              Verified <IoIosCheckmark size={30}/>
            </StatusBadge>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:mb-5 mb-2 mt-4">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default UserSetting;
