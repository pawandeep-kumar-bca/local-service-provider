

// ===============================
//This is called Registry Pattern
// ===============================
import Location from "./actions/right/Location";
import Notification from "./actions/right/Notification";
import Profile from "./actions/right/Profile";
import NavbarBack from "./actions/left/NavbarBack";
import NavBarTitle from "./actions/left/NavBarTitle";
import MenuSidebar from "./actions/right/MenuSidebar";
export const navbarRegistry = {
  location: Location,
  notification: Notification,
  profile: Profile,
  back: NavbarBack,
  title:NavBarTitle,
  menu:MenuSidebar
};
