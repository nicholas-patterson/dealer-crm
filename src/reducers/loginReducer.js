const initialState = {
    isLogged: false,
    user: [],
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
          user: action.payload.data,
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
          isLogged: true,
          //token: action.payload
        };
      case "LOGOUT_USER_SUCCESS":
        return {
          ...state,
          isLogged: false,
          //token: localStorage.clear()
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