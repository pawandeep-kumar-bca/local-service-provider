// hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
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
      navigate("/user");
    },
    onError: (error) => {
      console.log("Login Error:", error);
    },
  });

  return { registerMutation, loginMutation };
};