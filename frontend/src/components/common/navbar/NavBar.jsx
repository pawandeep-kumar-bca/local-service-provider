import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { navbarConfig } from "./config/userNavbar";
import { navbarRegistry } from "./registry";

import MenuSideBar from "../MenuSideBar";

const defaultPage = {
  title: "",
  left: [],
  center: [],
  right: [],
};

const NavBar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);

  const role = user?.role;

  const currentPage =
    navbarConfig.find((item) => item.matcher(pathname)) || defaultPage;
  
   
  const renderSection = (items = []) =>
    items.map((item, index) => {
      const Component = navbarRegistry[item.component];

      if (!Component) return null;

      return (
        <Component
          key={`${item.component}-${index}`}
          {...item}
          title={currentPage.title}
          role={role}
          openMenuBar={openMenuBar}
          setOpenMenuBar={setOpenMenuBar}
        />
      );
    });
// ===============================
//This is called Composition Pattern (Eg:left,center,right)
// ===============================
  return (
    <>
      <header className="w-full h-[5.3rem] bg-bg flex items-center justify-between px-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-fit">
          {renderSection(currentPage.left)}
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center px-6">
          {renderSection(currentPage.center)}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 min-w-fit">
          {renderSection(currentPage.right)}
        </div>

      </header>

      {openMenuBar && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <MenuSideBar
            role={role}
            onItemClick={() => setOpenMenuBar(false)}
          />
        </div>
      )}
    </>
  );
};

export default NavBar;