
import { IoMdNotifications } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full bg-red-100 h-[5.3rem] flex items-center justify-between px-2 md:px-5 overflow-hidden ">

  {/* LOGO */}
  <img
    src="/assets/logo.png"
    alt="logo"
    className="w-[3rem] md:hidden"
  />

  {/* SEARCH */}
  <div className="flex items-center gap-2 border border-muted rounded-lg py-1 md:py-2 px-2 flex-1  mx-4 ">
    <IoSearch className="text-xl"/>
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
    <IoMenu  className="text-3xl cursor-pointer md:hidden"/>
  </div>

</div>
  );
};

export default NavBar;
