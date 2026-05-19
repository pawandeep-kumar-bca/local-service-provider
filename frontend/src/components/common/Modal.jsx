import { IoClose } from "react-icons/io5";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  children,
  onConfirm,
  showFooter = true,
  size = "md",
  rightBtnColor,
  rightBtnText,
  leftBtnColor
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
          pt-10 pb-2
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

      
          

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-all absolute top-2  right-2 cursor-pointer"
          >
            <IoClose className="text-2xl" />
          </button>
       

        {/* Body */}
          
        <div className="px-5 ">{children}</div>

        {/* Footer */}

        {showFooter && (
          <div className="flex justify-end gap-3 px-5 py-4 bg-white">
            <Button onClick={onClose} color={leftBtnColor}>
              Cancel
            </Button>

            <Button onClick={onConfirm} color={rightBtnColor}>{rightBtnText}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
