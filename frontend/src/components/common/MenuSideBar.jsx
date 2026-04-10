import { Link } from "react-router-dom";
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
    <div className="w-full md:w-[20%] h-screen bg-green-100 flex flex-col items-center absolute pt-20 top-0  md:pt-2">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="w-[3rem] hidden md:block"
      />

      <div className="w-full h-[1px] bg-muted md:flex hidden"></div>
      {menu.map((item, idx) => (
        <div key={idx} className="w-full flex items-center justify-center gap-5 md:px-4">
          <div className="hidden md:flex text-2xl ">{item.icon}</div>
          <Link
            to={item.path}
            className="text-xl font-semibold mb-2 md:text-lg"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuSideBar;
