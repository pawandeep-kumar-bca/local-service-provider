import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const MyBookingsPage = () => {
  const [status, setStatus] = useState("all");
  const base =
    "border border-slate-300 shrink-0 whitespace-nowrap rounded-lg mb-2 px-5 py-2 cursor-pointer";
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

      <div className="relative">
        <div className="mb-3 overflow-hidden sticky top-21 bg-white z-40 pb-5 md:pb-0 pt-3 md:pt-0">
          <ul className="flex gap-3  font-semibold md:pt-3  overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
              key={tab}
                className={`${base} ${status === tab ? active : notActive}`}
                onClick={()=>setStatus(tab)}
              >
               {tab[0].toUpperCase() + tab.slice(1)}
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
