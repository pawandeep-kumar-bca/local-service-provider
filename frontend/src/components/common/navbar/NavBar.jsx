import { useLocation } from "react-router-dom";

import { userNavbarConfig } from "./config/userNavbar";
import { navbarRegistry } from "./registry";

const defaultPage = {
  title: "",
  left: [],
  center: [],
  right: [],
};

const NavBar = () => {
  const { pathname } = useLocation();

  const currentPage =
    userNavbarConfig.find((item) => item.matcher(pathname)) || defaultPage;

  const getVisibilityClass = (showOn) => {
    if (!showOn) return "";

    if (showOn.includes("mobile") && showOn.includes("desktop")) {
      return "";
    }

    if (showOn.includes("mobile")) {
      return "md:hidden";
    }

    if (showOn.includes("desktop")) {
      return "hidden md:flex";
    }

    return "";
  };
  const renderSection = (items = []) =>
    items.map((item, index) => {
      const Component = navbarRegistry[item.component];

      if (!Component) return null;

      return (
        <Component
          key={index}
          {...item}
          title={currentPage.title}
          className={getVisibilityClass(item.showOn)}
        />
      );
    });
  // ===============================
  //This is called Composition Pattern (Eg:left,center,right)
  // ===============================
  return (
    <header className="h-[5.3rem] flex items-center bg-bg px-3">
      {/* LEFT */}
      <div className="flex flex-1 items-center gap-3">
        {renderSection(currentPage.left)}
      </div>

      {/* CENTER */}
      <div className="flex flex-1 justify-center">
        {renderSection(currentPage.center)}
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 justify-end items-center gap-4">
        {renderSection(currentPage.right)}
      </div>
    </header>
  );
};

export default NavBar;
