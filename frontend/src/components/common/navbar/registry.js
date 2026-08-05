import Location from "./actions/Location";
import Notification from "./actions/Notification";
import Profile from "./actions/Profile"; 
import NavbarBack from "./actions/NavbarBack";

export const navbarRegistry = {
    location: Location,
    notification: Notification,
    profile: Profile,
    back: NavbarBack,
};
