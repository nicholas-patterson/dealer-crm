const initialState = {
  leads: [],
  isLoading: false,
  error: ""
};

export const getSalesLeadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SALES_LEADS_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SALES_LEADS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: action.payload
      };
    case "GET_SALES_LEADS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case "ADD_SALES_LEAD_START":
      return {
        ...state,
        isLoading: true
      };
    case "ADD_SALES_LEAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: [...state.leads, action.payload]
      };

    case "ADD_SALES_LEAD_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case "EDIT_SALES_LEADS_START":
      return {
        ...state,
        isLoading: true
      };

    case "EDIT_SALES_LEADS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: state.leads.map(lead =>
          lead.id === action.payload.id ? action.payload : lead
        )
      };

    case "EDIT_SALES_LEADS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case "DELETE_SALESMAN_LEAD_START":
      return {
        ...state,
        isLoading: true
      };

    case "DELETE_SALESMAN_LEAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        leads: state.leads.filter(lead => lead.id != action.payload.id)
      };

    case "DELETE_SALESMAN_LEAD_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
