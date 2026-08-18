// hooks/useAuth.js
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAddressToReverseGeocode,
  getMe,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  sendForgotPasswordEmail,
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
      console.log("Login Error:", error?.response?.data?.message);
    },
  });

  // ✅ LOGOUT
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log("Logout Error", err);
    },
  });

  // ✅ Send Forgot Password Email
  const sendForgotPasswordEmailMutation = useMutation({
    mutationFn: sendForgotPasswordEmail,

    onSuccess: (data) => {
      toast.success(data?.message || "Password reset link sent to your email");
    },

    onError: (err) => {
     
      toast.error(
        err?.response?.data?.message || "Failed to send password reset email",
      );

      console.error("Forgot password email error:", err);
    },
  });
// ✅ Reset Password
  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,

    onSuccess: (data) => {
      toast.success(data?.message || "Password reset successful");
    },

    onError: (err) => {
      console.log(err?.response);
      console.log(err?.response);
      console.log(err?.response?.data);
      
      toast.error(err?.response?.data?.message || "Failed to reset password");

      console.error("Reset password error:", err);
    },
  });
  return {
    registerMutation,
    loginMutation,
    logoutMutation,
    sendForgotPasswordEmailMutation,
    resetPasswordMutation,
  };
};
export const useMe = (token) => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!token,
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
