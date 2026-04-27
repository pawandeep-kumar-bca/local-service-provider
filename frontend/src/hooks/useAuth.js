// hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useDispatch } from "react-redux";
export const useAuth = () => {
  const navigate = useNavigate();
 const dispatch = useDispatch()
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      // redirect
      navigate("/login");
    },
    onError: (error) => {
      console.log("Register Error:", error);
    },
  });
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setCredentials(data))
      localStorage.setItem('auth',JSON.stringify(data))
      navigate("/user");

    },
    onError: (error) => {
      console.log("Login Error:", error);
    },
  });
  return { registerMutation, loginMutation };
};
