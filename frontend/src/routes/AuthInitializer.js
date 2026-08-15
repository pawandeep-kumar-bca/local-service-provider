import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMe } from "../hooks/useAuth";
import { logout, updateUser } from "../features/authSlice";

const AuthInitializer = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const {
    data,
    isSuccess,
    isError,
    
  } = useMe();

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      return;
    }

    if (isSuccess && data?.user) {
      dispatch(updateUser(data.user));
    }

    if (isError) {
      dispatch(logout());
    }
  }, [token, isSuccess, isError, data, dispatch]);

  return null;
};

export default AuthInitializer;