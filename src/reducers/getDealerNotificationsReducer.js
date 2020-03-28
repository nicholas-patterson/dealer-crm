const initialState = {
  notifications: [],
  loading: false,
  error: ""
};

export const getDealerNotificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DEALER_NOTIFICATIONS_START":
      return {
        ...state,
        loading: true
      };

    case "GET_DEALER_NOTIFICATIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        notifications: action.payload
      };

    case "GET_DEALER_NOTIFICATIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "DELETE_DEALER_NOTIF_START":
      return {
        ...state,
        loading: true
      };

    case "DELETE_DEALER_NOTIF_SUCCESS":
      return {
        ...state,
        loading: false,
        notifications: state.notifications.filter(notif => {
          return notif.id !== action.payload.id;
        })
      };

    case "DELETE_DEALER_NOTIF_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
