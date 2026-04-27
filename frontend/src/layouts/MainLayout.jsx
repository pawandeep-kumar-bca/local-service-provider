import { Outlet } from "react-router-dom";
import Navbar from "../components/common/NavBar";
import MenuSideBar from "../components/common/MenuSideBar";
import UserHeroLayout from "./UserHeroLayout";
import { useSelector } from "react-redux";

const MainLayout = () => {
 const {user} = useSelector((state)=>state.auth)
 const role = user?.role;
  return (
    <div className="md:p-3 px-2 py-5">
      {/* Sidebar */}
      <div className="w-64 hidden md:flex fixed left-0 top-0 bottom-0">
        <MenuSideBar role={role}/>
      </div>

      {/* Right Side */}
      <div className="md:ml-64 flex flex-col">
        {/* Navbar */}
        <div className="fixed top-0 md:left-64 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Content */}
        <div className="pt-20">
          {/* 🔥 Yaha route ka content render hoga */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
