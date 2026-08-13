import { createSlice } from "@reduxjs/toolkit";

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
  user: null,
  token: savedAuth?.accessToken || null,
  isAuthChecked: false,
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
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      state.isAuthChecked = true;
    },
    // ✅ LOGOUT
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthChecked = true;

      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, updateUser, logout } = authSlice.actions;
export default authSlice.reducer;
