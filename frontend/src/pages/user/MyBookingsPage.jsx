import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MyBookingsPage = () => {
  const [status, setStatus] = useState("all");
  const base = "border mb-2 px-5 py-2 cursor-pointer  rounded-xl ";
  const active = "bg-primary text-bg";
  const notActive = "bg-bg text-text";
  const tabs = [
    "all",
    "upcoming",
    "pending",
    "accepted",
    "in progress",
    "completed",
    "cancelled",
    "rejected",
  ];
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold ">My Bookings</h1>

      <div className="relative">
        <div className="mb-5 overflow-hidden sticky top-21 bg-white z-40 pb-5 md:pb-0 pt-3 md:pt-0">
          <ul className="flex gap-3  font-semibold md:p-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
              key={tab}
                className={`${base} ${status === tab ? active : notActive}`}
                onClick={()=>setStatus(tab)}
              >
                {tab.split("")[0].toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </ul>
        </div>

        <Outlet context={status}/>
      </div>
    </div>
  );
};

export default MyBookingsPage;
