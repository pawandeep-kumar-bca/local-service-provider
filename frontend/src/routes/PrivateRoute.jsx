import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth);

  // agar token nahi hai → login bhej
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // agar token hai → child routes show karo
  return <Outlet />;
};

export default PrivateRoute;