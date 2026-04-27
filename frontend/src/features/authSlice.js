import { createSlice } from "@reduxjs/toolkit";

// 🔥 safe parse (error avoid karne ke liye)
const getStoredAuth = () => {
  try {
    const data = localStorage.getItem("auth");
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error(err);
    
    return null;
  }
};

const savedAuth = getStoredAuth();

const initialState = {
  user: savedAuth?.user || null,
  token: savedAuth?.accessToken || null,
  isAuthChecked: true, // 🔥 ab default true (kyunki localStorage check ho chuka)
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ LOGIN
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isAuthChecked = true;
    },

    // ✅ LOGOUT
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthChecked = true;

      // 🔥 localStorage clear
      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;