import { NavLink } from "react-router-dom";
import {
  userMenu,
  providerMenu,
  adminMenu,
  publicMenu,
} from "../../utils/menuData";
import { IoClose } from "react-icons/io5";

const MenuSideBar = ({ role, onItemClick }) => {
  const roleMenuMap = {
    user: userMenu,
    provider: providerMenu,
    admin: adminMenu,
  };

  const menu = roleMenuMap[role] || publicMenu;

  return (
    <div className="w-full   min-h-screen bg-bg  relative">
      <div className="md:hidden flex justify-between items-center bg-gray-200 py-3 px-2">
        
         <button
          type="button"
          onClick={onItemClick}
          className="text-brownness  hover:bg-gray-100"
        >
          <IoClose size={26} />
        </button>
        <span className="text-lg text-brownness font-bold">Menu</span>
      </div>
      <div className="flex flex-col pt-3  px-4 gap-2">
      <div className="hidden md:flex gap-2 items-center mb-5">
        <img src="/assets/logo.png" alt="logo" className="w-[3rem]" />
       <div>
         <h1 className="text-lg font-bold text-brownness font-sans">Local Service</h1>
        <h1 className="text-lg font-bold text-brownness font-sans">Provider</h1>
       </div>
      </div>

      {menu.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          end
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center justify-start gap-3 p-2 rounded-lg transition ${
              isActive
                ? "md:text-primary font-bold text-brownness md:bg-blue-100"
                : "text-brownness md:hover:bg-gray-200"
            }`
          }
        >
          <div className="text-2xl">{item.icon}</div>
          <h2 className="md:text-sm text-lg font-semibold  block">{item.name}</h2>
        </NavLink>
      ))}
      </div>
    </div>
  );
};

export default MenuSideBar;
