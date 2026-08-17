import { Navigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";
import WelcomePage from "../public/WelcomePage";

const HomeRedirect = () => {
  const { isMobile } = useScreen();

  if (isMobile) {
    return <WelcomePage />;
  }

  return <Navigate to="/login" replace />;
};

export default HomeRedirect;
