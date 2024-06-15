const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Connexion réussie pour l\'utilisateur:', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Assurez-vous que action.payload contient toutes les informations de l'utilisateur nécessaires
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
