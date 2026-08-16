import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";
import WelcomePage from "../public/WelcomePage";

import { Link, useLocation } from "react-router-dom";

const CombinedPage = () => {
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  const isForgotPassword = location.pathname === "/forgot-password";
  const isResetPassword = location.pathname === "/reset-password";

  const showTabs = isLogin || isRegister;

  const renderAuthPage = () => {
    if (isLogin) return <LoginPage />;
    if (isRegister) return <RegisterPage />;
    if (isForgotPassword) return <ForgotPasswordPage />;
    if (isResetPassword) return <ResetPasswordPage />;

    return <LoginPage />;
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className="
          w-full
          
          h-full
          flex
          items-center
          gap-4
          py-6
        "
      >
        {/* ================= LEFT ================= */}
        <div
          className="
            hidden
            md:flex
            md:w-2/3
            h-[calc(100vh-3rem)]
            items-center
            justify-center
            overflow-hidden
          "
        >
          <div className="w-full h-full flex items-center justify-center">
            <WelcomePage />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
    w-full
    md:w-1/3
    md:h-[600px]
    bg-white
    rounded-2xl
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    p-8
    lg:p-10
    flex
    flex-col
    justify-start
    overflow-y-auto
  "
        >
          {/* Login / Register Tabs */}
          {showTabs && (
            <div className="flex justify-around w-full mb-8 shrink-0">
              <Link
                to="/login"
                className={`pb-2 font-semibold ${
                  isLogin
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-400"
                }`}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={`pb-2 font-semibold ${
                  isRegister
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-400"
                }`}
              >
                Register
              </Link>
            </div>
          )}

          {/* Auth Content */}
          <div className="w-full">{renderAuthPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;
