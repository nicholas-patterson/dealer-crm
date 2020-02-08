const initialState = {
  user: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_TYPE":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
