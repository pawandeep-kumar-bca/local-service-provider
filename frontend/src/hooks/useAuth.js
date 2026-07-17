// hooks/useAuth.js
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMe, loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ REGISTER
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.log("Register Error:", error);
    },
  });

  // ✅ LOGIN
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // 🔥 clean data store karo (sirf required fields)
      const authData = {
        accessToken: data.accessToken,
        user: data.user,
      };

      // ✅ Redux update
      dispatch(setCredentials(authData));

      // ✅ LocalStorage persist
      localStorage.setItem("auth", JSON.stringify(authData));

      // ✅ redirect
      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (data.user.role === "provider") {
        navigate("/provider/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    },
    onError: (error) => {
      console.log("Login Error:", error);
    },
  });

  return { registerMutation, loginMutation };
};
export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  
  });
};