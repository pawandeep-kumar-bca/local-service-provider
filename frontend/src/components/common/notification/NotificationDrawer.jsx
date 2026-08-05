import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import NotificationFilter from "./NotificationFilter";
import NotificationList from "./NotificationList";

const NotificationDrawer = ({ setOpenNotification }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div
      className="
      w-full
      h-screen
      md:max-w-md
      md:max-h-[82vh]
      md:h-auto
      md:overflow-y-auto
      md:fixed
      md:right-8
      md:top-20
      md:rounded-2xl
      bg-white
      z-50
      border border-gray-100
      md:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
    "
    >
      <button
        onClick={() => setOpenNotification(false)}
        className="absolute right-3 top-3 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
      >
        <IoCloseOutline size={22} />
      </button>

      <NotificationFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="border-t" />

      <NotificationList activeFilter={activeFilter} />
    </div>
  );
};

export default NotificationDrawer;