const initalState = {
  leads: [],
  isLoading: false,
  error: ""
};

export const getDealerLeadReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DEALER_LEADS_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_DEALER_LEADS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: action.payload
      };
    case "GET_DEALER_LEADS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
