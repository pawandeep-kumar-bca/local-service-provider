// hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/authService";
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

  return { registerMutation };
};