const initialState = {
  notifications: [],
  loading: false,
  error: ""
};

export const getSalesmanNotificationReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_SALESMAN_NOTIFICATIONS_START":
      return {
        ...state,
        loading: true
      };
    case "GET_SALESMAN_NOTIFICATIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        notifications: action.payload
      };

    case "GET_SALESMAN_NOTIFICATIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
