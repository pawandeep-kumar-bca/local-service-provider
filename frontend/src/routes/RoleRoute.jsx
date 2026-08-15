import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const RoleRoute = ({ allowedRoles }) => {
  const { user, token, isAuthChecked } = useSelector((state) => state.auth);
 

  
  if (!isAuthChecked) {
    return <h1>Loading...</h1>;
  }

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  const isApprovedProvider =
    user.isProvider && user.providerStatus === "approved";


  const hasAccess = allowedRoles.some((allowedRole) => {
    if (allowedRole === "provider") {
      return isApprovedProvider;
    }

    return user.role === allowedRole;
  });


  if (!hasAccess) {
    if (allowedRoles.includes("provider") && user.isProvider) {
      if (user.providerStatus === "pending") {
        return <Navigate to="/provider/application-pending" replace />;
      }

      if (user.providerStatus === "rejected") {
        return <Navigate to="/provider/application-rejected" replace />;
      }
    }

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;
