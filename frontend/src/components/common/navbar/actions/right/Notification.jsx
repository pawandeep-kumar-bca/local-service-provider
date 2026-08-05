import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import NotificationDrawer from "../../../notification/NotificationDrawer";
const Notification = () => {
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenNotification((prev) => !prev)}
        className="relative cursor-pointer "
      >
        <IoIosNotifications className="text-2xl " />
        <span className="absolute -top-2 -right-2 bg-blue-500 rounded-full min-w-[18px] h-[18px]  flex items-center justify-center text-white text-xs font-bold">
          10
        </span>
      </div>
      {openNotification && (
        <NotificationDrawer setOpenNotification={setOpenNotification} />
      )}
    </>
  );
};

export default Notification;
