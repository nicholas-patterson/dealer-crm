const initialState = {
  leads: [],
  isLoading: false,
  error: ""
};

export const getSalesmanLeadReducer = (state = initialState, action) => {
  console.log("IN REDUCER", state.leads);
  switch (action.payload) {
    case "GET_SALESMAN_LEADS_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SALESMAN_LEADS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: action.payload
      };

    case "GET_SALESMAN_LEADS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
