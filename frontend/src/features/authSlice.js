import { createSlice } from "@reduxjs/toolkit";
const savedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  user: savedAuth?.user || null,
  token: savedAuth?.accessToken || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login ke baad data stroe
    setCredentials: (state, action) => {
      state.user = action.payload.user; //role
      state.token = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
