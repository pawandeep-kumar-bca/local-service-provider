import React from 'react'
import { NavLink } from 'react-router-dom';

const FilterProviders = ({url}) => {
    const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  return (
     <div className="mb-5 sticky top-20 bg-white z-40 pb-5 md:pb-1 pt-3 md:pt-1 px-2">
        <ul className="mt-3 flex gap-4 overflow-x-auto scrollbar-hide">
          <NavLink
            to={`/${url}/home-repair`}
            end
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            All
          </NavLink>
          <NavLink
            to="/user/our-services/home-repair"
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Home Repair
          </NavLink>
          <NavLink
            to={`/${url}/cleaning`}
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Cleaning
          </NavLink>
          <NavLink
            to={`/${url}/electrical`}
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Electrical
          </NavLink>
          <NavLink
            to={`/${url}/plumbing`}
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Plumbing
          </NavLink>
          <NavLink
            to={`/${url}/appliance`}
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Appliance
          </NavLink>
          <NavLink
            to={`/${url}/home-decor`}
            className={({ isActive }) =>
              `${base} ${isActive ? `${active}` : `${notActive}`}`
            }
          >
            Home Decor
          </NavLink>
        </ul>
      </div>
  )
}

export default FilterProviders