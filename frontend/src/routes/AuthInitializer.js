import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMe } from "../hooks/useAuth";
import { updateUser } from "../features/authSlice";


const AuthInitializer = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const { data, isSuccess } = useMe();

  useEffect(() => {
    if (token && isSuccess && data?.user) {
      dispatch(updateUser(data.user));
    }
  }, [token, isSuccess, data, dispatch]);

  return null;
};
export default AuthInitializer;