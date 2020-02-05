const initialState = {
  isLoading: false,
  deletedLead: [],
  message: ""
};

export const deletedLeadReducer = (state = initialState, action) => {
  switch (action.type) {
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
        message: "Lead deleted Successfully",
        deletedLead: action.payload
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
