import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  onConfirm,
  showFooter = true,
  size = "md",
}) => {
  if (!isOpen) return null;

  // Modal Sizes

  const modalSizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-5"
      onClick={onClose}
    >
      {/* Modal Box */}

      <div
        className={`
          w-full
          ${modalSizes[size]}
          bg-white
          rounded-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          relative
          overflow-hidden
          animate-in
          fade-in
          zoom-in-95
          duration-200
          max-h-[90vh]
          overflow-y-auto
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-xl md:text-2xl font-semibold text-text">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Body */}

        <div className="p-5">{children}</div>

        {/* Footer */}

        {showFooter && (
          <div className="flex justify-end gap-3 border-t px-5 py-4 bg-gray-50">
            <Button onClick={onClose} color="danger">
              Cancel
            </Button>

            <Button onClick={onConfirm}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
