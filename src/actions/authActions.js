import axios from 'axios';

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: { error: 'Invalid username or password' } });
      }
    } catch (error) {
      console.error('Error during login:', error);
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: 'An error occurred during login' } });
    }
  };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};
