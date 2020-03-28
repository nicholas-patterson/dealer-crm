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

    case "DELETE_SALESMAN_NOTIF_START":
      return {
        ...state,
        loading: true
      };

    case "DELETE_SALESMAN_NOTIF_SUCCESS":
      return {
        ...state,
        notifications: state.notifications.filter(
          notif => notif.id !== action.payload.id
        )
      };

    case "DELETE_SALESMAN_NOTIF_FAILURE":
      return {
        ...state,
        error: action.payload.status
      };

    default:
      return state;
  }
};
