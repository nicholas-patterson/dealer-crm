const initialState = {
  link: "dashboard"
};

export const dealerNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DASHBOARD_LINK_START":
      return {
        ...state
      };

    case "FETCH_DASHBOARD_LINK_SUCCESS":
      return {
        ...state,
        link: action.payload
      };

    case "FETCH_DASHBOARD_LINK_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
