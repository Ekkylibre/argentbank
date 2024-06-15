// authReducer.js

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Connexion réussie pour l\'utilisateur:', action.payload.firstName);
      return {
        ...state,
        isAuthenticated: true,
        user: { firstName: action.payload.firstName },
        error: null,
      };
    case 'LOGIN_FAILURE':
      console.log('Échec de la connexion:', action.payload.error);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
