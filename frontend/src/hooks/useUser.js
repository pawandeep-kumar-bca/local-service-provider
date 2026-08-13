import { useMutation } from "@tanstack/react-query";
import { changePassword, updateProfile } from "../services/userService";
import { toast } from "react-toastify";

export const useUser = () => {
  const changePasswordMutation = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      console.log(err.response?.data);
    },
  });
  const updateProfileMutation = useMutation({
    mutationFn:updateProfile,
    onSuccess:(data)=>{
      toast.success(data?.message)
    },
    onError:(err)=>{
      toast.error(err?.response?.data?.message)
    }
  })
  return { changePasswordMutation,updateProfileMutation };
};
