const initialState = {
  user: [],
  isRegistering: false,
  error: ""
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG_USER_START":
      return {
        ...state,
        isRegistering: true
      };
    case "REG_USER_SUCCESS":
      return {
        ...state,
        isRegistering: false,
        user: action.payload
      };

    case "REG_USER_FAILURE":
      return {
        ...state,
        isRegistering: false
      };

    default:
      return state;
  }
};
