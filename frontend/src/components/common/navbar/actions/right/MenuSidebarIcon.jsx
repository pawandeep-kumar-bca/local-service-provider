import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import MenuSideBar from "../../../MenuSideBar";

const MenuSidebarIcon = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const role = user?.role;

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="block md:hidden"
        onClick={() => setOpenMenuBar(true)}
      >
        <IoMenu size={26} />
      </button>

      {openMenuBar && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenMenuBar(false)}
          />

          {/* Sidebar */}
          <div
            className="
        absolute
        right-0
        top-0
        h-full
        w-[80%]
        max-w-sm
        bg-white
        shadow-2xl
        overflow-y-auto
        scrollbar-hide
      "
          >
            {/* Close */}

            <MenuSideBar
              role={role}
              onItemClick={() => setOpenMenuBar(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuSidebarIcon;
