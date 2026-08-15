import React from "react";
import { IoIosWarning } from "react-icons/io";
import Modal from "./Modal";
import Button from "../Button";
const ActionReasonModal = ({
  open,
  close,
  Icon,
  title,
  text,
  reason,
  size,
  value,
  handlerBookingSubmit,
  rightBtnText,
  rightBtnColor,
  formData,
  setFormData,
}) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerBookingSubmit(value._id);
  };

  return (
    <Modal isOpen={open} onClose={close} size={size}>
      <div className="flex flex-col items-center text-center">
        {Icon}

        <h2 className="text-2xl text-text font-bold pt-6 mb-4">{title}</h2>
        <p className="text-muted font-semibold text-sm mb-6">{text}</p>
        <form onSubmit={handlerSubmit} className="w-full">
          <div className="flex flex-col gap-3 w-full mb-2">
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="reason"
                className="text-sm font-semibold text-text"
              >
                Reason for {title.split(" ")[0] }
                <span className="text-xs text-red-500 font-semibold">
                  {" "}
                  (required)
                </span>
              </label>
              <select
                name="reason"
                id="reason"
                value={formData.reason}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    reason: e.target.value,
                  }))
                }
                className="border border-muted rounded-lg py-2 text-black/80 font-semibold px-2 text-sm outline-0 transition-all duration-300 focus:ring focus:ring-blue-500 w-full"
              >
                {reason?.map((rea) => (
                  <option key={rea} value={rea}>
                    {rea}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="note" className="text-sm font-semibold text-text">
                Notes{" "}
                <span className="text-xs text-red-500 font-semibold">
                  (required)
                </span>
              </label>
              <textarea
                placeholder="Enter note here..."
                rows={4}
                maxLength={100}
                minLength={10}
                value={formData.notes || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }))
                }
                name="note"
                className="border border-muted rounded-lg py-1 px-2 text-sm w-full outline-0 transition-all text-black/80 font-semibold duration-300 focus:ring focus:ring-blue-500"
              />
              <p className="w-full text-right text-sm font-semibold">
                {formData.notes?.length || 0}/100
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3  py-3 bg-white">
            <Button onClick={close} color="white" size="md" fullWidth>
              Cancel
            </Button>

            <Button color={rightBtnColor} size="md" fullWidth>
              {rightBtnText}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ActionReasonModal;
