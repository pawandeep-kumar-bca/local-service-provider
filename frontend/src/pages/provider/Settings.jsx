import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
 const base = `
  relative
  flex items-center text-gray-800 justify-between md:justify-center
  text-center
  text-lg font-medium
  transition-all duration-300
  pb-3
  min-w-[150px]

  after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:bottom-0
  after:h-[2px]
  after:w-0
  after:rounded-full
  after:transition-all
  after:duration-300
`;

const active = `
  text-blue-600
  after:w-[50px]
  after:bg-blue-600
`;

const notActive = `
  text-slate-600
  hover:text-blue-600
  hover:after:w-[60px]
  hover:after:bg-blue-600
`;
  return (
    <div>

      {/* Mobile Navigation */}
      <div className="flex flex-col gap-2 lg:hidden">
        <NavLink
          to="/provider/mobile/edit-profile"
          className={base}
        >
          Edit Profile <FaChevronRight size={20}/>
        </NavLink>

        <NavLink
          to="/provider/mobile/notification-settings"
          className={base}
        >
          Notification Settings <FaChevronRight size={20}/>
        </NavLink>

        <NavLink
          to="/provider/mobile/change-password"
          className={base}
        >
          Change Password <FaChevronRight size={20}/>
        </NavLink>
      </div>


      {/* Desktop Sidebar */}
      <div
  className="
    hidden lg:block
    sticky top-20
    bg-white h-[calc(100vh-105px)]
    border border-slate-200
    rounded-2xl
    px-6 py-4
    shadow-[0_3px_10px_rgba(0,0,0,0.06)]
  "
>
  <div className="flex items-center justify-center gap-8">
    
    <NavLink
      to="/provider/settings"
      end
      className={({ isActive }) =>
        `${base} ${isActive ? active : notActive}`
      }
    >
      Edit Profile
    </NavLink>

    <NavLink
      to="/provider/settings/notification-settings"
      className={({ isActive }) =>
        `${base} ${isActive ? active : notActive}`
      }
    >
      Notification Settings
    </NavLink>

    <NavLink
      to="/provider/settings/change-password"
      className={({ isActive }) =>
        `${base} ${isActive ? active : notActive}`
      }
    >
      Change Password
    </NavLink>
  </div>

  <div className="mt-6">
    <Outlet />
  </div>
</div>

      
      
    </div>
  );
};

export default Settings;