import { useLocation } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CombinedPage from "../pages/auth/CombinedPage";
import useScreen from "../hooks/useScreen";

const AuthLayout = () => {
  const { isMobile } = useScreen();
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  // 📱 Mobile → separate pages
  if (isMobile) {
    return isLogin ? <LoginPage /> : <RegisterPage />;
  }

  // 💻 Desktop → combined UI
  return <CombinedPage />;
};

export default AuthLayout;