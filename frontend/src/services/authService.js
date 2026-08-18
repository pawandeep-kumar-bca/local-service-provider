
import api from "./api";

export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data) =>{
  const response = await api.post('/auth/login',data)
  return response.data
}
export const logout = async ()=>{
  const response =await api.post('/auth/logout')
  return response.data
}
export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
export const getAddressToReverseGeocode= async (payload)=>{
  const response= await api.post('/users/reverse-geocode',payload)
  return response.data
}
export const sendForgotPasswordEmail = async (payload)=>{
  const response = await api.post('/auth/forgot-password',payload)
  return response.data
}

export const resetPassword = async ({ token, password, confirmPassword }) => {
  const response = await api.post(
    `/auth/reset-password/${token}`,
    {
      password,
      confirmPassword,
    }
  );

  return response.data;
};