import { useLocation } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CombinedPage from "../pages/auth/CombinedPage";
import useScreen from "../hooks/useScreen";

const AuthLayout = () => {
  const { isMobile } = useScreen();
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  
  if (isMobile) {
    if (isLogin) return <LoginPage />;
    if (isRegister) return <RegisterPage />;
   
  }

 
  return <CombinedPage />;
};

export default AuthLayout;
