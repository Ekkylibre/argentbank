import { createSlice } from '@reduxjs/toolkit';

// Initial state of the authentication slice
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  isEditing: false,
};

// Definition of the authentication slice using Redux Toolkit
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.body;
      state.token = action.payload.body.token;
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
      state.isEditing = false;
    },
    updateUserSuccess: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.error = null;
      state.isEditing = false;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload.error;
    },
    startEditing: (state) => {
      state.isEditing = true;
    },
    stopEditing: (state) => {
      state.isEditing = false;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  updateUserSuccess,
  updateUserFailure,
  startEditing,
  stopEditing,
} = authSlice.actions;
export default authSlice.reducer;
