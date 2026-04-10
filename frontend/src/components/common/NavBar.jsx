import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";
import MenuSideBar from "./MenuSideBar";
import { useState } from "react";

const NavBar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  const menuBar = () => {
    if (!openMenuBar) {
      setOpenMenuBar(true);
    } else {
      setOpenMenuBar(false);
    }
  };
  return (
    <>
      <div className="w-full shadow-[0_0_15px_rgba(0,0,0,0.45)] px-3 h-[5.3rem] flex items-center justify-between  overflow-hidden ">
        
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-12 md:hidden rounded-full object-cover cursor-pointer"
          />
        {/* SEARCH */}
        <div className="flex items-center gap-2 border border-muted rounded-lg py-1 md:py-2 px-2 flex-1  mx-4 ">
          <IoSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm w-full outline-none "
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <IoMdNotifications className="text-xl md:text-2xl" />
            <div className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full px-1 text-[10px]">
              0
            </div>
          </div>

          <img
            src="/assets/profile.png"
            alt="profile"
            className="hidden md:flex md:w-14 md:h-14 rounded-full object-cover cursor-pointer"
          />
          {openMenuBar ? (
            <IoMdClose
              className="text-4xl z-10 mr-4 mt-4 cursor-pointer md:hidden"
              onClick={menuBar}
            />
          ) : (
            <IoMenu
              className="text-3xl cursor-pointer md:hidden"
              onClick={menuBar}
            />
          )}
        </div>
      </div>
      {openMenuBar && <MenuSideBar />}
      
    </>
  );
};

export default NavBar;
