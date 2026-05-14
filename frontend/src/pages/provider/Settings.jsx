

import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
 
  return (
    <div>
        <div className="flex">
           <div className="flex flex-col">
             <NavLink to='/provider/settings'>Edit Profile</NavLink>
             <NavLink to='/provider/settings/notification-settings'>Notification Settings</NavLink>
             <NavLink to='/provider/settings/change-password'>Change Password</NavLink>
           </div>
           <div className="flex-1">
            <Outlet/>
           </div>
        </div>

      

     
    </div>
  );
};

export default Settings;
