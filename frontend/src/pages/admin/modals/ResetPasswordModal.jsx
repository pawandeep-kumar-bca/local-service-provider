import React from "react";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { IoClose } from "react-icons/io5";
const ResetPasswordModal = ({  onClose, onConfirm }) => {

  
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-5"
      onClick={onClose}
    >
      {/* Modal Box */}

      <div
        className={`
          w-full
         max-w-sm
          bg-white
          rounded-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.2)]
           p-5
          relative
          overflow-hidden
          animate-in
          fade-in
          zoom-in-95
          duration-200
          max-h-[90vh]
          overflow-y-auto
          relative
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-text">Reset Password</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <div>
          <Input label="New Password" type="password" id="newPassword" />
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
          />
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 bg-white mt-8">
          <Button onClick={onClose} color="white">
            Cancel
          </Button>

          <Button onClick={onConfirm} color="blue">
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
