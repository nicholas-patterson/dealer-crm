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
        error: "Login Failed"
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
      console.log("PAYLOAD IN REDUCER", action.payload);
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
      console.log("PAYLOAD IN REDUCER PASSWORD", action.payload);
      return {
        ...state.user,
        isLogged: true,
        dealer_password: action.payload
      };

    case "UPDATE_PASSWORD_FAILURE":
      return {
        ...state,
        isLogged: true,
        error: action.payload
      };

    default:
      return state;
  }
};
