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
    <header className="flex justify-between bg-bg px-2  items-center h-18">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {renderSection(currentPage.left)}
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        {renderSection(currentPage.center)}
      </div>

      <div className="flex justify-end items-center gap-6">
        {renderSection(currentPage.right)}
      </div>
    </header>
  );
};

export default NavBar;
