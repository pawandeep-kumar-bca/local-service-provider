import { NavLink } from "react-router-dom";
import {
  userMenu,
  providerMenu,
  adminMenu,
  publicMenu,
} from "../../utils/menuData";

const MenuSideBar = ({ role }) => {
  const menu =
    role === "user"
      ? userMenu
      : role === "provider"
      ? providerMenu
      : role === "admin"
      ? adminMenu
      : publicMenu;

  return (
    <div className="w-full h-full bg-bg flex  flex-col border-t border-r border-muted pt-10 px-4 gap-1 md:gap-2">
      
      {menu.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          className={({ isActive }) =>
            `flex md:justify-start justify-center  gap-3 p-2 rounded-lg transition ${
              isActive
                ? "text-primary w-full  font-bold bg-blue-100"
                : "text-text hover:bg-gray-200"
            }`
          }
        >
          <div className="text-xl hidden md:flex">{item.icon}</div>
          <h2 className="text-lg md:text-sm font-semibold">{item.name}</h2>
        </NavLink>
      ))}

    </div>
  );
};

export default MenuSideBar;