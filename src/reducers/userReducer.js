const initialState = {
  user: "salesman"
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_TYPE":
      return {
        ...state,
        user: state.user
      };
    default:
      return state;
  }
};
