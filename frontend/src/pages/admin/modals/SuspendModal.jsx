import React from "react";
import { IoIosWarning } from "react-icons/io";
import Modal from "../../../components/common/Modal";

const SuspendModal = ({open,close}) => {
  return (
    <Modal
      isOpen={open}
      onClose={close}
      title="Delete User"
      showFooter
      size="sm"
      children={
        <div className="flex flex-col items-center text-center">
          <div className="text-yellow-500 bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <IoIosWarning size={30} />
          </div>
          <h2 className="text-xl text-text font-bold mb-4">Suspend User</h2>
          <p className="text-muted font-semibold text-sm mb-6">
            Are you sure you want suspend this user? User will not be able to
            login or access the system.
          </p>

          <div className="flex flex-col gap-3 w-full mb-2">
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="reason"
                className="text-sm font-semibold text-text"
              >
                Reason
              </label>
              <select
                name="reason"
                id="reason"
                className="border border-muted rounded-lg py-2 text-black/80 font-semibold px-2 text-sm outline-0 transition-all duration-300 focus:ring focus:ring-blue-500 w-full"
              >
                <option value="Suspicious Activity">Suspicious Activity</option>
                <option value="Fake Booking Attempts">
                  Fake Booking Attempts
                </option>
                <option value="Fake Reviews or Ratings">
                  Fake Reviews or Ratings
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="note" className="text-sm font-semibold text-text">
                Note (Optional)
              </label>
              <textarea
              placeholder="Enter note here..."
                rows={2}
                name="note"
                className="border border-muted rounded-lg py-1 px-2 text-sm w-full outline-0 transition-all text-black/80 font-semibold duration-300 focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      }
      rightBtnText="Suspend User"
      rightBtnColor="yellow"
      leftBtnColor="white"
    />
  );
};

export default SuspendModal;
