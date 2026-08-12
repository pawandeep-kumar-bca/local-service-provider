import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import Input from "../../components/common/Input";
import { FaLock } from "react-icons/fa";
import Button from "../../components/common/Button";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { useUser } from "../../hooks/useUser";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const isPasswordValid = {
    minLength: password.newPassword.length >= 8,
    uppercase: /[A-Z]/.test(password.newPassword),
    lowercase: /[a-z]/.test(password.newPassword),
    number: /[0-9]/.test(password.newPassword),
    specialChar: /[^A-Za-z0-9]/.test(password.newPassword),
  };
  const { changePasswordMutation } = useUser();
  const submitChangePassword = (e) => {
    e.preventDefault();
    changePasswordMutation.mutateAsync(password);
    setPassword({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  const handler = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="flex gap-4">
        <div className="md:w-[75%]">
          <p className="text-[12px]  md:text-[18px]  text-muted mt-1">
            Update your password to keep your account secure
          </p>
        </div>
      </div>
      <form onSubmit={submitChangePassword}>
        <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-6">
          <div className=" flex flex-col flex-1  md:shadow-[0_0_4px_rgba(0,0,0,0.2)] rounded-lg md:p-3">
            <Input
              label="Current Password"
              id="currentPassword"
              value={password.currentPassword}
              onChange={handler}
              type="password"
              required
              placeholder="Current Password..."
            />
            <Input
              label="New Password"
              id="newPassword"
              value={password.newPassword}
              onChange={handler}
              type="password"
              required
              placeholder="New Password..."
            />
            <Input
              label="Confirm New Password"
              id="confirmPassword"
              value={password.confirmPassword}
              onChange={handler}
              type="password"
              required
              placeholder="Confirm New Password..."
            />
          </div>
          <div className="flex-1 md:shadow-[0_0_4px_rgba(0,0,0,0.2)] rounded-lg md:p-3">
            <h4 className="font-semibold text-lg text-brownness">
              Password must contain:
            </h4>
            <div className=" text-sm md:text-lg font-semibold  gap-3 ml-6 mt-3">
              <p
                className={`flex items-center ${isPasswordValid.minLength ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordValid.minLength ? (
                  <IoIosCheckmark size={20} />
                ) : (
                  <IoIosClose size={26} />
                )}{" "}
                At least 8 characters
              </p>

              <p
                className={`flex items-center ${isPasswordValid.number ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordValid.number ? (
                  <IoIosCheckmark size={20} />
                ) : (
                  <IoIosClose size={26} />
                )}
                One number
              </p>
              <p
                className={`flex items-center ${isPasswordValid.uppercase ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordValid.uppercase ? (
                  <IoIosCheckmark size={20} />
                ) : (
                  <IoIosClose size={26} />
                )}
                One upper case letter
              </p>
              <p
                className={`flex items-center ${isPasswordValid.lowercase ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordValid.lowercase ? (
                  <IoIosCheckmark size={20} />
                ) : (
                  <IoIosClose size={26} />
                )}{" "}
                One lower case letter
              </p>
              <p
                className={`flex items-center ${isPasswordValid.specialChar ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordValid.specialChar ? (
                  <IoIosCheckmark size={20} />
                ) : (
                  <IoIosClose size={26} />
                )}
                One number or special character
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 mb-3">
          <Button className="md:w-auto w-full">Update Password</Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
