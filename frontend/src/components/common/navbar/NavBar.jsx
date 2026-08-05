import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { navbarRegistry } from "./registry";


import { navbarConfig } from "../../../configs/userNavbar";
import NavbarBack from "./actions/NavbarBack";

const NavBar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  

  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.auth);

  const role = user?.role;

  const currentPage = navbarConfig.find((item) => item.matcher(pathname));
  return (
    <>
      <header className="w-full bg-bg h-[5.3rem] flex items-center justify-between px-4">
        {/* LEFT */}

        <div className="flex items-center gap-3">
          {currentPage?.left?.map((item, index) => {
            if (item.component === "title") {
              return (
                <h1 key={index} className="text-xl font-semibold">
                  {currentPage.title}
                </h1>
              );
            }

            const Component = navbarRegistry[item.component];

            if (!Component) return null;

            return <Component key={index} {...item} />;
          })}
        </div>

        {/* CENTER */}

        <div className="flex-1">
          {currentPage?.center?.map((item, index) => {
            const Component = navbarRegistry[item.component];

            if (!Component) return null;

            return <Component key={index} {...item} />;
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {currentPage?.right?.map((item, index) => {
            const Component = navbarRegistry[item.component];

            if (!Component) return null;

            return <Component key={index} {...item} />;
          })}
        </div>
      </header>

      {/* Mobile Sidebar */}

      {openMenuBar && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <MenuSideBar role={role} onItemClick={() => setOpenMenuBar(false)} />
        </div>
      )}

      {/* Notification */}

     
    </>
  );
};

export default NavBar;
