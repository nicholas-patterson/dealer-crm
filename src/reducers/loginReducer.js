// LOGIN REDUCER FOR DEALER

const initialState = {
  isLogged: false,
  user: {},
  //token: null,
  error: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_START":
      return {
        ...state,
        isLogged: false
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: ""
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: action.payload
        // token: action.payload.token
      };

    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: action.payload.data.warning
      };

    case "LOGOUT_USER_START":
      return {
        ...state,
        isLogged: true
        //token: action.payload
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        isLogged: false,
        user: action.payload
        //token: localStorage.clear()
      };

    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: ""
      };

    case "UPDATE_EMAIL_START":
      return {
        ...state,
        isLogged: true
      };

    case "UPDATE_EMAIL_SUCCESS":
      return {
        ...state.user,
        isLogged: true,
        dealer_email: action.payload
      };

    case "UPDATE_EMAIL_FAILURE":
      return {
        ...state,
        isLogged: true,
        error: action.payload
      };

    case "UPDATE_PASSWORD_START":
      return {
        ...state,
        isLogged: true
      };

    case "UPDATE_PASSWORD_SUCCESS":
      return {
        ...state.user,
        isLogged: true,
        dealer_password: action.payload
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: ""
      };

    case "UPDATE_PASSWORD_FAILURE":
      return {
        ...state,
        isLogged: true,
        error: action.payload.data.error
      };

    default:
      return state;
  }
};
