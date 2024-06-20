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
    },
    updateUserSuccess: (state, action) => {
      console.log('Update User Success Payload:', action.payload); // Affichez le payload reçu du backend

      state.user.firstName = action.payload.body.firstName;
      state.user.lastName = action.payload.body.lastName;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      console.log('Update User Failure Payload:', action.payload); // Affichez l'erreur reçue en cas d'échec de la mise à jour

      state.error = action.payload.error;
    },
  },
});

export const { loginSuccess, loginFailure, logout, updateUserSuccess, updateUserFailure } = authSlice.actions;
export default authSlice.reducer;
