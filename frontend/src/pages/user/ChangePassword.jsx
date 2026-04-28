import React from "react";
import { CiLock } from "react-icons/ci";
import Input from "../../components/common/Input";
import { FaLock } from "react-icons/fa";
import Button from "../../components/common/Button";
import { IoIosCheckmark } from "react-icons/io";

const ChangePassword = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="bg-primary w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full text-white">
          <CiLock size={30} />
        </div>
        <div className="w-[75%]">
          <h3 className="text-lg font-semibold text-text">Change Password</h3>
          <p className="text-muted text-sm">
            Update your password to keep your account secure
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:gap-3">
        <Input
          label="Current Password"
          id="currentPassword"
          type="password"
          required
          placeholder="Current Password..."
        />
        <Input label="New Password" id="newPassword" type="password" required placeholder="New Password..."/>
        <Input
          label="Confirm New Password"
          id="confirmPassword"
          type="password"
          required
          placeholder="Confirm New Password..."
        />
      </div>
      <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]  rounded p-3 md:w-[32%] md:mt-3">
        <div className="flex gap-4">
          <div className="bg-primary w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full text-white">
            <CiLock size={25} />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Password must contain:</h4>
           <div className="text-xs font-semibold ml-4 mt-1">
             <p className="flex items-center"><IoIosCheckmark className="text-xl text-success "/> At least 8 characters</p>

            <p className="flex items-center"><IoIosCheckmark className="text-xl text-success "/> One number</p>
            <p className="flex items-center"><IoIosCheckmark className="text-xl text-success "/> One upper case letter</p>
            <p className="flex items-center"><IoIosCheckmark className="text-xl text-success "/> One lower case letter</p>
            <p className="flex items-center"><IoIosCheckmark className="text-xl text-success "/> One number or special character</p>
           </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5 mb-3">
        <Button>Update Password</Button>
      </div>
    </div>
  );
};

export default ChangePassword;
