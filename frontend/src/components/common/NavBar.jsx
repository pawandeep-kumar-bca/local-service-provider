import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";
import MenuSideBar from "./MenuSideBar";
import { useState } from "react";

const NavBar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  return (
    <>
      <div className="w-full bg-bg h-[5.3rem] flex items-center">

        {/* LEFT (same as sidebar width) */}
        

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-between px-4">

          {/* Mobile Profile */}
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-10 md:hidden rounded-full"
          />

          {/* Search */}
          <div className="flex items-center gap-2 border border-muted rounded-lg py-1 px-2 flex-1 md:ml-7 md:mr-4 mx-4">
            <IoSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="text-lg w-full outline-none"
            />
          </div>

          {/* Right Icons */}
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
              className="hidden md:flex w-12 h-12 rounded-full"
            />

            {/* Hamburger */}
            {openMenuBar ? (
              <IoMdClose
                className="text-3xl cursor-pointer z-60 md:hidden"
                onClick={() => setOpenMenuBar(false)}
              />
            ) : (
              <IoMenu
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => setOpenMenuBar(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {openMenuBar && (
        <>
          

          <div className="fixed top-0 flex justify-center left-0 w-[100%] h-full bg-white z-50 shadow-lg md:hidden">
            <MenuSideBar role="provider" />
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;