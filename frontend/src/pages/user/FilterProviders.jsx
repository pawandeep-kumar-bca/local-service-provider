import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const FilterProviders = ({ url }) => {
  const base =
    "whitespace-nowrap flex gap-2 items-center border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  return (
    <div className="mb-5 sticky top-20 bg-white z-40 pb-5 md:pb-1 pt-3 md:pt-1 px-2 relative">

      <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.10)] flex items-center justify-center rounded-full absolute -left-3 top-5 cursor-pointer">
        <MdKeyboardArrowLeft />
        
      </div>
      <ul className="mt-3 flex gap-4 overflow-x-auto scrollbar-hide">
        <NavLink
          to={`/${url}`}
          end
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🏠</div> All
        </NavLink>
        <NavLink
          to={`/${url}/home-repair`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🔨</div> Home Repair
        </NavLink>
        <NavLink
          to={`/${url}/cleaning`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🧹</div> Cleaning
        </NavLink>
        <NavLink
          to={`/${url}/electrical`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">⚡</div> Electrical
        </NavLink>
        <NavLink
          to={`/${url}/plumbing`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
        <div className="text-xl">🚰</div>  Plumbing
        </NavLink>
        <NavLink
          to={`/${url}/appliance`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🛠️</div> Appliance
        </NavLink>
        <NavLink
          to={`/${url}/home-decor`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🛋️</div> Home Decor
        </NavLink>
        <NavLink
          to={`/${url}/carpenter`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🪚</div> Carpenter
        </NavLink>
        <NavLink
          to={`/${url}/ac-service`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">❄️</div> AC Service
        </NavLink>
        <NavLink
          to={`/${url}/pest-control`}
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
         <div className="text-xl">🐞</div> Pest Control
        </NavLink>
      </ul>
      <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.10)] flex items-center justify-center rounded-full absolute -right-3 top-5 cursor-pointer">
        <MdKeyboardArrowRight size={20}/>
      </div>
    </div>
  );
};

export default FilterProviders;
