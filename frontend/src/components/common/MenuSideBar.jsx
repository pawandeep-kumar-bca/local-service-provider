import { Link } from "react-router-dom";
import {
  userMenu,
  providerMenu,
  adminMenu,
  publicMenu,
} from "../data/menuData";
const MenuSideBar = ({ role }) => {
  const menu =
    role === "user"
      ? userMenu
      : role === "provider"
        ? providerMenu
        : role === "admin"
          ? adminMenu
          : publicMenu;
  return <div className="w-full md:w-[20%] h-screen bg-red-100 flex flex-col items-center pt-20 md:pt-2">
    <img src="/assets/logo.png" alt="logo" className="w-[7rem] hidden md:flex "/>
    <div className="w-full h-[1px] bg-muted md:flex hidden"></div>
    {menu.map((item,idx)=>(
        <div key={idx} className="w-full flex items-center  gap-3 md:px-4">
          <div className="hidden md:flex text-2xl ">{item.icon}</div>
          <Link to={item.path} className="text-xl font-semibold mb-2 md:text-lg">{item.name}</Link>
          </div>
    ))}
  </div>;
};

export default MenuSideBar;
