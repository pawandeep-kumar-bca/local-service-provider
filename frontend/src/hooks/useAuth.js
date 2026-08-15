// hooks/useAuth.js
import { useMutation, useQuery} from "@tanstack/react-query";
import {
  getAddressToReverseGeocode,
  getMe,
  loginUser,
  logout,
  registerUser,
} from "../services/authService";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
      const authData = {
        accessToken: data.accessToken,
        user: data.user,
      };

      dispatch(setCredentials(authData));

      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: data.accessToken,
        }),
      );

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (
        data.user.isProvider &&
        data.user.providerStatus === "approved"
      ) {
        navigate("/provider/dashboard");
      } else if (
        data.user.isProvider &&
        data.user.providerStatus === "pending"
      ) {
        navigate("/provider/application-pending");
      } else if (
        data.user.isProvider &&
        data.user.providerStatus === "rejected"
      ) {
        navigate("/provider/application-rejected");
      } else {
        navigate("/user/dashboard");
      }
    },
    onError: (error) => {
      console.log("Login Error:", error);
    },
  });

  // ✅ LOGOUT
  const logoutMutation = useMutation({
    mutationFn:logout,
    onSuccess:(data)=>{
      toast.success(data?.message)
    },
    onError:(err)=>{
      toast.error(err?.response?.data?.message)
      console.log("Logout Error",err);
      
    }
  })


  return { registerMutation, loginMutation ,logoutMutation};
};
export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });
};

export const useAddressToReverseGeocode = () => {

  const addressToReverseGeocodeMutation = useMutation({
    mutationFn: getAddressToReverseGeocode,
    onError: (err) => {
      console.error("get Address To Reverse Geocode Error:", err);
    },
  });
  return { addressToReverseGeocodeMutation };
};
