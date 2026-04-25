import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import WelcomePage from "../public/WelcomePage";

import { Link, useLocation } from "react-router-dom";

const CombinedPage = () => {
  const location = useLocation();

  // 🔥 URL se decide hoga
  const isLogin = location.pathname === "/login";
  return (
    <div className="flex w-full md:w-[95%] m-auto flex items-center justify-center h-screen py-15 overflow-hidden">
      {/* LEFT SIDE */}
      <div className="md:w-2/3 w-full h-full items-center justify-center flex">
        <WelcomePage />
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/3 relative hidden h-full md:flex flex-col items-center justify-center p-10 bg-white rounded-lg m-3 shadow-2xl">

        {/* Tabs */}
        <div className="flex justify-around w-full">
          
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
              !isLogin
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-400"
            }`}
          >
            Register
          </Link>

        </div>

        {/* Content */}
        {isLogin ? <LoginPage /> : <RegisterPage />}
      </div>
    </div>
  );
};

export default CombinedPage;
