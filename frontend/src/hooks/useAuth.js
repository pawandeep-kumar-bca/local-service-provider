// hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

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
    onSuccess: () => {
      navigate("/user");
    },
    onError: (error) => {
      console.log("Login Error:", error);
    },
  });
  return { registerMutation, loginMutation };
};
