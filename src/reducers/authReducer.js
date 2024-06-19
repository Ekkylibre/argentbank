import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.body;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.user.firstName = action.payload.body.firstName;
      state.user.lastName = action.payload.body.lastName;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { loginSuccess, loginFailure, logout, updateUserSuccess, updateUserFailure } = authSlice.actions;
export default authSlice.reducer;
