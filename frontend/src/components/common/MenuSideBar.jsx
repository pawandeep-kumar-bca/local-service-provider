import { NavLink } from "react-router-dom";
import {
  userMenu,
  providerMenu,
  adminMenu,
  publicMenu,
} from "../../utils/menuData";

const MenuSideBar = ({ role ,onItemClick}) => {
  const roleMenuMap = {
    user: userMenu,
    provider: providerMenu,
    admin: adminMenu,
  };

  const menu = roleMenuMap[role] || publicMenu;

  

  return (
    <div className="w-full h-full bg-bg flex flex-col md:pt-3 pt-15 px-4 gap-2">

      <div className="hidden md:flex items-center justify-center mb-5">
        <img src="/assets/logo.png" alt="logo" className="w-[3rem]" />
      </div>

      {menu.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          end
          onClick={onItemClick}
          className={({ isActive }) =>
            `flex items-center md:justify-start justify-center gap-3 p-2 rounded-lg transition ${
              isActive
                ? "text-primary font-bold bg-blue-100"
                : "text-text hover:bg-gray-200"
            }`
          }
        >
          <div className="text-xl hidden md:block">{item.icon}</div>
          <h2 className="text-sm font-semibold  block">
            {item.name}
          </h2>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuSideBar;