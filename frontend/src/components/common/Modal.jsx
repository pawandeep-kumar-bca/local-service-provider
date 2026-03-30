import { IoClose } from "react-icons/io5";
import Button from "./Button";
const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={onClose} // overlay click close
    >
      {/* Modal Box */}
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-lg relative p-5"
        onClick={(e) => e.stopPropagation()} // prevent close on box click
      >
        {/* Close Button */}
        <IoClose
          onClick={onClose}
          className="absolute right-4 top-4 text-xl cursor-pointer"
        />

        {/* Header */}
        <h2 className="text-lg font-semibold mb-3">{title}</h2>

        {/* Body */}
        <div className="text-sm text-gray-600 mb-4">{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <Button onClick={onClose} color="danger">
            Cancel
          </Button>

          <Button onClick={onConfirm}>Yes</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
