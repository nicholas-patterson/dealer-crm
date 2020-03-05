const initialState = {
  lead: [],
  isLoading: false,
  error: ""
};

export const addLeadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LEAD_START":
      return {
        ...state,
        isLoading: true
      };
    case "ADD_LEAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        lead: action.payload
      };
    case "ADD_LEAD_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
