import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import MenuSideBar from '../../../MenuSideBar'
const MenuSidebar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const role = user?.role;
  return (
    <>
      <div className="block md:hidden" onClick={() => setOpenMenuBar(true)}>
        <IoMenu size={26}/>
      </div>

      {openMenuBar && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <MenuSideBar role={role} onItemClick={() => setOpenMenuBar(false)} />
        </div>
      )}
    </>
  );
};

export default MenuSidebar;
