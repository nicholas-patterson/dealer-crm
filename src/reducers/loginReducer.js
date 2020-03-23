// LOGIN REDUCER FOR DEALER

const initialState = {
  isLogged: false,
  user: {}, // change to object if it gives problems
  error: "",
  logout_message: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_START":
      return {
        ...state,
        isLogged: false,
        error: ""
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: action.payload
      };

    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: action.payload.data.warning
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: ""
      };

    case "LOGOUT_USER_START":
      return {
        ...state,
        isLogged: true,
        error: ""
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        isLogged: false,
        logout_message: action.payload
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
        isLogged: true,
        error: ""
      };

    case "UPDATE_EMAIL_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: {
          ...state.user,
          dealer_email: action.payload
        }
      };

    case "UPDATE_EMAIL_FAILURE":
      return {
        ...state,
        isLogged: true,
        error: action.payload.data.warning
      };

    case "UPDATE_USERNAME_START":
      return {
        ...state,
        isLogged: true,
        error: ""
      };

    case "UPDATE_USERNAME_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: {
          ...state.user,
          dealer_username: action.payload
        }
      };

    case "UPDATE_USERNAME_FAILURE":
      return {
        ...state,
        isLogged: true,
        error: action.payload.data.error
      };

    case "UPDATE_PASSWORD_START":
      return {
        ...state,
        isLogged: true,
        error: ""
      };

    case "UPDATE_PASSWORD_SUCCESS":
      return {
        ...state.user,
        //isLogged: true,
        dealer_password: action.payload
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
