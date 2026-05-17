
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

const ActionDropdown = ({ items = [] }) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-10 h-10
          rounded-xl
          border border-slate-300
          flex items-center justify-center
          text-muted
          hover:bg-slate-100
          transition-all duration-300
          cursor-pointer
        "
      >
        <BsThreeDotsVertical size={18} />
      </button>

      {open && (
        <div
          className="
            absolute
            top-12
            right-0
            z-[999]
            min-w-[220px]
            bg-white
            border border-slate-200
            rounded-2xl
            p-2
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          "
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-3
                py-2
                rounded-xl
                transition-all
                duration-300
                cursor-pointer

                ${
                  item.variant === "danger"
                    ? "hover:bg-red-50 text-red-500"
                    : item.variant === "warning"
                    ? "hover:bg-yellow-50 text-yellow-500"
                    : item.variant === "primary"
                    ? "hover:bg-blue-50 text-blue-500"
                    : "hover:bg-slate-100"
                }
              `}
            >
              {item.icon}

              <p className="text-sm font-medium">
                {item.label}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;