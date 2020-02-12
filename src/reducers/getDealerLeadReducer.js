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
    case "EDIT_LEAD_START":
      return {
        ...state,
        isLoading: true
      };

    case "EDIT_LEAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: state.leads.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };

    case "EDIT_LEAD_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case "DELETE_LEAD_START":
      return {
        ...state,
        isLoading: true,
        message: ""
      };
    case "DELETE_LEAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: state.leads.filter(lead => {
          return lead.id !== action.payload.id;
        })
      };
    case "DELETED_LEAD_FAILURE":
      return {
        ...state,
        isLoading: false,
        message: "Lead not deleted. Try again"
      };
    default:
      return state;
  }
};
