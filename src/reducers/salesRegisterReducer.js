// REGISTER REDUCER FOR SALESMAN

const initialState = {
  user: [],
  isRegistering: false,
  error: []
};

export const salesRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG_SALESMAN_START":
      return {
        ...state,
        isRegistering: true
      };
    case "REG_SALESMAN_SUCCESS":
      return {
        ...state,
        isRegistering: false,
        user: action.payload
      };

    case "REG_SALESMAN_FAILURE":
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };

    default:
      return state;
  }
};
