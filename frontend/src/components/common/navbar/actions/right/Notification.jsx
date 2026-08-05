import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import NotificationDrawer from "../../../notification/NotificationDrawer";
const Notification = () => {
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <>
      <div onClick={() => setOpenNotification((prev) => !prev)}>
        <IoIosNotifications />
      </div>
      {openNotification && (
        <NotificationDrawer setOpenNotification={setOpenNotification} />
      )}
    </>
  );
};

export default Notification;
