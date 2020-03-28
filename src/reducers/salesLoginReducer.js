const initialState = {
  isLogged: false,
  user: [],
  error: ""
};

export const salesLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SALES_USER_START":
      return {
        ...state,
        isLogged: false
      };
    case "LOGIN_SALES_USER_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: action.payload
      };

    case "LOGIN_SALES_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: "Login Failed"
      };

    case "LOGOUT_USER_START":
      return {
        ...state,
        isLogged: true
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        isLogged: false
      };

    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        isLogged: false,
        error: ""
      };

    default:
      return state;
  }
};
