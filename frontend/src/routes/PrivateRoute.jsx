import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { token, isAuthChecked } = useSelector(
    (state) => state.auth
  );
 
  
  if (!isAuthChecked) {
    return <h1>Loading...</h1>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }


  return <Outlet />;
};

export default PrivateRoute;