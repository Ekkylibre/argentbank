import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginFailure, loginSuccess, logout as logoutAction, updateUserFailure, updateUserSuccess } from '../reducers/authReducer';

const API_URL = 'http://localhost:3001/api/v1';

// Asynchronous action for login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailure({ error: 'Invalid username or password' }));
        return rejectWithValue('Invalid username or password');
      }
    } catch (error) {
      dispatch(loginFailure({ error: 'An error occurred during login' }));
      return rejectWithValue('An error occurred during login');
    }
  }
);

// Asynchronous action for logout
export const logout = () => (dispatch) => {
  dispatch(logoutAction());
};

// Asynchronous action to update user
export const updateUser = ({ firstName, lastName }) => async (dispatch, getState) => {
  const { auth } = getState();
  const token = auth.token;

  if (!token) {
    dispatch(updateUserFailure({ error: 'No token found' }));
    return;
  }

  try {
    const response = await axios.put(`${API_URL}/user/profile`, {
      firstName,
      lastName,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      dispatch(updateUserSuccess(response.data.body));
    } else {
      dispatch(updateUserFailure({ error: 'Unable to update user information' }));
    }
  } catch (error) {
    if (error.response) {
      dispatch(updateUserFailure({ error: error.response.data.message }));
    } else {
      dispatch(updateUserFailure({ error: 'An error occurred during the update' }));
    }
  }
};
