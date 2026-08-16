import { useLocation } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import CombinedPage from "../pages/auth/CombinedPage";

import useScreen from "../hooks/useScreen";

const AuthLayout = () => {
  const { isMobile } = useScreen();
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  const isForgotPassword = location.pathname === "/forgot-password";
  const isResetPassword = location.pathname === "/reset-password";

  // 📱 Mobile → separate pages
  if (isMobile) {
    if (isLogin) return <LoginPage />;

    if (isRegister) return <RegisterPage />;

    if (isForgotPassword) return <ForgotPasswordPage />;

    if (isResetPassword) return <ResetPasswordPage />;
  }

  // 💻 Desktop → Combined layout
  return <CombinedPage />;
};

export default AuthLayout;